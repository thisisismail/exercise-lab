import React, { Component } from 'react'

export default class GifStateAPIBrowser_03 extends Component {
  constructor(props){
    super(props);

    this.state = {
      gifdata: [],
      textinput : '',
      // title: 'HELLO',
      // source: 'https://www.freepnglogos.com/uploads/welcome-png/classic-red-welcome-banner-transparent-png-stickpng-26.png',
    }

    this.getInput = this.getInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  getDataAPI = async (v) => {
    let SEARCH = v;
    const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=12`;
    console.log('Start loading....');
    await fetch(URL)
      .then(response => response.json())
      .then(result => {
        // this.setState({loading: true}, console.log('Start loading...')); 
        this.setState({gifdata: result.data}, console.log('Finish loading'));
        // console.log(result.data);
        // this.changeTitle(result.data[0].title);
        // this.changeSource(result.data[0].images.original.url);
      }).catch(err => console.error(err))
  }
  
  // changeTitle = (v) => {
  //   this.setState({title: v});
  // }

  // changeSource = (v) => {
  //   this.setState({source: v, loading: false}, console.log('Finish loading'));
  // }

  getInput(v){
    this.setState({textinput : v.target.value});
  }

  submitInput(){
    this.setState(() => this.getDataAPI(this.state.textinput));
    console.log('Submitted Input: ' + this.state.textinput);
  }

  render(){
    const {gifdata} = this.state;
    const {getInput, submitInput} = this;

    return (
      <div>
        <input type="text" onChange={getInput}></input>
        <input type="submit" onClick={submitInput}></input>
        {/* <h3>{textinput}</h3> */}
        <div>
          {gifdata.map(content =>(
            <div key={content.id} className="gif-content">
              <h5>{content.title}</h5>
              <img src={content.images.fixed_height.url} alt="GIF Image"></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
