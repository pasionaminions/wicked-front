import React, { Component } from "react";
import { connect } from "react-redux";
import { get_multiple } from "../action/index";
import { Table } from 'reactstrap';

const mapDispatchToProps = {
    get_multiple
}

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            List: [],
            Name: "",
            Email: "",
            Rate: "",
            Color: ""
        };
    }

    componentDidMount(){
        this.state.List = this.props.get_multiple();
    }

    handleChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    createList = () => {
        return this.state.List.map((x)=>{
            <tr style={{bgcolor: x.color}}>
                <td>{x.name}</td>
                <td>{x.email}</td>
                <td>{x.rate}/10</td>
                <td></td>
                <td></td>
                <td></td>
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
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {createList}
                    </tbody>
                </Table>
            </>
        );
    }
}
const details = connect(null, mapDispatchToProps)(Details);
export default List;