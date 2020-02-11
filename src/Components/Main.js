import React, { Component } from "react";
import List from './List';

export default class Main extends Component {
    
    render() {
        return (
            <List history={this.props.history}/>
        );
    }
}