import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import images from "./images.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    images: images,       //load images.jason initially
    clicked: [],          //once image is clicked, store ID in this array
    highest: 0,            //keeps tracks of number of shirts clicked (once)
    total: 0              //keeps track of total if each shirt is clicked (once)
  };

  // handles click event on each image
  handleClick = id => {
    //if id is already in clicked array, reset
    if(this.state.clicked.indexOf(id) >= 0) {
      alert("Oops, you already picked that shirt. Try again!");
      this.setState({total: 0})
      this.setState({clicked: []})
    } else {
      this.setState({total: this.state.total + 10})
      if (this.state.total === this.state.highest) {
        this.setState({highest: this.state.highest + 10})
        if (this.state.total === 110) {
          //if total has reached the max (each image clicked once), reset
          alert("You got all the shirts! Shop again soon!");
          this.setState({highest: 0})
          this.setState({total: 0})
          this.setState({clicked: []})
        } else                 //else increment shirts, total and add ID into clicked array
          this.setState({clicked: [...this.state.clicked, id]})
      }
    }

    //call shuffle function
    this.shuffle(this.state.images)
  }

    //algorithm for shuffling elements in array
    shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }

    this.setState({images: array})
  }



  // Map over this.state.images and render image on the page
  render() {
    return (
      <div class="container">
        <Jumbotron/>
        <Title>Total: ${this.state.total}.00 | Highest Amount Spent: ${this.state.highest}.00 </Title>
        <Wrapper>
        {this.state.images.map(picture => (
          <ImageCard
            handleClick={this.handleClick}
            id = {picture.id}
            image = {picture.image}
          />
        ))}
        </Wrapper>
        </div>
    );
  }
}

export default App;
