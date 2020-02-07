import React, { Component } from "react";
import { connect } from "react-redux";
import { Form } from 'reactstrap';

const mapStateToProps = state => {

}

const mapDispatchToProps = {

}

class Form_edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            rate: 0,
            color: ""
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <Form onChange={this.handleChange}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input type="text" name="name" id="name" value=""/>
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" value="" />
                </FormGroup>
                <FormGroup>
                    <Label for="rate">Rate:</Label>
                    <Input type="num" name="rate" id="rate" value="" />
                </FormGroup>
                <FormGroup>
                    <Label for="color">Color:</Label>
                    <Input type="text" name="color" id="color" value="" />
                </FormGroup>
            </Form>
        );
    }
}

const Edit = connect(mapStateToProps, mapDispatchToProps)(Form_edit);

export default Edit;
