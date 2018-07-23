import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import logo from './bankbazaar-logo.png';
import gender from './sprite-gender.png';
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
            <header className = "App-header landingpage-sticky" >
            <div className = "App-logo" > <img src = { logo }  alt = "logo" / ></div>
           <span className="logo-border"></span>
           
            <nav className="menu-nav">
            <ul className="menu-left">
            <li className="loans-menu">
                <a href="/loan.html" data-target="#loans" title="Apply Loan Online">LOANS</a>                
            </li>
            <li className="loans-menu">
                <a href="/loan.html" data-target="#loans" title="Apply Loan Online">CARDS</a>                
            </li>
             <li className="loans-menu">
                <a href="/loan.html" data-target="#loans" title="Apply Loan Online">INSURANCE</a>                
            </li>
             <li className="loans-menu">
                <a href="/loan.html" data-target="#loans" title="Apply Loan Online">INVESTMENTS</a>                
            </li>
            <li className="creditscore-menu">
                <a href="/credit-score.html?utm_source=bb&amp;utm_medium=display&amp;utm_campaign=HEADER" data-target="#credit-score" title="Free Credit Score">FREE CREDIT SCORE</a>
                      
                           
                                  
                           
                    </li>
            </ul>

           
<ul className="menu-right  short-menu-right ">
<li>
<a href="javascript:void(0)" className="dropdown-toggle menu-login social-sign-in js-sign-in" executeafter="SocialLogin.init();" rel="nofollow"  title="Login">
                Login
            </a>
</li>
</ul>
            </nav>
            </header > <p className = "App-intro" >

            </p> 
              <div className="center">
         <ReactSwipe ref={el => (this.reactSwipe = el)} className="mySwipe"  swipeOptions={swipeOptions}>
             <Slide>
            <div>
              <p>Description Slide</p>
             <a>
             <img onClick={this.next} src={gender} />
             </a>
               
            </div>
          </Slide>
          <Slide>
            <div>
              <p>code for page 2 goes here</p>
              <input type="text" placeholder="Birth date"/>
              <br/>
              
          <button type="button" onClick={this.next}>Submit</button>
            </div>
          </Slide>
 <Slide>
            <div>
              <p>code for page 3 goes here</p>

               <input type="text" placeholder="Current city"/>
              <br/>
              
          <button type="button" onClick={this.next}>Submit</button>
             
            </div>
          </Slide>
           <Slide>
            <div >
              <p>code for page 4 goes here</p>
               <input type="text" placeholder="Company You work"/>
              <br/>
          
            </div>
          </Slide>
         </ReactSwipe>
  <button type="button" onClick={this.prev}>Prev</button>
          <button type="button" onClick={this.next}>Next</button>
          <div>
         
        </div>
            </div>
           

         </div>   
          
      
        );
    }
}

export default App;