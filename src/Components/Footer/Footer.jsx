import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "../../assets/images/logoFavorit.jpeg"
import './Footer.scss';
export default function App() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span  STYLE="font-weight:bold">Síguenos en nuestras redes sociales:</span>
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
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <p><img src={logo} className='logos'  alt={logo}/>
                {/* Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. */}
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Nuestras Cartas</h6>
              <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-utensils">&nbsp;</i>
                Carta
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-utensils">&nbsp;</i>
                Carta Celíacos
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-utensils">&nbsp;</i>
                Carta Vegetariana
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-beer-mug-empty">&nbsp;</i>
                Cervezas
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'><i class="fa-solid fa-wine-glass-empty">&nbsp;</i>
                Vinos
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Enlaces de interes</h6>
              <p>
                <a href='#!' className='text-reset'><i class="fa-sharp fa-solid fa-address-book">&nbsp;</i>
                Reservas  
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'><i class="fa-regular fa-clock">&nbsp;</i>
                Horarios  
                </a>
              </p>
              {/* <p>
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
              </p> */}
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Plaza Juan de Loaisa, Plasencia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                favoritgastrobar@gmail.com
              </p>
              
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 34 618 932 661 <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ 34 691 487 362
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
        &nbsp;by OSMB
        </a>
      </div>
    </MDBFooter>
  );
}