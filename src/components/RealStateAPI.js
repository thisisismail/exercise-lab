import React, { Component } from 'react'

const SEARCH = 'game';
const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=5`;

class RealStateAPI extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: 'EMPTY',
       source: 'EMPTY',
       
    }
  }

  change = (v) => {
    this.setState({title: v})
  }

  getApi = async () => {
    await fetch(URL)
      .then(response => response.json())
      .then(result => this.change(result.data[0].title));
  }

  render() {
    const{title} = this.state;
    return (
      <>
      <div>{title}</div>
      <button onClick={this.getApi}>CHANGE</button>
      </>
    )
  }
}

export default RealStateAPI;
