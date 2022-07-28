import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { levelApi, levelInfoApi } from "../api";
import {
  onUpload,
  onUploadError,
  onUploading,
  onLoading,
  onLoadSuccess,
  onLoadError,
} from "../store/levelSlice";

export const useLevel = () => {
  const [levels, setLevels] = useState([]);

  const { status, levelName, message } = useSelector((state) => state.level);
  const dispatch = useDispatch();

  const startGet = async (limit, from) => {
    dispatch(onLoading("Loading..."));
    try {
      const { data } = await levelApi.get("", { params: { limit, from } });
      setLevels(data.levels);
      dispatch(onLoadSuccess());
    } catch (err) {
      console.log({ err });
      //   dispatch(onLoadError(err.response.data.errors[0].msg));
    }
  };
  const startUpload = async ({ levelName, description, file }) => {
    const jsonData = JSON.parse(file);
    jsonData.levelName = levelName;
    dispatch(onUploading());
    try {
      const { data } = await levelApi.post("", { levelName, description });
      const { id } = data;
      jsonData.level = id;
      const dataInfo = await levelInfoApi.post("", jsonData);
      dispatch(onUpload(dataInfo.data.msg));
    } catch (err) {
      dispatch(onUploadError(err.response.data.errors[0].msg));
    }
  };

  return {
    startGet,
    levels,
    startUpload,
    setLevels,
    message,
    status,
    levelName,
  };
};
