import React, { Component } from "react";
import TitleH1 from "./components/Titles/TitleH1";
import Button from "./components/Buttons/Button";
import Books from "./containers/Books/Books";

class App extends Component {
  state = {
    addBook: false
  }

  toggleAddButton = () => {
    this.setState((oldState) => {
      return ({addBook: !oldState.addBook})
    })
  }

  render() {
    return (
      <div className="container">
        <TitleH1>Library of books</TitleH1>
        <Books AddBook={this.state.addBook}/>
        <Button result="success" css="w-100" clic={this.toggleAddButton}>
          {!this.state.addBook ? "Add" : "Close add"}
        </Button>
      </div>
    );
  }
}

export default App;
