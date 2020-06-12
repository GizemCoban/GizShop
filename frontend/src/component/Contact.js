import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Image, Container, Button, Grid, Input, TextArea, List } from 'semantic-ui-react';
import Icon from "@ant-design/icons";
import axios from 'axios';
import {notification } from 'antd';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeMailaddress = this.onChangeMailaddress.bind(this);
        this.onChangeSubject = this.onChangeSubject.bind(this);
        this.onChangeMessage = this.onChangeMessage.bind(this);
      
        this.onSubmit=this.onSubmit.bind(this);
    
        this.state = {
          username: '',
          mailaddress: '',
          subject:'',
          message:''
         
         
        }  
      }

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

    onChangeSubject(e) {
        this.setState({
            subject: e.target.value
        });

    }
    onChangeMessage(e) {
        this.setState({
            message: e.target.value
        });

    }




    onSubmit(e){
      
        const newContact={
          username:this.state.username,
          mailaddress:this.state.mailaddress,
          subject:this.state.subject,
          message:this.state.message
        
      
        }
        axios.post('http://localhost:4000/contact/addContact',newContact).then(res=>{console.log(res.data)
        this.setState({
            username: '',
            mailaddress: '',
            subject:'',
            message:''
           
        
          },()=>{
            notification.open({
              message:'Mesaj Gönderme Başarılı',
              placement:'topRight'
            });
          })
          
       
      
      }).catch(err=>{
        console.log(err.message)
    });
      
      
      
      }
    render() {
        return (
            <div>

                <Container className="containerContent">

                    <Grid celled style={{ height: "500px", width: "%80" }}>


                        <Grid.Column width={10} >


                            <h5 style={{ float: "left", color: "#fbbd08" }}>İletişim Form</h5>
                            <br />
                            <br />

                            <Input placeholder='Adınız Soyadınız' style={{ float: "center", width: '60%' }}   value={this.state.username} onChange={this.onChangeUsername} />
                            <br />
                            <br />



                            <Input placeholder='Mail Adresiniz' style={{ float: "center", width: '60%' }} value={this.state.mailaddress}  onChange={this.onChangeMailaddress }  />
                            <br />
                            <br />



                            <Input placeholder='Konu' style={{ float: "center", width: '60%' }} onChange={this.onChangeSubject } value={this.state.subject}  />
                            <br />
                            <br />

                            <TextArea placeholder='Mesajınız' style={{ float: "center", width: '60%' }}  onChange={this.onChangeMessage} value={this.state.message}  />
                            <br />
                            <br />
                            <br />
                            <br />

                            <Button basic color='yellow' style={{ float: "center", width: '60%' }} onClick={() => { this.onSubmit() }}>
                                Gönder
</Button>

                        </Grid.Column>






                        <Grid.Column width={6}>
                            <br />
                            <br />

                            <h5 style={{ float: "center", color: "#fbbd08" }}>İletişim Bilgileri</h5>
                            <br />

                            <p style={{ float: "left", fontWeight: "bold" }}>Adres: </p>
                            <p style={{}}>Namık Kemal Mah, Alemdağ Cad. 8 A, 34762 Ümraniye/İstanbul</p>

                            <br />

                            <p style={{ float: "left", fontWeight: "bold" }}>Telefon:</p>
                            <p style={{}}>0531 365 13 14</p>
                            <br />

                            <p style={{ float: "left", fontWeight: "bold" }}>E-mail:</p>
                            <p style={{}}>gizshop1914@gmail.com</p>
                            <br />
                            <br />
                            <h5 style={{ float: "left", color: "#fbbd08" }}>Sosyal Medya</h5>
                            <br />
                            <div>
                                <a href="https://www.facebook.com/"><i className="facebook square icon big" ></i></a>
                                <a href="https://twitter.com/"><i className="twitter square icon big"></i></a>
                                <a href="https://www.linkedin.com/company/c"><i className="linkedin square icon big"></i></a>

                            </div>

                        </Grid.Column>
                    </Grid>

                </Container>
            </div>
        )
    }
}
export default withRouter(Contact);