import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

const mapDispatchToProps = {
    put_user
}

class Edit_btn extends Component {


    render() {
        return (
            <Button variant="primary" onClick={() => { this.props.put_user() }}>Edit</Button>
        );
    }
}
const add_btn = connect(null, mapDispatchToProps)(Add_btn);
export default add_btn;