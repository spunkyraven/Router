import React from "react";
import { useHistory } from "react-router";
import "./Description.css";
const Description = ({ location }) => {
  const history = useHistory();

  return (
    <div>
      <h1>TRAILER</h1>
      <h1>{location.state.title} </h1>
      <div className="Description">
        <div>
          <iframe
            width="560"
            height="315"
            src={location.state.trailer}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};
export default Description;
