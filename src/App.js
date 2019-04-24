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
    shirts: 0,            //keeps tracks of number of shirts clicked (once)
    total: 0              //keeps track of total if each shirt is clicked (once)
  };

  // handles click event on each image
  handleClick = id => {
    //if id is already in clicked array, reset
    if(this.state.clicked.indexOf(id) >= 0) {
      this.setState({shirts: 0})
      this.setState({total: 0})
      this.setState({clicked: []})
    } else {                        //else increment shirts, total and add ID into clicked array
      this.setState({shirts: this.state.shirts + 1})
      this.setState({total: this.state.total + 10})
      this.setState({clicked: [...this.state.clicked, id]})
    }

    //if total has reached the max (each image clicked once), reset
    if (this.state.total === 120) {
      this.setState({shirts: 0})
      this.setState({total: 0})
      this.setState({clicked: []})
    }

    //call shuffle function
    this.shuffle(this.state.images)

  };

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
        <Title>Number of Shirts: {this.state.shirts} | Total: $ {this.state.total}.00 </Title>
        <Wrapper>
        {this.state.images.map(picture => (
          <ImageCard
            handleClick={this.handleClick}
            id = {picture.id}
            image = {picture.image}
            counter = {this.state.counter}
          />
        ))}
        </Wrapper>
        </div>
    );
  }
}

export default App;
