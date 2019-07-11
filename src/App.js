import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    people: []
  };

  componentDidMount() {
    axios
      .get("https://reqres.in/api/users?page=1")
      .then(response => {
        this.successShow(response);
      })
      .catch(error => {
        this.successShow(error);
      });
  }

  successShow(response) {
    this.setState({
      people: response.data.data
    });
  }

  render() {
    return (
    <div>
    <ul class="list-group w-100">
    {this.state.people.map(({id, first_name, last_name}) => (
      <li class="list-group-item lead list-group-item-action text-center text-primary" key={id}>
        {first_name} {last_name} tiene {first_name.length + last_name.length} Caracteres
      </li>))
    }
  </ul>
  </div>
  );
}

}

export default App;
