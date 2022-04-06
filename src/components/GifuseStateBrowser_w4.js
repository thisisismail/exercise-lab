import React from 'react';
import {useState} from 'react';

export default function GifuseStateBrowser_w4() {
  const [gifdata, setGifdata] = useState([]);
  const [textinput, setTextinput] = useState('');

  const getDataAPI = async v => {
    let SEARCH = v;
    const APIKEY = 'q9OHrAuU0weVyvMHedp59fzZSH0CxEbI';
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${SEARCH}&limit=12`;
    console.log('Start loading....');
    await fetch(URL)
      .then(response => response.json())
      .then(result => {
        setGifdata(result.data);
        console.log('Finish loading');
      }).catch(err => console.error(err))
  };

  const submitInput = () => {
    console.log('Submitted Input: ' + textinput);
    getDataAPI(textinput); 
  };

  const getInput = v => {
    setTextinput(v.target.value);
  };

  const gifitem = gifdata.map(content =>(
    <div key={content.id} className="gif-content">
      <h5>{content.title}</h5>
      <img src={content.images.fixed_height.url} alt="GIF Image"></img>
    </div>
  ));

  return (
    <div>
        <input type="text" onChange={getInput}></input>
        <input type="submit" onClick={submitInput}></input>
        <div>
          {gifitem}
        </div>
    </div>
  )
}
