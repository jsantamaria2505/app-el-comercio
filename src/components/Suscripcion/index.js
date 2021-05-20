import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBIcon, MDBNavbar, MDBContainer, MDBRow, MDBCol, MDBCardImage, MDBCardHeader, MDBCardFooter } from 'mdb-react-ui-kit';
//Importando Componente Switch
import Switch from '../Switch';

import {Link} from 'react-router-dom';


export default class index extends Component {
    render() {
        return (
            <div>
                <MDBNavbar light bgColor='dark'>
                    <MDBContainer fluid className="justify-content-center">
                        <h4 className='navbar-text text-light text-center '> App Electronic </h4>
                    </MDBContainer>
                </MDBNavbar>

                <MDBRow>
                    <MDBCol md='4'>
                        <MDBCard >
                            
                        </MDBCard>
                    </MDBCol>


                    <MDBCol md='4'>
                        <MDBCard >
                            <Switch></Switch>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol md='4'>
                        <MDBCard >
                            
                        </MDBCard>
                    </MDBCol>
                </MDBRow>

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

                                <Link to={`/datos`} className="btn btn-primary btn-bold">Suscribirme</Link>

                                
                                
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                </MDBRow>
            </div>
        )
    }
}
