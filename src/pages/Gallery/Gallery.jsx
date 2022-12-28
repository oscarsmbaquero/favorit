import React,{useContext} from 'react';
import { SWContext } from "../../context/context";
import './Gallery.scss'
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

export default function Gallery() {

  const { galeria } = useContext(SWContext);

  return (
    <section className="gallerySection">
    <MDBCarousel data-interval="1000"
    //showControls showIndicators light fade
    >
    {galeria.map(item =>(
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={item.id}
        src={item.image}
        alt='...'
      >
       </MDBCarouselItem>
    ))}
     
      {/* <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar5}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar6}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar7}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar8}
        alt='...'
      >
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src={bar9}
        alt='...'
      >
      </MDBCarouselItem> */}
    
    </MDBCarousel>
    
    </section>
  );
}