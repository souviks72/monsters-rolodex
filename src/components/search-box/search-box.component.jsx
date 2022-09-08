import { Component } from "react";

class SearchBox extends Component {
  //   filterMonsters(e) {
  //     this.props.searchMonsters(e);
  //   }

  render() {
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder={this.props.placeholder}
          onChange={this.props.searchMonsters}
        />
      </div>
    );
  }
}

export default SearchBox;
