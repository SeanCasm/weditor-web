import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { levelApi } from "../api/levelApi";
import { onModalDisplay, onModalHide, onSaveError } from "../store";

export const useLevelConfig = () => {
  const { status, levelName, description } = useSelector(
    (state) => state.levelModal
  );
  const [deleteOption, setDeleteOption] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startGet = async () => {};

  const onDisplayModal = (levelName, description) => {
    dispatch(onModalDisplay({ levelName, description }));
  };
  const onDelete = async (levelData) => {
    await levelApi
      .delete(`${levelData._id}`)
      .then((data) => {
        levelData = {};
        onHideModal();
        navigate("myLevels", { replace: true });
      })
      .catch((err) => {
        onHideModal();
        console.log({ err });
      });
  };
  const onDoneChanges = async (levelData) => {
    const { description, _id } = levelData;
    await levelApi
      .patch(`/${_id}`, { description })
      .then(({ data }) => {
        console.log(data);
        levelData = data;
        onHideModal();
      })
      .catch((err) => {
        console.log(err);
        dispatch(onSaveError(err.response.data.error.msg));
      });
  };
  const onHideModal = () => {
    dispatch(onModalHide());
  };
  return {
    startGet,
    levelName,
    description,
    status,
    onDisplayModal,
    onHideModal,
    onDoneChanges,
    onDelete,
    setDeleteOption,
    deleteOption,
  };
};
