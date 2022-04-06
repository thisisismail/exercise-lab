import React from 'react';
import {useState, useEffect} from 'react';

const ID = '8699333de5604b2587b73f95f3c2daa7';
const REDIRECT_URI = 'http://localhost:3000';
const AUTH_URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${ID}&scope=playlist-modify-private&redirect_uri=${REDIRECT_URI}`;

export default function DummySpotifyResult() {

  const [getauthapi, setGetauthapi] = useState('');
  const [submitgetauthapi, setSubmitgetauthapi] = useState(false);
  const [input, setInput] = useState('');
  const [submitinput, setSubmitinput] = useState(false);
  const [message, setMessage] = useState('YOU ARE NOT AUTHORIZED');
  const [login, setLogin] = useState('LOGIN');
  const [apidata, setApidata] = useState([]);
  

  useEffect(() => {
    const token = 
      window.location.hash && window.location.hash
        .substring(1)
        .split("&")
        .find((v) => v.startsWith("access_token"))
        .replace("access_token=", "");
    setGetauthapi(token);
  }, []);

  useEffect(() =>{
    if(getauthapi !== ''){
      setMessage('YOU ARE AUTHORIZED'); setLogin('RELOGIN')};
  }, [getauthapi]);

  useEffect(() => {
    getDataAPI();
  }, [submitinput]);

  const getDataAPI = async () => {
    const token = getauthapi;
    const search = input;
    if(token === '' || search === ''){return 0};
    const result = 
      await fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=12`, { 
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => response.json())
        .then(result => {
          setApidata(result.tracks.items); 
          return result;
        })
        .then(result => console.log(result.tracks.items))
  };

  const handleBtnAuth = () => {
    setSubmitgetauthapi(!submitgetauthapi);
    console.log('Getting New Auth Token API ....');
  };

  const submitInput = () => {
    setSubmitinput(!submitinput);
    getDataAPI();
    console.log(message);
    console.log('Submitted Input: ' + input);
  };

  const getInput = (v) => {
    setInput(v.target.value);
  };

  const resultData = apidata.map(content =>(
    <div key={content.id} >
      <h5>{content.name}</h5>
      <img src={content.album.images[2].url} alt="GIF Image"></img>
    </div>
  ));

  return (
    <div>
      <div>{message}</div>
        <a href={AUTH_URL}><button onClick={handleBtnAuth} href={AUTH_URL}>{login}</button></a>
        <div>
          <input type="text" onChange={getInput}></input>
          <input type="submit" value="SEARCH" onClick={submitInput}></input>
        </div>
        <div>
          {resultData}
        </div>
    </div>
  )
}
