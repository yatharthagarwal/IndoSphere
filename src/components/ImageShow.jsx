import Carousel from 'react-bootstrap/Carousel';

import HeroImage from '../assets/vol.jpg';
import mundukImage from '../assets/munduk.jpg';
import agriImage from '../assets/agri.jpg';

function ImageShow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img id="hero-image" src={HeroImage} />
        <Carousel.Caption>
          <h3>Volcano</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="hero-image" src={mundukImage} />
        <Carousel.Caption>
          <h3>Pura Ulun Danu Bratan</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="hero-image" src={agriImage} />
        <Carousel.Caption>
          <h3>Agriculture</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageShow;