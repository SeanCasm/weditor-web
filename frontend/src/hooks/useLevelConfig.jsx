import { useDispatch, useSelector } from "react-redux";
import { onModalDisplay, onModalHide } from "../store";

export const useLevelConfig = () => {
  const { status, levelName } = useSelector((state) => state.levelModal);
  const dispatch = useDispatch();
  const startGet = async () => {};

  const onDisplayModal = () => {
    dispatch(onModalDisplay());
  };
  const onHideModal = () => {
    dispatch(onModalHide());
  };
  return {
    startGet,
    levelName,
    status,
    onDisplayModal,
    onHideModal,
  };
};
