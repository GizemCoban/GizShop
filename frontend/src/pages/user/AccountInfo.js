import React, { Component } from "react";

import { Grid, Image, Container, Card, Icon, Segment, Input, Button, Message } from 'semantic-ui-react';
import { notification } from 'antd';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import AccountMenu from "./AccountMenu";

import axios from "axios";

import { connect } from 'react-redux';
import { AccountinfoListCheck, UpdateAccountinfoCheck, UpdatePasswordfoCheck } from './Accountinfo_action';

class AccountInfo extends React.Component {
    constructor(props) {

        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeMailaddress = this.onChangeMailaddress.bind(this);
        this.onChangePhonenumber = this.onChangePhonenumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            mailaddress: '',
            phonenumber: '',
            password: '',
            new_password: '',
            new_password_again: ''
        }

    }



    componentDidMount() {
        this.props.AccountinfoListCheck(this.props.match.params.id)
        //console.log("Selam", this.props.match.params.id)//adresin idsi


    }


    componentWillReceiveProps(nextState) {
        if (Object.keys(nextState.Accountinfo.UpdateAccountinfoList).length !== 0) {
            let data = nextState.Accountinfo.UpdateAccountinfoList.data
            console.log(data)

            this.setState({
                username: data.username,
                mailaddress: data.mailaddress,
                phonenumber: data.phonenumber,


            })



        }
        else if (Object.keys(nextState.Accountinfo.UpdateAccountinfo).length !== 0){
            console.log("Gğncellendi")
            notification.open({
                            message: 'Güncelleme Başarılı',
        
                            placement: 'topRight'
                       });

                       
                       

        }
        else if (Object.keys(nextState.Accountinfo.UpdatePassword).length !== 0){
            
                        this.setState({
                            password: "",
                            new_password:"",
                            new_password_again:""
                          }, () => {
                            notification.open({
                              message: 'Güncellendi',
                              description: "",
                              placement: 'topRight'
                            });
                          })
            
            
        }


        


    }


    // componentDidMount() {
    //     console.log("Kullanıcı id",this.props.match.params.id)

    //     axios.get('http://localhost:4000/people/kisiler/' + this.props.match.params.id)
    //         .then(response => {
    //             this.setState({
    //                 username: response.data.username,
    //                 mailaddress: response.data.mailaddress,
    //                 phonenumber: response.data.phonenumber,
    //                 password:response.data.new_password_again



    //             })

    //         })
    //         .catch(function (error) {
    //             console.log(error);


    //         })
    // }


    onChangeUsername(e) {
        this.setState({
            username: e.target.value

        });
    }

    onChangeMailaddress(e) {
        this.setState({
            mailaddress: e.target.value
        });

    }

    onChangePhonenumber(e) {
        this.setState({
            phonenumber: e.target.value
        });

    }


    onSubmit(e) {

        //e.preventDefault();
        const objAccountinfo = {

            username: this.state.username,
            mailaddress: this.state.mailaddress,
            phonenumber: this.state.phonenumber


        };
        console.log(objAccountinfo);

        this.props.UpdateAccountinfoCheck(this.props.match.params.id,objAccountinfo)

     
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })    //Inputlardaki değerleri alma
        console.log(this.state.new_password)
        console.log(this.state.new_password_again)



    }

    onUpdatePassword=(e)=>{
        if(this.state.new_password===this.state.new_password_again){
            let updatePassword = { password: this.state.password, new_password:this.state.new_password }
            this.props.UpdatePasswordfoCheck(this.props.match.params.id,updatePassword)

        }



        //e.preventDefault();
        // if(this.state.new_password===this.state.new_password_again){
        //     let updatePassword = { password: this.state.password, new_password:this.state.new_password }
        //     axios.put('http://localhost:4000/people/newpassword/' + this.props.match.params.id,updatePassword).then(res=>{
        //         this.setState({
        //             password: "",
        //             new_password:"",
        //             new_password_again:""
        //           }, () => {
        //             notification.open({
        //               message: 'Güncellendi',
        //               description: "",
        //               placement: 'topRight'
        //             });
        //           })
    
        //     }).catch(err=>{
                
        //         console.log(err);
                
        //     this.setState({
        //         password: "",
        //         new_password:"",
        //         new_password_again:""
        //       }, () => {
        //         notification.open({
        //           message: 'Şifre Yanlış',
        //           description: err.message,
        //           placement: 'topRight'
        //         });
        //       })
    
        //     });

        // }
        // else{
            

        // }
       

    }
    


    render() {
        if (localStorage.getItem('username')) {
            return (

                <div>

                    <Container className="containerContent">

                        <Grid celled style={{ height: "330px", width: "%80" }}>

                            <Grid.Column width={3}>
                                <AccountMenu />
                            </Grid.Column>


                            <Grid.Column width={7}>
                                <h4 style={{ float: "left" }}><br />Hesap Bilgilerim</h4>
                                <br />
                                <br />
                                <br />

                                <h5 style={{ float: "left", color: "#fbbd08" }}>Kullanıcı Bilgilerim</h5>
                                <br />
                                <br />

                                <p style={{ float: "left" }}>Adınız Soyadınız</p>

                                <Input focus name="username" id="username" size="mini" style={{ width: '55%', float: "right" }} value={this.state.username} onChange={this.onChangeUsername} />
                                <br />
                                <br />

                                <p style={{ float: "left" }}>Email Adresi</p>

                                <Input focus name="mailaddress" id="mailaddress" size="mini" style={{ width: '55%', float: "right" }} value={this.state.mailaddress} onChange={this.onChangeMailaddress} />
                                <br />
                                <br />

                                <p style={{ float: "left" }}>Cep Telefonu</p>

                                <Input focus name="phonenumber" id="phonenumber" size="mini" style={{ width: '55%', float: "right" }} value={this.state.phonenumber} onChange={this.onChangePhonenumber} />
                                <br />
                                <br />

                                <Button basic color='yellow' style={{ float: "right" }} onClick={() => { this.onSubmit() }}>
                                    Güncelle
        </Button>

                            </Grid.Column>






                            <Grid.Column width={6}>
                                <br />
                                <br />

                                <h5 style={{ float: "center", color: "#fbbd08" }}>Şifre Güncelleme</h5>
                                <br />
                                <br />
                                <p style={{ float: "left" }}>Şu Anki Şifreniz</p>

                                <Input focus type="password" name="password" id="password" size="mini" style={{ width: '55%', float: "right" }}  value={this.state.password} onChange={this.handleChange} />
                                <br />
                                <br />
                                <p style={{ float: "left" }}>Yeni Şifreniz</p>
                                <Input focus type="password" name="new_password" id="new_password" size="mini" style={{ width: '55%', float: "right" }} value={this.state.new_password} onChange={this.handleChange} />
                                <br />
                                <br />
                                <p style={{ float: "left" }}>Yeni Şifreniz(Tekrar)</p>
                                <Input focus type="password" name="new_password_again" id="new_password_again" size="mini" style={{ width: '55%', float: "right" }}  value={this.state.new_password_again} onChange={this.handleChange}/>
                                <br />
                                <br />
                                <Button basic color='yellow' style={{ float: "right" }} onClick={() => { this.onUpdatePassword() }}>
                                    Güncelle
        </Button>


                            </Grid.Column>
                        </Grid>

                    </Container>


                </div>
            )

        }

        else {
            return (
                <div>
                    {this.props.history.push('/login')}
                </div>
            )
        }



    }
}
const mapStateToProps = ({ Accountinfo }) => {
    return {
        Accountinfo
    }
};

const mapDispatchToProps = {
    AccountinfoListCheck, UpdateAccountinfoCheck, UpdatePasswordfoCheck

};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountInfo));