import React from "react";
import {Carousel} from 'react-bootstrap/';
import {TictactoeCard} from './Cards';

function Home() {
  return (
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
  );
}

export default Home;