import React, { Component } from "react";
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';


export default class Details_btn extends Component {

    render() {
        return (
            <Link to={"/details/" + this.props.id}>
                <Button color="success">Details</Button>
            </Link>
        );
    }
}