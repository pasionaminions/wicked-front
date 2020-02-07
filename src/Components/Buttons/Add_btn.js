import React, { Component } from "react";
import { post_user } from '../../thunks/index';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const mapDispatchToProps = {
    post_user
}

class Add_btn extends Component {


    render() {
        return (
            <Button variant="primary" onClick={() => {  }}>Add</Button>
        );
    }
}
const add_btn = connect(null, mapDispatchToProps)(Add_btn);
export default add_btn;