import React, { Component } from 'react'
import data from '../data/gifData';

const SEARCH = 'game';
const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=5`;

const dataProcess = () => {
  return(
    <div>
      kodok
    </div>
  )
}
// const getApi = () => {
//   fetch(URL)
//   .then(response => response.json())
//   .then(result => {
//     console.log(result.data[0].title);
//     const h = dataProcess(result.data[0].title);
//     return h;
//   })
// }
// getApi();

class ClassNetwork extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
       message: 'Hello'
    }
  }
  render() {
    const {message} = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <h2>{this.dataProcess}WKKWKW</h2>
        <h3>HAHA</h3>
      </div>
    )
  }
}

export default ClassNetwork;