import React from "react";
import {
  MDBCarouselElement,
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselItem,
  MDBCarouselInner,
} from "mdb-react-ui-kit";
import Data1 from "../../data/Data1";
const Carousel = () => {
  return (
    <div>
      <MDBCarousel showControls showIndicators>
        <MDBCarouselInner>
          {Data1.map((item, index) => (
            <MDBCarouselItem itemId={index}>
              <MDBCarouselElement
                src={item.image}
                alt={item.title}
                style={{ height: "800px", zIndex: "1" }}
              />
              <MDBCarouselCaption>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </MDBCarouselCaption>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </div>
  );
};

export default Carousel;
