import React, { Component } from "react";
import { connect } from "react-redux";
import { get_single } from "../action/index";

const mapDispatchToProps = {
    get_single
}

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Email: "",
            Rate: "",
            Color: ""
        };
    }
    componentDidMount(){
        this.props.get_single(this.props.params.id);
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }
    render() {
        return (
            <>
                <div>
                    <label>Name</label>
                    <input type="text" id="name" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" id="email" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Rate</label>
                    <input type="text" id="rate" onChange={this.handleChange} />
                </div>
                <div>
                    <label>Color</label>
                    <input type="text" id="color" onChange={this.handleChange} />
                </div>
            </>
        );
    }
}
const details = connect(null, mapDispatchToProps)(Details);
export default details;