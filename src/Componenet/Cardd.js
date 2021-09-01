import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

function Cardd({ elcard }) {
  return (
    <Card style={{ width: "18rem", marginTop: "20px" }}>
      <Card.Img variant="top" src={elcard.imgsrc} />
      <Card.Body>
        <Card.Title>{elcard.title}</Card.Title>
        <Card.Text>{elcard.year} </Card.Text>
        {/* <Card.Trailer>{elcard.trailer}</Card.Trailer> */}
        <StarRatingComponent starCount={5} value={elcard.rating} />

        <Link
          to={{
            pathname: "/description",
            state: { title: elcard.title, trailer: elcard.trailer },
          }}
        >
          Description
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Cardd;
