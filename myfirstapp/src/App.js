
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Card } from 'react-bootstrap';
import './index.css';
function App() {
  return (
    <>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">My React App</Navbar.Brand>
          </Container>
        </Navbar>

        {/* Heading */}
        <h1 className="text-center mt-3">Welcome to My App</h1>

        {/* 3 Cards */}
        <div className="d-flex justify-content-around mt-4 flex-wrap">
          <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>This is card number 1.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>This is card number 2.</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>This is card number 3.</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}
export default App;