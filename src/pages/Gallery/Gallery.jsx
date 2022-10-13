import React from 'react';
import './Gallery.scss'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import foto1 from '../../assets/images/bar3.jfif'
import bar4 from '../../assets/images/bar4.jfif'
import bar1 from '../../assets/images/bar1.jfif'
export default function Gallery() {
  return (
    <section className="gallerySection">
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={foto1}
        alt='...'
      >
        {/* <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={bar4}
        alt='...'
      >
        {/* <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar1}
        alt='...'
      >
        {/* <h5>Four slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
    </MDBCarousel>
    
    </section>
  );
}