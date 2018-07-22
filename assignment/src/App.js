import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactSwipe from 'react-swipe';
import styled from "styled-components";






 const Slide = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
  transition-timing-function: ease-in-out;

  img {
    max-width: 100%;
    max-height: 100%;
    display: block;
  }
`;



class App extends Component {
    constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
      slideCount: 0,
      
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.getSlideCount = this.getSlideCount.bind(this);
    this.getSlideIndex = this.getSlideIndex.bind(this);
  }
  componentDidMount() {
    this.getSlideIndex();
    this.getSlideCount();
  }

  next() {
    this.reactSwipe.next();
  }

  prev() {
    this.reactSwipe.prev();
  }

  getSlideIndex() {
    this.setState({ currentSlideIndex: this.reactSwipe.getPos() });
  }

  getSlideCount() {
    this.setState({ slideCount: this.reactSwipe.getNumSlides() });
  }
    render() {
         const swipeOptions = {
      callback: () => {
        this.getSlideIndex();
        this.getSlideCount();
      },
      speed: 500
    };
        return ( 
            <div className = "App" >
            <header className = "App-header" >
            <img src = { logo }  className = "App-logo" alt = "logo" / >
            <h1 className = "App-title" > Welcome To Bank Bazzar </h1> 
            </header > <p className = "App-intro" >

            </p> 
              <div className="center">
         <h1>ReactSwipe.js </h1>
         <h2>Open this page from a mobile device (real or emulated).</h2>
        <h2>You can pass <a href="https://github.com/voronianski/swipe-js-iso#config-options">Swipe.js options</a> as query params.</h2>

         <ReactSwipe ref={el => (this.reactSwipe = el)} className="mySwipe"  swipeOptions={swipeOptions}>
             <Slide>
            <div>
              <p>Description Slide</p>
              <p>code for page 1 goes here</p>
                <button type="button" onClick={this.next}>Next</button>
            </div>
          </Slide>
          <Slide>
            <div>
              <p>code for page 2 goes here</p>
               <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
            </div>
          </Slide>
 <Slide>
            <div>
              <p>code for page 3 goes here</p>
               <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
            </div>
          </Slide>
           <Slide>
            <div>
              <p>code for page 4 goes here</p>
               <button type="button" onClick={this.prev}>Prev</button>
          
            </div>
          </Slide>
         </ReactSwipe>

          <div>
          <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
        </div>
            </div>
           

         </div>   
          
      
        );
    }
}

export default App;