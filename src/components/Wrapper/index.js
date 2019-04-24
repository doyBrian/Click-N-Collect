import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div class="row align-items-center">{props.children}</div>;
}

export default Wrapper;
