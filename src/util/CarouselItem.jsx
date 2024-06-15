import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    paritialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    paritialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};

const CarouselItem = ({ items = [], index = "", autoPlaySpeed = "" }) => {
  return (
    <Carousel
      responsive={responsive}
      itemClass="px-3"
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={autoPlaySpeed}
    >
      {items.map((image, i) => (
        <div key={i}>
          <img
            src={`https://admin.indceramic.com/Image/${image}`}
            className="homecoursesstyle CarouselSlideHeight image-zoom"
            alt={`Category ${index}`}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselItem;
