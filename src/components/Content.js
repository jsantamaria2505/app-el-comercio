import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Content extends Component {
    static propTypes = {
        body: PropTypes.object.isRequired
    }

    render() {
        const {body} = this.props;
        return (
            <div style={{backgroundColor: '#f2f2f8'}} className=" light justify-content-center ">
                {body}
            </div>
        )
    }
}
