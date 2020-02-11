import React, { Component } from "react";
import { connect } from "react-redux";
import { get_single } from "../thunks/index";
import { Card, CardTitle, CardText, ButtonGroup } from 'reactstrap';
import  Edit_btn from './Buttons/Edit_btn';
import  Delete_btn from './Buttons/Delete_btn';


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
        this.props.get_single(this.props.match.params.id);
    }
    
    render() {
        return (
            <Card body style={{margin: 10, width: 250, padding: 0, textAlign: "center"}}>
                <div style={{backgroundColor: this.props.obj.color, height: 50, padding:10}}>
                    <CardTitle style={{fontSize: 20, fontWeight: "bold"}}>{this.props.obj.name}</CardTitle>
                </div>
                <CardText style={{padding:10, margin: 0}}>Correo: {this.props.obj.email}<br/>{this.props.obj.rate}/10</CardText>
                
                <ButtonGroup>
                    <Edit_btn id={this.props.match.params.id} history={this.props.history}/>
                    <Delete_btn id={this.props.match.params.id} history={this.props.history}/>
                </ButtonGroup>
            </Card>
        );
    }
}
const details = connect(mapStateToProps, mapDispatchToProps)(Details);
export default details;