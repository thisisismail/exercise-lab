import React from 'react';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import inputText from './actions/index.js';
import { ImageListItem, ImageList } from '@mui/material';


function GifBrowser_Redux(props) {
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
    props.input(textinput); // ubah state di reducer dengan textinput
    console.log(props.pesan)
  };

  const getInput = v => {
    setTextinput(v.target.value);
  };

  // const gifitem = gifdata.map(content =>(
  //   <div key={content.id} className="gif-content">
  //     <h5>{content.title}</h5>
  //     <img src={content.images.fixed_height.url} alt="GIF Image"></img>
  //   </div>
  // ));

  //////////////////////////////// ini tinggal ditambahin kode dari material UI///////////////////////////////
  const gifitemMUI = ( 
    <div className="gif-content">
    <ImageList
      sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {gifdata.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            src={item.images.fixed_height.url}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
  //////////////////////////////// ini tinggal ditambahin sampe sini kode dari material UI/////////////////////////
  

  return (
    <div>
      <input type="text" onChange={getInput} list="browser" />  
      {/* cuman butuh nama list, yang nantinya di compare ke id datalist di bawah */}
      {/* pakai <blabala/> jangan <blabala></blabala> */}
      <datalist id="browser">
        {props.searchHistory.reverse().map( content =>(
          <option key={content} value={content} />
        ))}
      </datalist>
      {/* taro input sama datalist nya dampingan biar lebih aman */}
      <input type="submit" onClick={submitInput}></input>
      {/* <h5>previous search: {props.searchHistory}</h5> */}
      <div>
        {gifitemMUI}
        {/* diubah jadi gifitemMUI kalau perlu */}
        </div>
    </div>
  )
}

const mapStateToStore = state => {
  return {
    searchHistory: state.inputTextReducer //ambil state di reducer
  }
}

const mapDispatchToStore = dispatch => {
  return {
    input: (text) => dispatch(inputText(text)) // persiapan ubah state di reducer
  }
}

export default connect(mapStateToStore, mapDispatchToStore)(GifBrowser_Redux)
