import React from "react";
import Button from "../../../components/Buttons/Button";

const Book = (props) => (
  <>
    <td>{props.title}</td>
    <td>{props.author}</td>
    <td>{props.pages}</td>
    <td>
      <Button result="warning" clic={props.editBook}>
        EDIT
      </Button>
    </td>
    <td>
      <Button result="danger" clic={props.deleteBook}>
        DELETE
      </Button>
    </td>
  </>
);

export default Book;
