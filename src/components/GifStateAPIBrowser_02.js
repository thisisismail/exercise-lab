import React, { Component } from 'react'

export default class GifStateAPIBrowser_02 extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
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
        this.setState({loading: true}, console.log('Start loading...')); // false -> true -> false: can improve performance for image loading
        this.changeTitle(result.data[0].title);
        this.changeSource(result.data[0].images.original.url);
      })
  }
  
  changeTitle = (v) => {
    this.setState({title: v});
  }

  changeSource = (v) => {
    this.setState({source: v, loading: false}, console.log('Finish loading'));
  }

  getInput(event){
  this.setState({textinput : event.target.value});
  }

  submitInput(){
  this.setState(() => this.getDataAPI(this.state.textinput));
  console.log('Submitted Input: ' + this.state.textinput);
  }

  render(){
    const {textinput, title, source, loading} = this.state;
    const {getInput, submitInput} = this;

    if(loading){
      return(
        <div>
          LOADING...
        </div>
      );
    }

    return (
      <div>
        <input type="text" onChange={getInput}></input>
        <input type="submit" onClick={submitInput}></input>
        {/* <h3>{textinput}</h3> */}
        {}
        <div>
          <h4>{title}</h4>
          <img src={source} alt="GIF Image"></img>
        </div>
      </div>
    );
  }
}
