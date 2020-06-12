import React, { Component } from 'react';
import { Button, Header, Image, Modal, Container, Grid, Input, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";
import {notification} from "antd"
import MemberList from './MemberList';
import {connect} from 'react-redux';
import {  AdminMemberListCheck} from '../redux/Admin_action';


class Member extends React.Component {
    constructor(props){
        super(props);
        this.state={people:[]};
    }

    componentDidMount(){
        this.props.AdminMemberListCheck()



        // axios.get('http://localhost:4000/people/kisiler')
        // .then(response => {
        //     this.setState({people:response.data });
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     notification.open({
        //         message: 'Başarısız',
        //         description: "Üyeler Yüklenemedi",

        //       });
        //   })
      }

      componentWillReceiveProps(nextState){
          if(Object.keys(nextState.Admin.AdminMemberList).length!==0){
            this.setState({people: nextState.Admin.AdminMemberList.data})

          }
          else if(nextState.Admin.MemberError){
            notification.open({
                         message: 'Başarısız',
                        description: "Üyeler Yüklenemedi",
        
                      });

          }


      }



    tabMember(){
        return this.state.people.map(function(objj, i){
            if (objj.role !== "admin") {
                return <MemberList objj={objj} key={i} />;
            }
        });
      }


    render(){
        
      if (localStorage.getItem('admin') && localStorage.getItem('admin') !== "undefined" ){
            return(
                <div>
                <Container>
                <Input style={{float:"right"}} icon='search' placeholder="Üye Adı Arayınız"  />
                    <br/> <br/>
                <table  className="table table-striped" style={{marginTop:20}}>
              <thead>
                  <tr>
                      <th>Kullanıcı Adı</th>
                      <th>Mail Adresi</th>
                      <th>Telefon Numarası</th>
                      <th>Düzenle</th>
                      <th>Sil</th>
                      <th>Engelle</th>
                    
                  </tr>
              </thead>
              <tbody>
              {this.tabMember() } 
            </tbody>
    
    
          </table>   
    
                </Container>
               
    
            </div>
            )
            }
            else{
              return(
                <div>
                    {this.props.history.push('/')}
                </div>
            )
            }
       
       
    }

}
const mapStateToProps = ({Admin}) => {
	return {
        Admin
	}
};

const mapDispatchToProps = {
    AdminMemberListCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Member));