import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import bar6 from '../../assets/images/bar6.jfif'
import bar7 from '../../assets/images/bar7.jfif'
import bar8 from '../../assets/images/bar8.jfif'
import bar9 from '../../assets/images/bar9.jfif'
import bar10 from '../../assets/images/bar10.jfif'

export default function App() {
  return (
    <MDBCarousel showControls  showIndicators  dealy={3000}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={bar6}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={bar7}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={bar8}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar10}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src={bar9}
        alt='...'
      />
    </MDBCarousel>
  );
}