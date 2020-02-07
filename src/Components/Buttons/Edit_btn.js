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
const edit_btn = connect(null, mapDispatchToProps)(Edit_btn);
export default edit_btn;