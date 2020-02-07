import React, { Component } from "react";
import { get_single } from '../../thunks/index';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const mapDispatchToProps = {
    get_single
}

class Details_btn extends Component {

    render() {
        return (
            <Button color="success" onClick={() => {  }}>Details</Button>
        );
    }
}
const details_btn = connect(null, mapDispatchToProps)(Details_btn);
export default details_btn;