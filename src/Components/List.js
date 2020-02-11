import React, { Component } from "react";
import { connect } from "react-redux";
import { get_multiple } from "../thunks/index";
import { Table, ButtonGroup  } from 'reactstrap';
import  Edit_btn from './Buttons/Edit_btn'
import  Delete_btn from './Buttons/Delete_btn'
import  Details_btn from './Buttons/Details_btn'


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
                        <Edit_btn id={x.id} history={this.props.history}/>
                        <Delete_btn id={x.id} history={this.props.history}/>
                        <Details_btn id={x.id}/>
                    </ButtonGroup>
                </td>
            </tr>
        });
    }

    render() {
        
        return (
            <>  
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