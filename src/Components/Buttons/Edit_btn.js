import React, { Component } from "react";
import { edit_user } from '../../thunks/index';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

const mapDispatchToProps = {
    edit_user
}

class Edit_btn extends Component {

    render() {
        return (
            <Link to={"/edit/" + this.props.id}>
                <Button color="primary">Edit</Button>
            </Link>
        );
    }
}
const edit_btn = connect(null, mapDispatchToProps)(Edit_btn);
export default edit_btn;