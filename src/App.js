import React, { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.searchMonsters = this.searchMonsters.bind(this);
  }

  async componentDidMount() {
    let users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    this.setState(() => {
      return { monsters: users };
    });
  }

  searchMonsters(e) {
    this.setState({ searchField: e.target.value.toLocaleLowerCase() });
  }

  render() {
    let filteredMonsters = this.state.monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(this.state.searchField)
    );
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.searchMonsters}
        />
        {filteredMonsters.map((monster) => (
          <div key={monster.key}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
