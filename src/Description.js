import React from "react";
import { useHistory } from "react-router";
import "./Description.css";
const Description = ({ location }) => {
  const history = useHistory();

  return (
    <div>
      <h1 id="TT" Style="color :White">
        TRAILER
      </h1>

      <div className="Description">
        <h1 Style="color:White">{location.state.title} </h1>
        <div>{location.state.trailer}</div>
      </div>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};
export default Description;
