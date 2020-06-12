import React, { Component } from 'react';
import { Button, Radio, Card } from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";

//this.props.obj._id
class MyOrderAddressList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            addAddress: ""
        }

    }

   


    handleChange= (_id, address)=>{
        let addAddress = { address }
        this.setState = ({
            addAddress: { addAddress }
        });
        localStorage.setItem("address", addAddress.address);
        console.log(addAddress.address)
        
        this.props.addressChange(true)
    }
    render() {
        console.log(this.props.obj)

        return (

            <div>
                <Card   >
                    <Card.Content style={{ maxHeight: "200px" }}>
                        <Radio
                        style={{float:"right"}}
                        
                            name='radioGroup'
                            
                          
                            onChange={()=>{this.handleChange(this.props.obj._id, this.props.obj.address)}}
                        />

                        <Card.Header>{this.props.obj.addressTitle}</Card.Header>
                        <Card.Meta>{this.props.obj.username}</Card.Meta>
                        <Card.Description>
                            {this.props.obj.address}
                        </Card.Description>
                    </Card.Content>
                   
                </Card>




            </div>


        );
    }
}

export default withRouter(MyOrderAddressList);