import React, { Component } from "react";
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


export default class Details_btn extends Component {

    render() {
        return (
                <Button color="success" onClick={() => { this.props.history.push("/details/" + this.props.id) }}>Details</Button>
        );
    }
}