import React from 'react'
import "../css/AddEvent.css"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function AddEvent() {
  return (
    <div>
       <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="email" placeholder="Enter name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Type of Event</Form.Label>
    <Form.Control type="email" placeholder="Enter occasion" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Date</Form.Label>
    <Form.Control type="date" placeholder="Enter date" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Time</Form.Label>
    <Form.Control type="time" placeholder="Enter time" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>No of guests</Form.Label>
    <Form.Control type="text" placeholder="Enter no of estimated guests" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Contact details</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile no" />
  </Form.Group>

 
  <Button className="eventbtn" variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  )
}

export default AddEvent