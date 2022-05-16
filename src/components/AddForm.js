import React from "react";
import { Form, Button } from "react-bootstrap";

const AddForm = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control>type="text" placeholder="Name *" required</Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control>type="email" placeholder="Email *" required</Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control>
          as="textarea" placeholder="Adress *" rows={3}{" "}
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Control>type="text" placeholder="Phone" </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
