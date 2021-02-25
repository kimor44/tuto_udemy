import React, { Component } from "react";
import Book from "./Book/Book";
import AddForm from "./AddForm/AddForm";
import EditBook from "./EditBook/EditBook";

class Books extends Component {
  state = {
    books: [
      {
        id: 1,
        title: "L'algorithmique selon H2PROD",
        author: "Matthieu Gaston",
        pages: 200,
      },
      {
        id: 4,
        title: "La France du 19ème",
        author: "Albert Patrick",
        pages: 500,
      },
      {
        id: 9,
        title: "Le monde des animaux",
        author: "Marc Merlin",
        pages: 250,
      },
      {
        id: 12,
        title: "Le virus d'Asie",
        author: "Thya Milo",
        pages: 120,
      },
      {
        id: 17,
        title: "Dans les bois éternels",
        author: "Fred Vargas",
        pages: 563,
      },
    ],
    lastIdBook: 17,
    idBookToEdit: 0,
  };

  editBookHandler = (id, title, author, nbPages) => {
    const numCaseBook = this.state.books.findIndex((element) => {
      return element.id === id;
    });

    const newTab = [...this.state.books];

    newTab[numCaseBook] = {
      id,
      title,
      author,
      pages: nbPages,
    };

    this.setState({ books: newTab, idBookToEdit: 0 });
  };

  deleteBookHandler = (id) => {
    const numCaseBook = this.state.books.findIndex((element) => {
      return element.id === id;
    });

    const newTab = [...this.state.books];

    newTab.splice(numCaseBook, 1);

    this.setState({ books: newTab });
  };

  handleAddBook = (title, author, nbPages) => {
    const newBookList = [...this.state.books];

    const newBook = {
      id: this.state.lastIdBook + 1,
      title: title,
      author: author,
      pages: nbPages,
    };

    newBookList.push(newBook);

    this.setState((oldState) => {
      return { books: newBookList, lastIdBook: oldState.lastIdBook + 1 };
    });
    this.props.closeAddBook();
  };

  render() {
    return (
      <>
        <table className="table text-center">
          <thead>
            <tr className="table-dark">
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">number of pages</th>
              <th scope="col" colSpan="2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.books.map((book) => {
              if (book.id !== this.state.idBookToEdit) {
                return (
                  <tr key={book.id}>
                    <Book
                      title={book.title}
                      author={book.author}
                      pages={book.pages}
                      deleteBook={() => this.deleteBookHandler(book.id)}
                      editBook={() => this.setState({ idBookToEdit: book.id })}
                    />
                  </tr>
                );
              } else {
                return (
                  <tr key={book.id}>
                    <EditBook
                      id={book.id}
                      title={book.title}
                      author={book.author}
                      pages={book.pages}
                      confirm={this.editBookHandler}
                    />
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
        {this.props.AddBook && <AddForm validation={this.handleAddBook} />}
      </>
    );
  }
}

export default Books;
