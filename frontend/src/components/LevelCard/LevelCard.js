import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { Rating } from "react-simple-star-rating";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

export const LevelCards = ({ levelData }) => {
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate = 0) => {
    setRating(rate);
    // other logic
  };
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{levelData.levelName}</Card.Title>
        <div>
          <Card.Text>Downloads: {levelData.downloads}</Card.Text>
          <button>
            <Card.Img
              style={{ width: "32px" }}
              src="https://cdn-icons-png.flaticon.com/128/1191/1191227.png?ga=GA1.2.1917655979.1659037910"
            ></Card.Img>
          </button>
        </div>
        <div>
          <Card.Text>Rating: {levelData.rating}</Card.Text>
          <h2>Rate level:</h2>
          <Rating
            size={23}
            showTooltip
            allowHalfIcon
            onClick={handleRating}
            ratingValue={rating} /* Available Props */
          />
        </div>
        <Button>

        </Button>
      </Card.Body>
    </Card>
  );
};
LevelCards.propTypes = {
  nickname: PropTypes.object,
};
