import React,{useContext} from 'react';
import { SWContext } from "../../context/context";
import { MDBCarousel, MDBCarouselItem} from 'mdb-react-ui-kit';

export default function Gallery() {

  const { galeria } = useContext(SWContext);

  return (
    <MDBCarousel 
     activeItem={1} length={3} showControls={true} showIndicators={true}  interval={2500}
    >
    {galeria.map(item =>(
      <MDBCarouselItem
        className='w-100 d-block'
        key={item.id}
        itemId={item.id}
        src={item.image}
        alt='...'
      >
       </MDBCarouselItem>
    ))}
    
    </MDBCarousel>
    
  );
}