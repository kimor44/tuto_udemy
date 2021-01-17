import React, { Component } from "react";
import TitleH1 from "./components/Titles/TitleH1";

class App extends Component {
  render() {
    return (
      <div className="container">
        <TitleH1>Library of books</TitleH1>
        <p>Livres</p>
        <button>Ajouter</button>
      </div>
    );
  }
}

export default App;
