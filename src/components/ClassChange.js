import React, {Component} from "react";

class ClassChange extends Component {

  state = { users: []};

  getUser = async () => {
    const user = await fetch('https://jsonplaceholder.typicode.com/users').then( response => response.json());
    this.setState({user}) 
  }

}

export default ClassChange;
