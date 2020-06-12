import React, { Component } from 'react';
import { Button, Header, Image, Modal, Container, Grid, Input, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";
import {connect} from 'react-redux';
import {  AdminMemberDeleteCheck} from '../redux/Admin_action';

class MemberList extends React.Component{
    constructor(props) {
        super(props);
        this.onClickPeopleDelete = this.onClickPeopleDelete.bind(this);
    
    
      }
    
      onClickPeopleDelete() {
        console.log(this.props.objj._id)
        this.props.AdminMemberDeleteCheck(this.props.objj._id)
        // axios.delete('http://localhost:4000/people/kisiler/'+this.props.objj._id)
    
        // .then(res => {console.log(res.data)
        //   this.props.history.push('/admin/uyelistele');  
        //   } ).catch((error) => {
        //     console.log(error)
        //   })
    
          
      }
     
     
    
      componentWillReceiveProps(nextState){
        console.log(nextState)
      if(nextState.Admin.memberDelete){
        
        window.location.href='/admin/uyelistele'
      }
    }


    render() {
        return (
            <tr>
                <td>
                    {this.props.objj.username}
                </td>
                <td>
                    {this.props.objj.mailaddress}
                </td>
                <td>
                    {this.props.objj.phonenumber}
                </td>
                <td>
                    <Link to={"/admin/uyeduzenle/"+ this.props.objj._id} className="btn btn-primary"><Icon name="edit"></Icon></Link>
                </td>
                <td>

                    <button className="btn btn-danger" onClick={this.onClickPeopleDelete} > <Icon name="trash alternate"></Icon></button>
                </td>
                <td>

                    <button className="btn btn-warning" onClick={this.onClickPeople} > <Icon name="user x"></Icon></button>
                </td>



            </tr>
        )
    }
}
const mapStateToProps = ({Admin}) => {
	return {
        Admin
	}
};

const mapDispatchToProps = {
    AdminMemberDeleteCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberList));