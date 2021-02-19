import React, { Component } from "react";
import Button from "../../../components/Buttons/Button";

class AddForm extends Component {
  state = {
    titleEntered: "",
    authorEntered: "",
    nbPagesEntered: "",
  };
  handleValidationForm = (event) => {
    event.preventDefault();
    this.props.validation(
      this.state.titleEntered,
      this.state.authorEntered,
      this.state.nbPagesEntered
    );
  };
  render() {
    return (
      <>
        <h2
          className="text-center text-primary"
          style={{ fontFamily: "Sigmar One" }}
        >
          Displaying Add Book
        </h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Book title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={this.state.titleEntered}
              onChange={(event) =>
                this.setState({ titleEntered: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Book author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              value={this.state.authorEntered}
              onChange={(event) =>
                this.setState({ authorEntered: event.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nbPages" className="form-label">
              Number of pages
            </label>
            <input
              type="number"
              className="form-control"
              id="nbPages"
              value={this.state.nbPagesEntered}
              onChange={(event) =>
                this.setState({ nbPagesEntered: event.target.value })
              }
            />
          </div>
          <Button result="primary" clic={this.handleValidationForm}>
            Submit
          </Button>
        </form>
      </>
    );
  }
}

export default AddForm;
