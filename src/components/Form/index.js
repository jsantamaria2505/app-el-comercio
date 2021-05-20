import React, { Component } from 'react';
import {
    MDBValidation,
    MDBInput,
    MDBRow,MDBCol, MDBCard, MDBCardHeader,MDBCardBody,
  } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

export default class index extends Component {
    render() {
            

        return (
            <div style={{padding:'60px'}}>
                <MDBRow>
                <MDBCol md='4'>
                    <MDBCard >
                        
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard>
                        <MDBCardHeader>
                            <h5 className="mt-2">Credit Card</h5>
                        </MDBCardHeader>

                        <MDBCardBody>
                            <MDBValidation className='row g-3' noValidate>
                                <div style={{textAlign:'left'}} className='col-md-12'>
                                    <h6>Nombres y Apellidos</h6>
                                    <MDBInput
                                    name='fname'
                                    id='validationCustom01'
                                    required
                                    validation='Looks good!'
                                    />
                                </div>
                                <div style={{textAlign:'left'}} className='col-md-12'>
                                    <h6>Numero de Tarjeta</h6>
                                    <MDBInput
                                    name='fname'
                                    id='validationCustom01'
                                    required
                                    validation='Looks good!'
                                    />
                                </div>
                                <div style={{textAlign:'left'}} className='col-md-6'>
                                    <h6>F. Expira</h6>
                                    <MDBInput
                                    name='fname'
                                    id='validationCustom01'
                                    required
                                    validation='Looks good!'
                                    />
                                </div>
                                <div style={{textAlign:'left'}} className='col-md-6'>
                                    <h6>CVC</h6>
                                    <MDBInput
                                    name='fname'
                                    id='validationCustom01'
                                    required
                                    validation='Looks good!'
                                    />
                                </div>

                                <Link to={"/Informacion"} className="btn btn-dark btn-bold">Pagar</Link>
                                
                            </MDBValidation>
                            <br></br>
                        </MDBCardBody>
                        
                    </MDBCard>
                </MDBCol>
                <MDBCol md='4'>
                    <MDBCard>
                        
                    </MDBCard>
                </MDBCol>
                
                </MDBRow>
            </div>
            
            
        )
    }
}
