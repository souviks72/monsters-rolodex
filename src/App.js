import React, { Component } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          searchMonsters={this.searchMonsters}
          placeholder={"search monsters"}
        />
        <CardList filteredMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
