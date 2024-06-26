import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import css from './Qverview.module.css'
import Card from 'react-bootstrap/Card'

function Qverview() {
  return (
    <Card border="dark" className={css.container}>
  <Card.Header className={css.title}>Overview</Card.Header>
  <Card.Body>
      <Form>
          <Card.Title className={css.subtitle}>Overview</Card.Title>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
         <br />
      
         <br />
      <Card.Title className={css.subtitle}>Disabled forms</Card.Title>
      <Form.Group className="mb-3">
        <Form.Label>Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group>
     </Form>
    </Card.Body>
    </Card>
  );
}

export default Qverview;