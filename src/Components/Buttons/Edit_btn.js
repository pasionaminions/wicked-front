import React, { Component } from "react";
import { edit_user } from '../../thunks/index';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const mapDispatchToProps = {
    edit_user
}

class Edit_btn extends Component {

    render() {
        return (
            <Button variant="primary" onClick={() => {  }}>Edit</Button>
        );
    }
}
const edit_btn = connect(null, mapDispatchToProps)(Edit_btn);
export default edit_btn;