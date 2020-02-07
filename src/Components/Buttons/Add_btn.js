import React, { Component } from "react";
import Button from 'react-bootstrap/Button';

const mapDispatchToProps = {
    post_user
}

class Add_btn extends Component {


    render() {
        return (
            <Button variant="primary" onClick={() => { this.props.post_user() }}>Add</Button>
        );
    }
}
const add_btn = connect(null, mapDispatchToProps)(Add_btn);
export default add_btn;