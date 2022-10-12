import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Visitanos en nuestras redes sociales:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                𝔊𝔞𝔰𝔱𝔯𝔬 𝔅𝔞𝔯 𝔉𝔞𝔳𝔬𝔯𝔦𝔱
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>ℭ𝔬𝔫𝔰𝔲𝔩𝔱𝔞 𝔫𝔲𝔢𝔰𝔱𝔯𝔞𝔰 𝔠𝔞𝔯𝔱𝔞𝔰</h6>
              <p>
                <a href='#!' className='text-reset'>
                𝔊𝔞𝔰𝔱𝔯𝔬
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                ℭ𝔢𝔯𝔳𝔢𝔷𝔞𝔰
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                𝔙𝔦𝔫𝔬𝔰
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>𝔈𝔫𝔩𝔞𝔠𝔢𝔰 𝔡𝔢 𝔦𝔫𝔱𝔢𝔯𝔢𝔰</h6>
              <p>
                <a href='#!' className='text-reset'>
                ℭ𝔬𝔫𝔱𝔞𝔠𝔱𝔬  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Plaza de Loaisa, Plasencia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                gastrofavorit@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 34 618 932 661
              </p>
              {/* <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        &nbsp;𝔊𝔞𝔰𝔱𝔯𝔬 𝔅𝔞𝔯 𝔉𝔞𝔳𝔬𝔯𝔦𝔱
        </a>
      </div>
    </MDBFooter>
  );
}