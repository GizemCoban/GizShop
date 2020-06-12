import React, { Compnent } from "react";

import { Button, Card, Feed, Input, Label, Radio, Checkbox, Message, Header, Segment, Menu, List, Grid, Dropdown, Divider, Container, Image } from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {registerCheck} from './action'
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





class Register extends React.Component {
  constructor(props) {
    super(props);
  
    this.onSubmit=this.onSubmit.bind(this);

    this.state = {
      username: '',
      mailaddress: '',
      password: '',
      formErrors: {
        username:'',
        mailaddress: '',
        password:'' 

      }
    }  
  }
 
  Giris(e) {
    this.props.history.push('/login');
  }
  handleChange = (e) => {
    e.preventDefault();

    //console.log(e.target)
    this.setState({ [e.target.name]: e.target.value })    //Inputlardaki değerleri alma
    //console.log(e.target.value)
    let formErrors = { ...this.state.formErrors };
    //console.log(emailRegex.test(e.target.value))
    switch (e.target.name) {
      case "username":
        formErrors.username=
          e.target.value.length < 3 ? "en az 3 karakter olmalı" : "";
        break;
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
    this.setState({ formErrors: formErrors })
    //console.log(e.target.value);
    // this.setState({ [e.target.name]: e.target.value })
    // console.log(e.target.value)

  }

  onSubmit(e){
    e.preventDefault();

    
  const register={
    username:this.state.username,
    mailaddress:this.state.mailaddress,
    password:this.state.password

  }
     //axios ile backenddeki sorguya post atma
     this.props.registerCheck(register)

   
    
  }


  componentWillReceiveProps(nextState){
    if(Object.keys(nextState.User.user).length !== 0){
      let data = nextState.User.user.data
      console.log(data)

      localStorage.setItem("username", data.username);
      localStorage.setItem("_id",data._id);  
 
      this.props.history.push('/'); //Login olunduysa anasayfaya yönlendirme  

    {
        notification.open({
          message: 'Başarıyla Üye Olundu',
          placement: 'topRight'
        });
      }


    }
    else if (Object.keys(nextState.User.user).length === 0){
      if (nextState.User.reject){
        this.setState({
          mailaddress: "",
          password: "",
        }, () => {
          notification.open({
            message: 'kayıt işlemi sırasında bir hata oluştu',
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
        <form onSubmit={this.onSubmit}>
       
         <Container  style={{margin:"200px"}}>
        <div className="ui container center aligned"  >
          <Card.Group itemsPerRow={0}  >
            <Card color="yellow" style={{
              margin: "auto",  right: 0, bottom: 0, left: 0, width: "35%",
              height: "470px"
            }}
            >
              <Card.Content>
                <Card.Header>Üye Ol</Card.Header>
              </Card.Content>
              <form>
              <Card.Content>
                <Input focus className={formErrors.username.length > 0 ? "error" : ""}  name="username" id="name" style={{ width: '80%' }} value={this.state.username} onChange={this. handleChange }  placeholder='Adınız Soyadınız' /> 
                {formErrors.username.length > 0 && (
                      <span className="errorMessage">  <br/>       {formErrors.username}</span>
                      //message.error(formErrors.mailaddress)
                    )}        
                <br />
                <br />
                <Input focus className={formErrors.mailaddress.length > 0 ? "error" : ""} name="mailaddress" id="name" style={{ width: '80%' }}  value={this.state.mailaddress} onChange={this.handleChange}  placeholder='Mail Adresiniz' />
                {formErrors.mailaddress.length > 0 && (
                      <span className="errorMessage">   <br/>     {formErrors.mailaddress}</span>
                      //message.error(formErrors.mailaddress)
                    )}
               
                <br />
                <br />
                <Input focus className={formErrors.password.length > 0 ? "error" : ""} name="password" type="password"  id="name" value={this.state.password} onChange={this. handleChange } style={{ width: '80%' }}  placeholder='Şifre' />
                <span className="errorMessage"> <br/>{formErrors.password}</span>
                <br />
                <br />
                <div >
                  <Message
                    info
                    list={[
                      'Şifreniz en az 6 karakter uzunluğunda olmalı,',
                      'En az bir harf, rakam veya özel karakter içermelidir.',
                    ]}
                  />

                </div>

                <br />
                <br />
                <Button type="submit" color="yellow" style={{ width: '80%' }}>Üye Ol</Button>
                <br />
                <br />
                <div >Zaten Üye Misiniz?  <Label as='a' content='Giriş Yap'  onClick={() => { this.Giris() }}></Label>
                </div>
                <br />
                <br />

              </Card.Content>

              </form>
              
            </Card>



          </Card.Group>




        </div>
        </Container>

        </form>
        
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
  registerCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));


