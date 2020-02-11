import React, { Component } from "react";
import { connect } from "react-redux";
import { get_multiple } from "../thunks/index";
import { Table, ButtonGroup  } from 'reactstrap';
import  EditBtn from './Buttons/EditBtn';
import  DeleteBtn from './Buttons/DeleteBtn';
import  DetailsBtn from './Buttons/DetailsBtn';
import AddBtn from "./Buttons/AddBtn";

const mapDispatchToProps = {
    get_multiple
}

const mapStateToProps = state => {
    return { List: state.users }
}


class List extends Component {
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
        this.props.get_multiple();
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    createList = () => {
        return this.props.List.map((x, id)=>{
            return <tr style={{backgroundColor: x.color, color: x.color==="Black"?"white":"black"}} key={id}>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.rate}/10</td>
                <td  style={{width:300}}>
                    <ButtonGroup>   
                        <EditBtn id={x.id} history={this.props.history}/>
                        <DeleteBtn id={x.id} history={this.props.history}/>
                        <DetailsBtn id={x.id} history={this.props.history}/>
                    </ButtonGroup>
                </td>
            </tr>
        });
    }

    render() {
        
        return (
            <>  
                <AddBtn history={this.props.history} />
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Rate</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.createList()}
                    </tbody>
                </Table>
            </>
        );
    }
}
const list = connect(mapStateToProps, mapDispatchToProps)(List);
export default list;