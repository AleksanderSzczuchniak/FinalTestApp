import React, { Component } from "react";

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    fetch("https://randomuser.me/api?results=10")
      .then(response => response.json())
      .then(data => this.setState({ data: data.results }));
  }

  render() {
    return (
      <div>
        {this.state.data &&
          this.state.data.map(user => (
            <div>
              <h1> Wielki Finał !</h1>
              <h2> prosze o zaliczenie xd </h2>
              <div>
                <img src={user.picture.medium}
                />
              </div>
              <div>
                {user.email}
              </div>
              <div>
                {user.name.last}
                {user.name.first}
              </div>
              <hr />
            </div>
          )
          )
        }
      </div>
    );
  }
}

export default App;
