import React from "react";
import { PropTypes } from "prop-types";
import { Rating } from "react-simple-star-rating";
import Card from "react-bootstrap/Card";
import { useLevelConfig } from "../../hooks/useLevelConfig";
import { LevelSettings } from "./LevelSettings";

export const LevelDisplay = ({ levelData }) => {
  const { levelName, description, downloads, rating } = levelData;
  const { onDisplayModal, status } = useLevelConfig();

  return (
    <>
      {status && (
        <LevelSettings levelName={levelName} description={description} />
      )}
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{levelName}</Card.Title>
          <div>
            <Card.Text>Downloads: {downloads}</Card.Text>
          </div>
          <div>
            <Card.Text>Rating: {rating}</Card.Text>
            <Rating size={23} allowHalfIcon initialValue={0} readonly />
          </div>
          <div className="d-flex flex-sm-row justify-content-end">
            <button>
              <Card.Img
                style={{ width: "24px" }}
                src="https://cdn-icons-png.flaticon.com/128/1191/1191227.png?ga=GA1.2.1917655979.1659037910"
              ></Card.Img>
            </button>
            <button onClick={onDisplayModal}>
              <img
                width={24}
                alt="More options"
                src="https://cdn-icons-png.flaticon.com/128/1237/1237974.png?ga=GA1.2.1917655979.1659037910"
              />
            </button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
LevelDisplay.propTypes = {
  levelName: PropTypes.string,
  description: PropTypes.string,
  downloads: PropTypes.number,
  rating: PropTypes.number,
};
