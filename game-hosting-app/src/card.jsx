

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ExampleCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          This is a simple gaming website where I host simple games I have built
          using Javascript. To play a game, simply click the game image and press
          enter to start the game.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

