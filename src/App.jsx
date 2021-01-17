import React, { Component } from "react";
import TitleH1 from "./components/Titles/TitleH1";
import Button from "./components/Buttons/Button"

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitleH1>Library of books</TitleH1>
        <p>Livres</p>
        <Button result="success" clic={() => console.log('Add')}>Add</Button>
        <Button result="warning" clic={() => console.log('Edit')}>Edit</Button>
        <Button result="danger" clic={() => console.log('Delete')}>Delete</Button>
      </div>
    );
  }
}

export default App;
