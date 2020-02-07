import React, { Component } from "react";
import { connect } from "react-redux";
import { get_single } from "../action/index";

const mapStateToProps = state => {
    return { obj: state.single }
}

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
    componentDidMount() {
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
                    <input type="text" id="name" value={this.props.obj.Name} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" id="email" value={this.props.obj.Email} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Rate</label>
                    <input type="text" id="rate" value={this.props.obj.Rate} onChange={this.handleChange} />
                </div>
                <div>
                    <label>Color</label>
                    <input type="text" id="color" value={this.props.obj.Color} onChange={this.handleChange} />
                </div>
            </>
        );
    }
}
const details = connect(mapStateToProps, mapDispatchToProps)(Details);
export default details;