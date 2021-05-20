import React, { Component } from 'react';
import {MDBNavbar, MDBContainer} from 'mdb-react-ui-kit';
import Form from '../Form/index'

export default class index extends Component {
    render() {
        return (
            <div>
                <MDBNavbar light bgColor='dark'>
                    <MDBContainer fluid className="justify-content-center">
                        <h4 className='navbar-text text-light text-center '> Datos </h4>
                    </MDBContainer>
                </MDBNavbar>
                <Form>

                </Form>
            </div>
        )
    }
}
