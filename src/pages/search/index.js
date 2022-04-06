import React, {Component} from "react";

class searchBarInput extends Component {
  state = { gif: []};

  getGif = async () => {
    const gif = await fetch(
      ''
    ).then((response) => response.json);
    this.setState({gif});
  }

  render(){
    const { counter } = this.state;
    return(
      <div>
        <h1>{counter}</h1>
        <button
          onClick={this.incrementBtn}>((( + )))</button>
      </div>

    )
  }
}

export default searchBarInput;