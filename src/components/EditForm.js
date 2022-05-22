import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const EditForm = ({ theEmployee }) => {

  const { dispatch } = useContext(EmployeeContext);
  
  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = {
    id,
    email,
    address,
    phone,
    name,
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   // updateEmployee(id, updatedEmployee)
   dispatch ({type: "update_employee", id, updatedEmployee })
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          name="name"
          value={name}
          type="text"
          placeholder="Name *"
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email *"
          value={email}
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="address"
          as="textarea"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          placeholder="Adress *"
          rows={3}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
