import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

const mapDispatchToProps = {
    delete_user
}

class Delete_btn extends Component {


    render() {
        return (
            <Button variant="primary" onClick={() => { this.props.delete_user() }}>Delete</Button>
        );
    }
}
const delete_btn = connect(null, mapDispatchToProps)(Delete_btn);
export default delete_btn;