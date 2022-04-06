import React, { Component } from 'react'

export default class GifStateAPIBrowser_05 extends Component {
  constructor(props){
    super(props);
    this.state = {
      gifdata: [],
      textinput : '',
    }
    this.getInput = this.getInput.bind(this);
    this.submitInput = this.submitInput.bind(this);
  }

  getDataAPI = async v => {
    let SEARCH = v;
    const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=12`;
    console.log('Start loading....');
    await fetch(URL)
      .then(response => response.json())
      .then(result => {
        this.setState({gifdata: result.data},() => console.log('Finish loading'));
      }).catch(err => console.error(err))
  }

  submitInput(){
    this.setState(() => this.getDataAPI(this.state.textinput)); //memastikan fungsi memanggil sesuai dengan state textinput d
    console.log('Submitted Input: ' + this.state.textinput);
  }

  getInput(v){
    this.setState({textinput : v.target.value});
  }

  render(){
    const {gifdata} = this.state;
    const {getInput, submitInput} = this;
    const gifitem = gifdata.map(content =>(
      <div key={content.id} className="gif-content">
        <h5>{content.title}</h5>
        <img src={content.images.fixed_height.url} alt="GIF Image"></img>
      </div>
    ))

    return (
      <div>
        <input type="text" onChange={getInput}></input>
        <input type="submit" onClick={submitInput}></input>
        <div>
          {gifitem}
        </div>
      </div>
    );
  }
}
