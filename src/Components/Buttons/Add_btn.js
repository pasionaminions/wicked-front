import React, { Component } from "react";
import { Button } from 'reactstrap';

export default class Add_btn extends Component {
    render() {
        return (
            <Button color="success" onClick={() => { this.props.history.push("/edit") }}>Add</Button>
        );
    }
}