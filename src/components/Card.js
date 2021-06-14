import React from "react";

function Card(props) {
  return (
    <div className="m-2 d-flex justify-content-center">
      <img style={{ width: "100px" }} src={props.avatar} alt="avatar" />
      <h4 className="p-3 mt-3">{props.login}</h4>
      <a className="p-3 mt-3" href={props.url}>
        {props.name}
      </a>
    </div>
  );
}

export default Card;
