import Carousel from 'react-bootstrap/Carousel';
function ImageShow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img id="hero-image" src='src/assets/vol.jpg' />
        <Carousel.Caption>
          <h3>Volcano</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="hero-image" src='src/assets/munduk.jpg' />
        <Carousel.Caption>
          <h3>Pura Ulun Danu Bratan</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img id="hero-image" src='src/assets/agri.jpg' />
        <Carousel.Caption>
          <h3>Agriculture</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageShow;