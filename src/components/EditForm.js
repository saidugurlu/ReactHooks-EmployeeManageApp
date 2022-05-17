import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = () => {
  const { updatedEmployee } = useContext(EmployeeContext);
 

  return (
    <Form>
      <Form.Group>
        <Form.Control
          
          name="name"
       
          type="text"
          placeholder="Name *"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
         
          name="email"
         
          type="email"
          placeholder="Email *"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
         
          name="address"
          
          as="textarea"
          placeholder="Adress *"
          rows={3}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
        
          name="phone"
        
          type="text"
          placeholder="Phone"
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Edit Employee
      </Button>
    </Form>
  );
};

export default EditForm;
