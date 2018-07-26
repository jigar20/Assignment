import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import logo from './bankbazaar-logo.png';
import female from './Woman.png';
import male from './men.png';
import './App.css';
import ReactSwipe from 'react-swipe';
import styled from "styled-components";



// slide setting
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

// main class starts
class App extends Component {
    constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0,
      slideCount: 0,
      
    };

    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.getSlideCount = this.getSlideCount.bind(this);
    this.getSlideIndex = this.getSlideIndex.bind(this);

    this.state = {
    company : '',
    day : '',
   
  }
 

  this.updateInput = this.updateInput.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
  this.updateInputDay = this.updateInputDay.bind(this);
 this.handleSubmitDate = this.handleSubmitDate.bind(this);
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

  updateInput(event){
    this.setState({company : event.target.value})
  }


  handleSubmit(){
    console.log('Your input value is: ' + this.state.company)
    if(this.state.company){     
          this.next()
    } 
  }

  updateInputDay(event){
    this.setState({day : event.target.value})
  }
 
  handleSubmitDate(){
    console.log('Your input value is: ' + this.state.day)
    if(this.state.day){
      this.next()   
    }
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
      <div className = "App" className="SlideshowViewDesktop_slideContainer_30QVq">
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
                  <a  className="dropdown-toggle menu-login social-sign-in js-sign-in"    title="Login">
                    Login
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className="eform-strip slide-form-longHeader">
            <h2 className="js-header-content">Check Your Experian Credit Score</h2>
          </div>           
          <div className="center" className="SlideshowViewDesktop_slideContainer_30QVq">
            <ReactSwipe ref={el => (this.reactSwipe = el)} className="mySwipe"  swipeOptions={swipeOptions}>
              <Slide  className="SlideshowViewDesktop_slideContainer_30QVq">
                <div>
                  <p>Please Select Gender</p>
                  <div className="radio-col">
                    <label className="labelContainer checked">
                      <a  >
                        <img  src={female}  height="230" width="314" styled="display:inline;" alt="Female"  onClick={this.next}/>
                          <span className="sprite-gender icon-gender-male"></span>
                          <span className="textLabel">Female</span>
                          <input type="radio" name="gender" value="female" className="myRadio"></input>
                      </a>
                    </label>
                  </div>
                  <div className="radio-col">
                    <label className="labelContainer checked">
                      <a >
                        <img  src={male} height="230" width="314" alt="Male" onClick={this.next}/>
                        <span className="textLabel">Male</span>
                        <input type="radio" name="gender" value="male" className="myRadio"></input>
                      </a>
                    </label>
                  </div>
                  <div className="slideControl">
                    <div className="SlideshowViewDesktop_slideControlNext_3njXD">
                      <a className="SlideshowViewDesktop_slideControlButtonIcon_iILAn" onClick={this.next}>
                        <span className="prevNext"> &rsaquo; </span>
                      </a>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide className="SlideshowViewDesktop_slideContainer_30QVq">
                <div>
                  <p>Please Enter your Birth Date</p>
                  <input type="text" placeholder="Birth date" onChange={this.updateInputDay}  placeholder="DD/MM/YYYY"/>
                  <br/>
                  <br/>                
                  <br/>
                  <div className="slideContainerHackDesktop">
                    <span> 
                      <button  className="btn btn-large " type="button"id="addpisx" onClick={this.handleSubmitDate}> Submit </button>
                    </span>
                  </div>
                </div>
                <div className="slideControl">
                  <div className="SlideshowViewDesktop_slideControlPrev_28nsF">
                    <a className="SlideshowViewDesktop_slideControlButtonIcon_iILAn" onClick={this.prev}>
                      <span className="prevNext"> &lsaquo; </span>
                    </a>
                  </div>
                  <div className="SlideshowViewDesktop_slideControlNext_3njXD">
                    <a className="SlideshowViewDesktop_slideControlButtonIcon_iILAn" onClick={this.handleSubmitDate}>
                      <span className="prevNext"> &rsaquo; </span>
                    </a>
                  </div>
                </div>
              </Slide>
              <Slide className="SlideshowViewDesktop_slideContainer_30QVq">
                <div>
                  <span>Please Input in company you work or you own.</span>
                    <br/>
                    <br/>
                  <input onChange={this.updateInput} placeholder="Company You work For"/>
                    <br/>  
                  <div className="slideContainerHackDesktop">
                    <span>
                      <button className="btn btn-large " value="Submit" id="addpix" onClick={this.handleSubmit}>Submit</button>
                    </span>
                    <br/>
                  <div>           
                  <br/>
                </div>
                <div className="slideControl">
                  <div className="SlideshowViewDesktop_slideControlPrev_28nsF">
                    <a className="SlideshowViewDesktop_slideControlButtonIcon_iILAn" onClick={this.prev}>
                      <span className="prevNext">  &lsaquo; </span>
                    </a>
                  </div>
                  <div className="SlideshowViewDesktop_slideControlNext_3njXD">
                    <a className="SlideshowViewDesktop_slideControlButtonIcon_iILAn" onClick={this.handleSubmit}>
                      <span className="prevNext"> &rsaquo; </span>
                    </a>
                  </div>
                </div>
              </div> 
            </div> 
          </Slide>
           <Slide className="SlideshowViewDesktop_slideContainer_30QVq">
            <div>
              <p>Thank you for your input.You will get your credit-score Soon.</p>             
            </div>
          </Slide>
        </ReactSwipe>
      </div> 
    </div>     
);
}
}

export default App;