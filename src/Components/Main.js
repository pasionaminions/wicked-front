import React, { Component } from "react";
import List from './List';
import {Navbar} from 'reactstrap';

export default class Main extends Component {
    
    render() {
        return (
            <>
                <Navbar style={{ backgroundColor: "#FF9326", color: "white" }} light expand="md">
                <h1>Pasiona</h1>
                </Navbar>
                <List history={this.props.history}/>
            </>
        );
    }
}