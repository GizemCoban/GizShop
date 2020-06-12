import React, { Component } from "react";
import { Button, Header, Image, Modal, Container, Grid, Input, TextArea, Card } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';

import AccountMenu from "./AccountMenu";
import {notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import {connect} from 'react-redux';
import {UpdateAddressCheck,UpdateAddressListCheck } from './Address_action';


class AddressUpdate extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            username: '',
            phoneNumber: '',
            province: '',
            county: '',
            address: '',
            addressTitle:''
        }

    }



    componentDidMount(){
        this.props.UpdateAddressListCheck(this.props.match.params.id)
        console.log("Selam", this.props.match.params.id)//adresin idsi
       
        /*axios.get('http://localhost:4000/address/adres/'+this.props.match.params.id )
        .then(response => {
            this.setState({
                username: response.data.username,
                phoneNumber: response.data.phoneNumber,
                province:response.data.province,
                county:response.data.county,
                address:response.data.address,
                addressTitle:response.data.addressTitle



            })

        })
        .catch(function (error) {
            console.log(error);


        })*/
    }
    componentWillReceiveProps(nextState){
        if(Object.keys(nextState.Address.UpdateAddressList).length !== 0){
            let data = nextState.Address.UpdateAddressList.data
            console.log(data)
      
            this.setState({
                username: data.username,
                phoneNumber:data.phoneNumber,
                province:data.province,
                county:data.county,
                address:data.address,
                addressTitle:data.addressTitle

            })        
      
          }
          else if(Object.keys(nextState.Address.UpdateAddress).length !== 0){
            this.props.history.push('/adresbilgisi/' + localStorage.getItem('_id'));
            notification.open({
                   color:"green",
                    
                message:'Güncelleme Başarılı',
                icon: <CheckCircleOutlined style={{ color: '#19F50F' }} />,
                   placement:'topRight'
               });
                
                 
                    
               

          }

    }
    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value

        });
    }
    onChangephoneNumber = (e) => {
        this.setState({
            phoneNumber : e.target.value
        });

    }
    onChangeProvince = (e) => {
        this.setState({
            province: e.target.value
        });

    }
    onChangeCounty = (e) => {
        this.setState({
            county: e.target.value
        });
    }

    onChangeAddress = (e) => {
        this.setState({
            address: e.target.value
        });

    }
    onChangeAddressTitle = (e) => {
        this.setState({
            addressTitle: e.target.value
        });

    }

    onSubmitUpdate = (e) => {
       
        e.preventDefault();
        const objaddress = {

            username: this.state.username,
            phoneNumber: this.state.phoneNumber,
            province:this.state.province,
            county:this.state.county,
            address:this.state.address,
            addressTitle:this.state.addressTitle


        };
        this.props.UpdateAddressCheck(this.props.match.params.id,objaddress)
        

        // axios.put('http://localhost:4000/address/adres/guncelle/' + this.props.match.params.id, objaddress)
        // .then(res => {

        //     this.props.history.push('/adresbilgisi/' + localStorage.getItem('_id'));


        //    //console.log(this.props.match.params.id)
           
        //     console.log(res.data);
     
      
        // notification.open({
        //     color:"green",
            
        //     message:'Güncelleme Başarılı',
        //     icon: <CheckCircleOutlined style={{ color: '#19F50F' }} />,
        //     placement:'topRight'
        //   });
        
         
            
       
          
        // } ).catch(err => {
        //     console.log("hatalı")
        //     console.log(err);
        //     notification.open({
        //         message:'Güncelleme Başarısız',
                
        //         placement:'topRight'
        //       });
        // });

    }

    render() {

        if (localStorage.getItem('username')) {
            return (

                <div>
                   

                    <div>
                        <form onSubmit={this.onSubmitUpdate}>
                            <Container  className="containerContent" style={{ minHeight: "248px", marginBottom:"4%" }}>


                                <Grid>
                                    <Grid.Column width={4}>
                                        <AccountMenu />
                                    </Grid.Column>
                                    <Grid.Column width={4}>
                                        <p style={{ float: "left", fontWeight: "bold" }}>Adınız Soyadınız:</p>
                                        <br /> <br /><br />
                                        <p style={{ float: "left", fontWeight: "bold" }}>Cep Telefonu:</p>
                                        <br /><br /> <br />
                                        <p style={{ float: "left", fontWeight: "bold" }}>İl:</p>
                                        <br /> <br /> <br />
                                        <p style={{ float: "left", fontWeight: "bold" }}>İlçe:</p>
                                        <br /><br /><br />
                                        <p style={{ float: "left", fontWeight: "bold" }}>Adres:</p>
                                        <br /><br /><br /><br /><br />

                                        <p style={{ float: "left", fontWeight: "bold" }}>Adres Başlığı:</p>


                                    </Grid.Column>
                                    <Grid.Column width={8}>
                                        <Input facus name="username"
                                            id="username" style={{ float: "left", width: "400px" }}
                                            value={this.state.username}
                                            onChange={this.onChangeUsername} >
                                        </Input>
                                        <br /> <br /> <br />
                                        <Input facus name="phoneNumber"
                                            id="phoneNumber" style={{ float: "left", width: "400px" }}
                                            value={this.state.phoneNumber}
                                            onChange={this.onChangephoneNumber}>
                                        </Input>
                                        <br />
                                        <br />
                                        <br />
                                        <Input facus name="province"
                                            id="province" style={{ float: "left", width: "400px" }}
                                            value={this.state.province}
                                            onChange={this.onChangeProvince} >
                                        </Input>
                                        <br />
                                        <br />
                                        <br />
                                        <Input name="county"
                                            id="county" facus style={{ float: "left", width: "400px" }}
                                            value={this.state.county}
                                            onChange={this.onChangeCounty}>
                                        </Input>
                                        <br />
                                        <br />
                                        <br />
                                        <TextArea naem="address"
                                            id="address" facus
                                            style={{ float: "left", width: "400px" }}
                                            value={this.state.address}
                                            onChange={this.onChangeAddress} >
                                        </TextArea>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <Input name="addressTitle"
                                            id="addressTitle" facus style={{ float: "left", width: "400px" }}
                                            value={this.state.addressTitle}
                                            onChange={this.onChangeAddressTitle}></Input>

                                        <br />
                                        <br />
                                        <br />


                                        <Button type="submit"
                                            color='yellow' style={{ float: "left", width: "400px" }} >Güncelle</Button>

                                    </Grid.Column>






                                </Grid>

                            </Container>

                        </form>


                    </div>
                
                  
                  

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
const mapStateToProps = ({Address}) => {
	return {
        Address
	}
};

const mapDispatchToProps = {
    UpdateAddressCheck,UpdateAddressListCheck 
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddressUpdate));