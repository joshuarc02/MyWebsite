import React from "react";
import {Carousel, Container, Row, Col, Card, Image} from 'react-bootstrap/';
import {TictactoeCard} from './Cards';

function Home() {
  return (
    <Container>
      <h1 className="text-center">Hey, I'm Josh!</h1>
      <Row>
        <Col>
          <Card className="border-primary">
            <Card.Header>About me</Card.Header>
            <Card.Body>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Image fluid rounded src={require("./images/me_and_dog.jpg")}/>
        </Col>
        <Col>
          <Card className="border-primary">
            <Card.Header>Info</Card.Header>
            <Card.Body>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="border-secondary">
        <Card.Header className="secondary">Projects</Card.Header>
        <Card.Body>
          <Carousel variant="dark">
            <Carousel.Item>
              <TictactoeCard />
            </Carousel.Item>
            <Carousel.Item>
              <TictactoeCard />
            </Carousel.Item>
            <Carousel.Item>
              <TictactoeCard />
            </Carousel.Item>
          </Carousel>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Home;