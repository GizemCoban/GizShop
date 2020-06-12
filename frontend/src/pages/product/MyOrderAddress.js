import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import MyOrdersStep from "./MyOrdersStep";
import { Container, Segment, Header, Icon, Button, Card, Image,Grid,Radio } from "semantic-ui-react";

import MyOrderAddressList from "./MyOrderAddressList";
import axios from "axios";
import { connect } from 'react-redux';
import {BasketAddressListCheck} from './Redux/Product_action';


class MyOrdersAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
        
            username: '',
            phoneNumber: '',
            province: '',
            county: '',
            address: '',
            addressTitle: '',
            user_id: '',
            addressList: [],
            addAddress:"",
            selectAddress: false

        }
      }
 
    
      tabRow() {
        return this.state.addressList.map( (obj, i) => {
            return <MyOrderAddressList obj={obj} key={i} 
            addressChange={(address)=>{this.setState({ selectAddress: address  })}} />;
        });
        /**
         * [{},{}]
         */
    }

    selectAddress = (address) =>{
        this.setState({
            selectAddress: address
        })
    }
    componentDidMount() {
        const userId = localStorage.getItem('_id')
        this.props.BasketAddressListCheck(userId);

    }
    componentWillReceiveProps(nextState){
        if (Object.keys(nextState.Products.basketAddressList).length !== 0) {
            this.setState({
                addressList:nextState.Products.basketAddressList.data
   
               })
        }
    }
    
    onClickNext=()=>{
        this.setState=({
            addAddress:this.props.addAddress
            
           
            
        })
        console.log("adresss",this.props.addAddress)
        this.props.history.push('/kartbilgilerim');
    }


    render() {
        return (
            <div>
                <MyOrdersStep activeStep="address" />
                <Container style={{ marginBottom: "2%"}}>
                   
                    <Segment placeholder  style={{height: "500px"}} >
                        <Card.Group  style={{justifyContent: "center"}} >
                           
                            { this.tabRow()}
                        </Card.Group>
                    </Segment>  
                    <Button color='yellow' disabled={this.state.selectAddress ? false : true} onClick={()=>{this.onClickNext()}} style={{ position: "relative", left: "400px", fontSize: "15px", fontWeight: "bolder" }}>Devam Et <Icon name="angle right" size="large"></Icon>    </Button>       
                </Container>
             
            </div>
        )
    }
}
const mapStateToProps = ({ Products}) => {
    return {
        Products
    }
};

const mapDispatchToProps = {
    BasketAddressListCheck
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyOrdersAddress));