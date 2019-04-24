import React from "react";
import "./style.css";

function Jumbotron(props) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Click 'N Collect</h1>
        <p>Your one-click-shop-or-stop game!</p>
        <hr class="my-4 bg-dark"></hr>
        <p>You may only click on an item once or you will have to start over.</p>
        <p>Each shirt is $10. There are 12 different shirts. Shop til you drop!</p>
      </div>
    </div>
  );
}

export default Jumbotron;
