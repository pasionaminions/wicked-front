import React, { Component } from "react";
import { delete_user, get_multiple } from '../../thunks/index';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

const mapDispatchToProps = {
    delete_user,
    get_multiple
}

class DeleteBtn extends Component {

    render() {
        return (
            <Button color="danger" onClick={() => { this.props.delete_user(this.props.id).then(() => this.props.get_multiple()).then(() => this.props.history.push("/")) }}>Delete</Button>
        );
    }
}
const deleteBtn = connect(null, mapDispatchToProps)(DeleteBtn);
export default deleteBtn;