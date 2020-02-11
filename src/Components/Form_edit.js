import React, { Component } from "react";
import { connect } from "react-redux";
import { isEmpty } from 'lodash';
import { get_single, post_user, edit_user } from "../thunks";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const mapStateToProps = state => {
    return { single: state.single }
}

const mapDispatchToProps = {
    get_single, post_user, edit_user
}

class Form_edit extends Component {
    constructor(props) {
        super(props);
        this.new = props.match.params.id === undefined;
        
        this.state = {
            name: "",
            email: "",
            rate: 0,
            color: ""
        };
    }

    componentDidMount() {
        if (this.new) return;

        this.props.get_single(this.props.match.params.id)
        .then(() => this.setState(() => {
            return {name: this.props.single.name,
                email: this.props.single.email,
                rate: this.props.single.rate,
                color: this.props.single.color}
        }));
    }

    save = () => {
        let obj = this.state;
        obj.rate = parseInt(obj.rate);
        let prom;
        if (this.new) {
            prom = this.props.post_user(obj);
        } else {
            obj.id = parseInt(this.props.match.params.id);
            prom = this.props.edit_user(obj.id, obj);
        }
        prom.then(() => this.props.history.push("/"));
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="name">Name:</Label>
                    <Input type="text" name="name" id="name" value={this.state.name} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="rate">Rate:</Label>
                    <Input type="num" name="rate" id="rate" value={this.state.rate} onChange={this.handleChange}/>
                </FormGroup>
                <FormGroup>
                    <Label for="color">Color:</Label>
                    <Input type="text" name="color" id="color" value={this.state.color} onChange={this.handleChange}/>
                </FormGroup>
                <Button onClick={this.save}>SAVE ELEMENT</Button>
            </Form>
        );
    }
}

const Edit = connect(mapStateToProps, mapDispatchToProps)(Form_edit);

export default Edit;
