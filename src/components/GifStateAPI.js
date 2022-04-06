import React, { Component } from 'react'

const SEARCH = 'love';
const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=5`;

class GifStateAPI extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: 'EMPTY',
      source: 'EMPTY',
    }
    
  }

  getDataAPI = async () => {
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

  render() {
    const {title, source} = this.state;
    const {getDataAPI} = this;
    return (
      <>
        <button onClick={getDataAPI}>GET API</button>
        <h2>{title}</h2>
        <img src={source} alt='gif'></img>
      </>
    )
  }
}

export default GifStateAPI;
