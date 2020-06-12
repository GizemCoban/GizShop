import React, { Compnent } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Button, Card, Feed, Input, Radio, Checkbox, Header, Segment, Label, Menu, List, Grid, Dropdown, Divider, Container, Image } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {loginCheck} from './action';
import { notification } from 'antd';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = (formErrors) => {
  let valid = true;
  console.log(formErrors)

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
 /* Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });*/

  return valid;
};


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      mailaddress: "",
      password: "",
      formErrors: {
        mailaddress: "",
        password: ""

      }


    }

  }
  UyeOl(e) {
    this.props.history.push('/register');
  }
  

  handleChange = (e) => {
    e.preventDefault();

    //console.log(e.target)
    this.setState({ [e.target.name]: e.target.value })    //Inputlardaki değerleri alma
    //console.log(e.target.value)
    let formErrors = { ...this.state.formErrors };
    //console.log(emailRegex.test(e.target.value))
    switch (e.target.name) {
      case "mailaddress":
        formErrors.mailaddress = emailRegex.test(e.target.value)
          ? ""
          : "Geçersiz mail adresi";
        break;
      case "password":
        formErrors.password =
          e.target.value.length < 3 ? "en az 3 karakter olmalı" : "";
        break;
      default:
        break;

    }
    this.setState({formErrors: formErrors})
    //console.log(e.target.value);
    // this.setState({ [e.target.name]: e.target.value })
    // console.log(e.target.value)

  }

  Giris = (event) => {
  

    event.preventDefault();

   let login = { mailaddress: this.state.mailaddress, password: this.state.password, role: "admin" }

    //axios ile backenddeki sorguya post atma
    this.props.loginCheck(login)
 

  }
  
  componentWillReceiveProps(nextState){
    if(Object.keys(nextState.User.user).length !== 0){
      let data = nextState.User.user.data
      console.log(data)

      localStorage.setItem("username", data.username);
      localStorage.setItem("admin", data.role);
      localStorage.setItem("_id",data._id);  
 
      this.props.history.push('/'); //Login olunduysa anasayfaya yönlendirme  

    }
    else if (Object.keys(nextState.User.user).length === 0){
      if (nextState.User.reject){
        this.setState({
          mailaddress: "",
          password: "",
        }, () => {
          notification.open({
            message: 'Kullanıcı Adı veya Şifre Yanlış',
            placement: 'topRight'
          });
        })

      }
     

    }
    console.log(nextState)
   
  }






  render() {
    const { formErrors } = this.state;
   
    return (
      <div>  
        <Container  style={{margin:"150px"}}>
          <div className="ui container center aligned" >
            <Card.Group itemsPerRow={0} >
              <Card color="yellow" style={{
                margin: "auto",  right: 0, bottom:0, left: 0, width: "35%",
                height: "350px"
              }} 
              >
                <Card.Content>
                  <Card.Header>Üye Girişi</Card.Header>
                </Card.Content>
                <form onSubmit={this.Giris} >

                <Card.Content>
                    <Input focus  name="mailaddress" id="name"  style={{ width: '80%' }} value={this.state.mailaddress} onChange={this.handleChange} noValidate placeholder='Kullanıcı Adı veya Mail Adresi' />
                    {formErrors.mailaddress.length > 0 && (
                      <span className="errorMessage"> <br/>{formErrors.mailaddress}</span>
                    )}
                   
                    <br />
                    <br />
                    <Input focus name="password" type="password"  id="name" value={this.state.password} onChange={this.handleChange} style={{ width: '80%' }} noValidate placeholder='Şifre' />
                    <span className="errorMessage"> <br/>{formErrors.password}</span>
    
                    <br />
                    <br />
                    <Button color="yellow" style={{ width: '80%', }}  type="submit" >Giriş</Button>
                    <br />
                    <br />
                    <Button color="yellow" style={{ width: '80%' }} onClick={() => { this.UyeOl() }}>Üye Ol</Button>
                    <br />
                    <br />
                  <div style={{ float: 'right', width: "48%" }}> <Label as='a' content='Şifremi Unuttum' /></div>
                  <div style={{ width: "42%", float: "left", position: 'absolute' }} >
                      <label>
                        <input name="rememberMe" type="checkbox" /> Beni Hatırla
      </label>
                    </div>
                    <br />
                    <br />

                </Card.Content>
                </form>
               
              </Card>

            </Card.Group>

          </div>

        </Container>

       
      
    



      </div>


    )
  }


}
const mapStateToProps = ({User}) => {
	return {
        User
	}
};

const mapDispatchToProps = {
    loginCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
