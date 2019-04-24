import React from "react";
import "./style.css";

function ImageCard(props) {
  return (
      <div class="col-lg-3 align-self-center">
        <img class="rounded mx-auto d-block img-fluid" onClick={() => props.handleClick(props.id)} alt={props.id} src={props.image} />
      </div>
  );
}

export default ImageCard;
