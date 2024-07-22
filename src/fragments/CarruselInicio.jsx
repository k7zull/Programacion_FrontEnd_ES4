import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from "reactstrap"
function CarruselInicio() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <Carousel.Img text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarruselInicio;
