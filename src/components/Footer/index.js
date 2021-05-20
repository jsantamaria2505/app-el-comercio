import React, { Component } from 'react';
import {MDBFooter} from 'mdb-react-ui-kit';

export default class index extends Component {
    render() {
        return (
            <MDBFooter  className='text-center text-lg-left'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()}{' '}
                <a className='text-dark' href='/'>
                    All Rights Reserved
                </a>
                </div>
            </MDBFooter>
        )
    }
}
