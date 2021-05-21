import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
    MDBCardBody,
    MDBNavbar,
    MDBContainer,
    MDBCard,
    MDBCardTitle,
    MDBIcon
  } from 'mdb-react-ui-kit';

export default class index extends Component {
    render() {
        return (
            <div  >
                <MDBNavbar light bgColor='dark'>
                    <MDBContainer fluid className="justify-content-center">
                        <h4 className='navbar-text text-light text-center '> Información </h4>
                    </MDBContainer>
                </MDBNavbar>
                <MDBContainer  breakpoint="sm">
                    <MDBCard >
                        <MDBCardBody>
                            <br></br>
                            <div className="rcontainer">
                                <span><i style={{fontSize:"60px"}} className="fas fa-check"></i></span>
                            </div>
                            <br></br>
                            <h6>Bienvenido Nombre</h6>
                            <p>Has adquirido el</p>
                            <h5 className='pink-text'>
                                 PLAN STANDAR
                            </h5>
                            <MDBCardTitle >
                                <span>S/29 al mes</span>
                                
                            </MDBCardTitle>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <Link to={"/"} className="btn btn-dark btn-bold">Ir a ver mi Plan</Link>
                        </MDBCardBody>
                        
                    </MDBCard>
                    
                </MDBContainer>
            </div>
        )
    }
}
