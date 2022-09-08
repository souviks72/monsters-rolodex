import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {this.props.filteredMonsters.map(({ name, email, id }) => (
          <Card id={id} name={name} email={email} />
        ))}
      </div>
    );
  }
}

export default CardList;
