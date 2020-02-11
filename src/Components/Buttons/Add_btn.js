import React, { Component } from "react";
import { Button } from 'reactstrap';

export default class Add_btn extends Component {


    render() {
        return (
            <Link to={"/edit"}>
                <Button color="success">Add</Button>
            </Link>
        );
    }
}