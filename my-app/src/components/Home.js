import React from "react";
import {Image, Card, Container} from 'react-bootstrap/';
export default Home;

function Home() {
  return (
    <Container>
        <Image 
            fluid='true'
            src="http://placehold.it/900x400"
            alt=""
        ></Image>
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book.
                </Card.Text>
                </Card.Body>
        </Card>
    </Container>
  );
}
