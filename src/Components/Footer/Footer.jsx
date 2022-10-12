import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-light text-center text-dark fixed-bottom '>
      <MDBContainer className='p-0 pb-0'>
        <section className='mb-0'>
          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="dark" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-dark' href='https://mdbootstrap.com/'>
          &nbsp;𝔊𝔞𝔰𝔱𝔯𝔬 𝔅𝔞𝔯  𝔉𝔞𝔳𝔬𝔯𝔦𝔱
        </a>
      </div>
      
    </MDBFooter>
  );
}