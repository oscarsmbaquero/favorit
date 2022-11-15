import React from 'react';
import './Gallery.scss'
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import foto1 from '../../assets/images/bar3.jfif'
import bar4 from '../../assets/images/bar4.jfif'
import bar1 from '../../assets/images/bar1.jfif'
import bar5 from '../../assets/images/bar5.jfif'
import bar6 from '../../assets/images/bar6.jfif'
import bar7 from '../../assets/images/bar7.jfif'
import bar8 from '../../assets/images/bar8.jfif'
import bar9 from '../../assets/images/bar9.jfif'
import bar10 from '../../assets/images/bar10.jfif'
export default function Gallery() {
  return (
    <section className="gallerySection">
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={bar6}
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
        src={bar5}
        alt='...'
      >
        {/* <h5>Four slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar6}
        alt='...'
      >
        {/* <h5>Four slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar7}
        alt='...'
      >
        {/* <h5>Four slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar8}
        alt='...'
      >
        {/* <h5>Four slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar9}
        alt='...'
      >
        {/* <h5>Four slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar10}
        alt='...'
      >
        {/* <h5>Four slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
      </MDBCarouselItem>
    </MDBCarousel>
    
    </section>
  );
}