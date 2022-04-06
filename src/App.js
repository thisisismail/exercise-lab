import "./styles.css";
import data from "./data/gifData";
import ClassComponent from "./components/ClassComponent";
import CallApi from "./data/axiosApi";
import ClassNetwork from "./components/ClassNetwork";
import StateAPI from "./components/StateAPI";
import Example from "./components/Example";
import RealStateAPI from "./components/RealStateAPI";
import GifStateAPI from "./components/GifStateAPI";
import GifStateAPIBrowser from "./components/GifStateAPIBrowser";
import GifStateAPI_02 from "./components/GifStateAPI_02";
import GifStateAPIBrowser_02 from "./components/GifStateAPIBrowser_02";
import GifStateAPIBrowser_03 from "./components/GifStateAPIBrowser_03";
import GifStateAPIBrowser_04 from "./components/GifStateAPIBrowser_04";
import GifStateAPIBrowser_05 from "./components/GifStateBrowser_05";
import GifuseStateBrowser from "./components/GifuseStateBrowser";
import SpotifyAPIFirstStep from "./components/SpotifyAPIFirstStep";
import GifuseStateBrowser_w4 from "./components/GifuseStateBrowser_w4";
import {Sample} from "./components/Router_w4";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'


// function filtering (v) {
//   return v === 'pg'; /* this is the return !! */
// };

// /* Below is the alternatives to data.filter((v) => filtering(v.rating) )*/

// /* data.filter((v) => v.rating === 'pg') ---------------> you should use parentheses or noting to do implicit return*/
// /* data.filter((v) => (v.rating === 'pg')) -------------> another example of implicit return, you can use the call back function instead*/
// /* data.filter((v) => (filtering(v.rating)) ) ----------> implicit return also, using additional parentheses bracket*/
// /* data.filter((v) => {return v.rating === 'pg'}) ------> you should use curly bracket to do explicit return*/ 

// const printL = data.filter((v) => filtering(v.rating) ).map((parameter) => (
//   <div id="mainExample"key={parameter.id}>                                                                    
//     <div>{parameter.id}</div>
//     <img src={parameter.url} alt="this is gif"></img>
//   </div>
// ));

/** jangan lupa pakai key */
 /* yeah, i use implicit arrow function because you can see there is no curly bracket up there */ 
 /* So, that is the example of implicit arrow function */
/* for more intuitive, here is the explanation*/ 
/* we hide the return behind the call back function called filtering(v), so it is not explicit declared*/ 

import {increment, decrement, loggedin} from './actions'


export default function App() {
  return (
    <>
      <div className="App">
      {/* {printL} */}
      {/* <Example/> */}
      {/* <StateAPI/> */}
      {/* {callApi()} */}
      {/* <ClassComponent/> */}
      {/* <ClassNetwork/> */}
      {/* <stateAPI /> */}
      {/* <RealStateAPI/> */}
      {/* <GifStateAPI/> */}
      {/* <GifStateAPI_02/> */}
      {/* <GifStateAPIBrowser/> */}
      {/* <GifStateAPIBrowser_02/> */}
      {/* <GifStateAPIBrowser_03/> */}
      {/* <GifStateAPIBrowser_04/> */}
      {/* <GifStateAPIBrowser_05/> */}
      {/* <GifuseStateBrowser/> */}
      {/* <SpotifyAPIFirstStep/> */}
      {/* <GifuseStateBrowser_w4/> */}

      {/* <Sample/> */}
      </div>
    </>
    
    );
}
