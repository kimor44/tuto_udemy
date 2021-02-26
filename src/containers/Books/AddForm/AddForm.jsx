import React, { Component } from "react";
import Button from "../../../components/Buttons/Button";
import { withFormik } from "formik";
import * as Yup from "yup";

class AddForm extends Component {
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
              name="title"
              value={this.props.values.title}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
            />
            {this.props.touched.title && this.props.errors.title && (
              <span style={{ color: "red" }}>{this.props.errors.title}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="author" className="form-label">
              Book author
            </label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={this.props.values.author}
              onChange={this.props.handleChange}
              onBlur={this.props.handleBlur}
            />
            {this.props.touched.author && this.props.errors.author && (
              <span style={{ color: "red" }}>{this.props.errors.author}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="nbPages" className="form-label">
              Number of pages
            </label>
            <input
              type="number"
              className="form-control"
              id="nbPages"
              name="nbPages"
              value={this.props.values.nbPages}
              onChange={(event) =>
                this.props.setFieldValue('nbPages', parseInt(event.target.value))
              }
              onBlur={this.props.handleBlur}
            />
            {this.props.touched.nbPages && this.props.errors.nbPages && (
              <span style={{ color: "red" }}>{this.props.errors.nbPages}</span>
            )}
          </div>
          <Button result="primary" clic={this.props.handleSubmit}>
            Submit
          </Button>
        </form>
      </>
    );
  }
}

export default withFormik({
  mapPropsToValues: () => ({
    title: "",
    author: "",
    nbPages: "",
  }),
  validationSchema: Yup.object().shape({
    title: Yup.string()
      .min(3, "The title must be more than 3 characters")
      .max(15, "The title must be less than 15 characters")
      .required("Title is mandatory"),
    author: Yup.string()
      .min(3, "The author must be more than 3 characters")
      .required("The author is mandatory"),
    nbPages: Yup.number()
      .lessThan(1000, "Number must be less than 1000")
      .moreThan(50, "Number must be more than 50"),
  }),
  handleSubmit: (values, { props }) => {
    props.validation(values.title, values.author, values.nbPages);
  },
})(AddForm);
