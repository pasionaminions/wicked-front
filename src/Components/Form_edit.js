import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import { Form } from 'reactstrap';

const mapStateToProps = state => {
    return { single: state.single }
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


    static getDerivedStateFromProps(props, state) {
        if (!isEmpty(props.single) && !state.state) {
            return {
                id: props.single.id,
                name: props.single.name,
                email: props.single.email,
                rate: props.single.rate,
                color: props.single.color,
                state: true
            }
        }
        else {
            return state;
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <Form onChange={this.handleChange}>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input type="text" name="name" id="name" value={this.state.name} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" value={this.state.email} />
                </FormGroup>
                <FormGroup>
                    <Label for="rate">Rate:</Label>
                    <Input type="num" name="rate" id="rate" value={this.state.rate} />
                </FormGroup>
                <FormGroup>
                    <Label for="color">Color:</Label>
                    <Input type="text" name="color" id="color" value={this.state.color} />
                </FormGroup>
            </Form>
        );
    }
}

const Edit = connect(mapStateToProps)(Form_edit);

export default Edit;
