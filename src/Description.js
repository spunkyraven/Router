import React from "react";
import ReactPlayer from "react-player";
const Description = ({ location }) => {
  return (
    <div>
      <h1>TRAILER</h1>
      <div className="Description">
        <h1>{location.state.title}</h1>
        <div>{location.state.trailer}</div>

        <ReactPlayer src={location.state.trailer} />
      </div>
    </div>
  );
};

export default Description;
Description.defaultProps = {
  state: { title: "inconnu", trailer: "no" },
};
