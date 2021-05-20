import React, { Component } from 'react';
import {MDBNavbar, MDBContainer} from 'mdb-react-ui-kit';

export default class index extends Component {
    render() {
        return (
            <MDBNavbar light bgColor='dark'>
                <MDBContainer fluid className="justify-content-center">
                    <h4 className='navbar-text text-light text-center '> App Electronic </h4>
                </MDBContainer>
            </MDBNavbar>
        )
    }
}
