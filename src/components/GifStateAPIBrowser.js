import React, { Component } from 'react'

export default class GifStateAPIBrowser extends Component {
  constructor(props){
    super(props);

    this.state = {
      textinput : '',
      title: 'HELLO',
      source: 'https://www.freepnglogos.com/uploads/welcome-png/classic-red-welcome-banner-transparent-png-stickpng-26.png',
    }

    this.getInput = this.getInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  getDataAPI = async (v) => {
    let SEARCH = v;
    const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=5`;
    await fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.changeTitle(result.data[0].title);
        this.changeSource(result.data[0].images.downsized_medium.url);
      })
  }
  
  changeTitle = (v) => {
    this.setState({title: v})
  }

  changeSource = (v) => {
    this.setState({source: v})
  }

  getInput(event){
  this.setState({textinput : event.target.value});
  }

  submitInput(){
  console.log('Your input value is: ' + this.state.textinput);
  this.setState(() => this.getDataAPI(this.state.textinput));
  //Send state to the server code
  }

  render(){
    const {textinput, title, source} = this.state;
    const {getInput, submitInput} = this;
    return (
      <div>
      <input type="text" onChange={getInput}></input>
      <input type="submit" onClick={submitInput}></input>
      {/* <h3>{textinput}</h3> */}
      <h4>{title}</h4>
      <img src={source} alt="GIF Image"></img>
      </div>
    );
  }
}

