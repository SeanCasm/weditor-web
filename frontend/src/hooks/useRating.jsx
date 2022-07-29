import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useRating = (levelID) => {
  const [rating, setrating] = useState(0);
  const dispatch = useDispatch();

  const startGet = async () => {
  
  };
  const startUpload = async ({ levelName, description, file }) => {
    
  };

  return {
    startGet,
    startUpload,
  };
};
