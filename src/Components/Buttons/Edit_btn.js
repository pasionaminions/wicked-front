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
            <Button color="primary" onClick={() => { this.props.history.push("/edit/" + this.props.id) }}>Edit</Button>
        );
    }
}
const edit_btn = connect(null, mapDispatchToProps)(Edit_btn);
export default edit_btn;