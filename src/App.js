import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle,MDBBtn, MDBIcon, MDBRow, MDBCol, MDBCardImage, MDBNavbar, MDBContainer, MDBFooter, MDBCardHeader, MDBCardFooter } from 'mdb-react-ui-kit';
import './App.css';

function App() {
  return (
    <div className="App">
      <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid className="justify-content-center">
          <h4 className='navbar-text text-light text-center '> App Electronic </h4>
        </MDBContainer>
      </MDBNavbar>

      

      <div style={{backgroundColor: '#f2f2f8'}} className="p-4 light justify-content-center ">

        

        <MDBRow>
            <MDBCol md='4'>
              <MDBCard >
                
              </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
              <MDBCard >
                <MDBCardHeader>
                  <MDBCardImage
                      
                      overlay='white-slight'
                      className='card-img-top'
                      src='https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg'
                      alt='food'
                    />
                </MDBCardHeader>
                  


                <MDBCardBody>
                  <h5 className='pink-text'>
                    <MDBIcon icon='credit-card' /> S/29 / AL MES
                  </h5>

                  <MDBCardTitle >
                    <span>Lorem ipsum dolor sit amet</span>
                  </MDBCardTitle>


                  <MDBCardFooter>
                    
                      <ul style={{listStyleType:'circle'}}>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>
                        <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</li>
                      </ul>
                    
                  </MDBCardFooter>

                  <hr></hr>

                  <MDBBtn color='unique' className="btn-primary">Suscribirme</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>

        </MDBRow>
      </div>
      
      <MDBFooter  className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()}{' '}
          <a className='text-dark' href='/'>
            All Rights Reserved
          </a>
        </div>
      </MDBFooter>

    </div>
  );
}

export default App;
