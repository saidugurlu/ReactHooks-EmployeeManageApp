import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";

const AddForm = () => {

  const { dispatch } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const { name, email, address, phone } = newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //addEmployee(name, email, address, phone);

    dispatch({
      type: "add_employee",
      employee: {
        name,
        email,
        address,
        phone,
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          value={name}
          name="name"
          onChange={(e) => onInputChange(e)}
          type="text"
          placeholder="Name *"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={email}
          name="email"
          onChange={(e) => onInputChange(e)}
          type="email"
          placeholder="Email *"
          required
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={address}
          name="address"
          onChange={(e) => onInputChange(e)}
          as="textarea"
          placeholder="Adress *"
          rows={3}
        />
      </Form.Group>

      <Form.Group>
        <Form.Control
          value={phone}
          name="phone"
          onChange={(e) => onInputChange(e)}
          type="text"
          placeholder="Phone"
        />
      </Form.Group>

      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;
