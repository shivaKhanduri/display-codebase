import React from "react";
import { Carousel } from "react-bootstrap";
import Box from "./Box"; // Ensure this path is correct
import { BoxData } from "../util/HomeScreenData";

const BoxCarousel: React.FC<{ boxes: BoxData[] }> = ({ boxes }) => {
  const slides = [];
  for (let i = 0; i < boxes.length; i += 3) {
    // Always attempt to group in threes
    slides.push(
      <Carousel.Item key={i} className='carousel-slide-item'>
        <div className='d-flex justify-content-around'>
          {boxes.slice(i, i + 3).map((box, idx) => (
            <div key={idx} className='carousel-box' style={{ flex: 1 }}>
              <Box {...box} />
            </div>
          ))}
        </div>
      </Carousel.Item>
    );
  }

  return (
    <div>
      <h2 className='heading-color ubBold'>Available Subjects </h2>
      <hr className='text-white' />
      <Carousel
        interval={1000} // Interval for transitions
        indicators={false}
        nextIcon={null}
        prevIcon={null}
        fade={true} // Use fade transition for smoother visual effect
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default BoxCarousel;
