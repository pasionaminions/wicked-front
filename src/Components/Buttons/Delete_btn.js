import React, { Component } from "react";
import { delete_user } from '../../thunks/index';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const mapDispatchToProps = {
    delete_user
}

class Delete_btn extends Component {


    render() {
        return (
            <Button color="danger" onClick={() => {  }}>Delete</Button>
        );
    }
}
const delete_btn = connect(null, mapDispatchToProps)(Delete_btn);
export default delete_btn;