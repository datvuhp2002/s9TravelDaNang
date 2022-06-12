import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default class Search extends Component {
  render() {
    return (
        
        <Form className="d-flex w-50 justify-content-center">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
        <Button variant="outline-success">Search</Button>
        </Form>
    )
  }
}
