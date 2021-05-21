import React, { Component } from 'react';
import {
    MDBValidation,
    MDBInput,
    MDBRow,MDBCol, MDBCard, MDBCardHeader,MDBCardBody,
  } from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

export default class index extends Component {

    state = {
        form:{
            id: 0,
            nombres: '',
            numTarjeta: '',
            fechaExp: '',
            cvc: ''
        }
        
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    handleSubmit(e) {
        e.preventDefault();
    } 


    render() {
            
        const {form} = this.state;

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
                            <MDBValidation onSubmit={this.handleSubmit.bind(this)} className='row g-3' noValidate>
                                <input
                                    type="hidden"
                                    name="id"
                                    onChange={this.handleChange}
                                    value={form.id}
                                    className="form-control"
                                    placeholder="Id"
                                />

                                <div style={{textAlign:'left'}} className='col-md-12'>
                                    <h6>Nombres y Apellidos</h6>
                                    <MDBInput
                                    name='nombres'
                                    onChange={this.handleChange}
                                    value={form.nombres}
                                    required
                                    validation='Looks good!'
                                    />
                                </div>
                                <div style={{textAlign:'left'}} className='col-md-12'>
                                    <h6>Numero de Tarjeta</h6>
                                    <MDBInput
                                    name='numTarjeta'
                                    onChange={this.handleChange}
                                    value={form.numTarjeta}
                                    required
                                    validation='Looks good!'
                                    />
                                </div>
                                <div style={{textAlign:'left'}} className='col-md-6'>
                                    <h6>F. Expira</h6>
                                    <MDBInput
                                    name='fechaExp'
                                    onChange={this.handleChange}
                                    value={form.fechaExp}
                                    required
                                    validation='Looks good!'
                                    />
                                </div>
                                <div style={{textAlign:'left'}} className='col-md-6'>
                                    <h6>CVC</h6>
                                    <MDBInput
                                    name='cvc'
                                    onChange={this.handleChange}
                                    value={form.cvc}
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
