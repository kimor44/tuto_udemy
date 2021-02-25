import React, { Component } from "react";
import Button from "../../../components/Buttons/Button";

class EditBook extends Component {
  state = {
    titleEntered: this.props.title,
    authorEntered: this.props.author,
    nbPagesEntered: this.props.pages,
  };

  handleEditBook = () => {
    this.props.confirm(
      this.props.id,
      this.state.titleEntered,
      this.state.authorEntered,
      this.state.nbPagesEntered
    );
  };

  render() {
    return (
      <>
        <td>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.titleEntered}
            onChange={(event) =>
              this.setState({ titleEntered: event.target.value })
            }
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            id="author"
            value={this.state.authorEntered}
            onChange={(event) =>
              this.setState({ authorEntered: event.target.value })
            }
          />
        </td>
        <td>
          <input
            type="number"
            className="form-control"
            id="nbPages"
            value={this.state.nbPagesEntered}
            onChange={(event) =>
              this.setState({ nbPagesEntered: event.target.value })
            }
          />
        </td>
        <td>
          <Button result="primary" clic={this.handleEditBook}>
            CONFIRM
          </Button>
        </td>
      </>
    );
  }
}

export default EditBook;
