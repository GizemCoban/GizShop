import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import AccountMenu from "./AccountMenu";
import { Button, Header, Image, Modal, Container, Grid, Input, TextArea, Card, Icon } from 'semantic-ui-react';
import {connect} from 'react-redux';
import {addAddressCheck, AddressListCheck} from './Address_action';
import { notification } from 'antd';
import axios from "axios";
import AddressList from "./AddressList";

class AddressInformation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            username: '',
            phoneNumber: '',
            province: '',
            county: '',
            address: '',
            addressTitle: '',
            user_id: '',
            addressList: []


        }
    }
     //Modelı açmak
     handleOpen = () => this.setState({
        modalOpen: true
    })

    
    //Textlerden değerleri alıyor. Textlerdeki işlemler burada yapılır. 
    handleChange = (e) => {

        this.setState({ [e.target.name]: e.target.value })    //Inputlardaki değerleri alma


    }


    onClickAddAddress = (e) =>{
        e.preventDefault();
        console.log(this)
    
        let user_id = localStorage.getItem('_id')
        const addAddress = {
            username: this.state.username,
            phoneNumber: this.state.phoneNumber,
            province: this.state.province,
            county: this.state.county,
            address: this.state.address,
            addressTitle: this.state.addressTitle,
            user_id: user_id
        }
         //axios ile backenddeki sorguya post atma
         this.props.addAddressCheck(addAddress)
      
      }
    

    handleClose = () => this.setState({
        modalOpen: false,
        username: '',
        phoneNumber: '',
        province: '',
        county: '',
        address: '',
        addressTitle: ''
    })

    componentWillReceiveProps(nextState){
        console.log(Object.keys(nextState.Address.addressList))
        if(Object.keys(nextState.Address.addressList).length>0){
            this.setState({addressList: nextState.Address.addressList.data})
            console.log("address listele")
        }
        if(nextState.Address.addressModal){
         this.handleClose()
         notification.open({
            message: 'Adres Başarıyla Eklendi',
            placement: 'topRight'
          });
          window.location.reload();
        }
        
        
        console.log(this.state)
       
      }




      componentDidMount() {
        const userId = localStorage.getItem('_id')

        this.props.AddressListCheck(userId)
      

    }

      tabRow() {
        return this.state.addressList.map(function (obj, i) {
            return <AddressList obj={obj} key={i} />;
        });
        /**
         * [{},{}]
         */
    }


    render() {
        const { modalOpen } = this.state
        return (
            <div>
                 <Container style={{ margin: 50 }}>
                    <Grid>
                        <Grid.Column width={4}>
                            <AccountMenu />
                        </Grid.Column>
                        <Grid.Column width={12}>
                            {/* <Card> */}

                            <Modal id="AddressInformation"
                                 style={{ position: "fixed", margin: "auto", top: 0, right: 0, bottom: 0, left: 0, height: "600px",width:"500px" }}
                                trigger={<Button fluid color="yellow" icon
                                onClick={this.handleOpen}> <Icon name="plus" /> Adres Ekle</Button>}
                                centered={false}
                                onClose={this.handleClose}
                                closeOnDimmerClick={true}
                                open={modalOpen}
                            >
                                <Modal.Header>Adres Ekle</Modal.Header>
                                <Modal.Content >
                                    <p> Adınız Soyadınız</p>
                                    <Input focus name="username" id="username" size="mini" style={{ width: '100%' }} value={this.state.username} onChange={this.handleChange} />
                                    <br />

                                    <p> Cep Telefonu</p>
                                    <Input focus name="phoneNumber" id="phoneNumber" size="mini" style={{ width: '100%' }} value={this.state.phoneNumber} onChange={this.handleChange} />
                                    <br />

                                    <p> İl</p>
                                    <Input focus name="province" id="province" size="mini" style={{ width: '100%' }} value={this.state.province} onChange={this.handleChange} />
                                    <br />

                                    <p>İlçe</p>
                                    <Input focus name="county" id="county" size="mini" style={{ width: '100%' }} value={this.state.county} onChange={this.handleChange} />
                                    <br />

                                    <p>Adres</p>
                                    <TextArea name="address" id="address" size="mini" style={{ width: '100%' }} value={this.state.address} onChange={this.handleChange} />
                                    <br />

                                    <p>Adres Başlığı</p>
                                    <Input focus name="addressTitle" id="addressTitle" size="mini" style={{ width: '100%' }} value={this.state.addressTitle} onChange={this.handleChange} />
                                    <br />
                                    <br />
                                    <Button color='yellow' style={{ position: "relative", width: '100%' }} onClick={this.onClickAddAddress}>Kaydet</Button>



                                </Modal.Content>
                            </Modal>


                            {/* </Card> */}
                            <Grid.Row style={{ justifyContent: "center" }}>
                                <Card.Group centered style={{ margin: "10px" }}>
                                 {this.tabRow()}
                                
                                </Card.Group>
                          
                            </Grid.Row>
                        </Grid.Column>




                    </Grid>

                </Container>

            </div>
        )
    }
}
const mapStateToProps = ({Address}) => {
	return {
        Address
	}
};

const mapDispatchToProps = {
    addAddressCheck,AddressListCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddressInformation));
