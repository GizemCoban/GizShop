import React, { Component } from "react";
import { Icon, Step, Container } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';


class MyOrdersStep extends React.Component {
    constructor(props) {
        super(props);
      
      }
    render() {
        return (
            <div>
              
                <Container>
                <Step.Group style={{width:"100%"}}>
                    <Step active={this.props.activeStep == "address" ? true : false} >
                        <Icon name='map marker alternate' />
                        <Step.Content>
                            <Step.Title>Adres Bilgileri</Step.Title>
                            
                        </Step.Content>
                    </Step>
                    <Step active={this.props.activeStep == "card" ? true : false} >
                        <Icon name='credit card' />
                        <Step.Content>
                            <Step.Title>Ödeme Bilgileri</Step.Title>
                            
                        </Step.Content>
                    </Step>
                    <Step active={this.props.activeStep == "siparisozet" ? true : false}  >
                        <Icon name='cart' />
                        <Step.Content>
                            <Step.Title>Sipariş Özet</Step.Title>
                            
                        </Step.Content>
                    </Step>
                    <Step active={this.props.activeStep == "tamamlandi" ? true : false}>
                        <Icon name='truck' />
                        <Step.Content>
                            <Step.Title>Siparişi Tamamla</Step.Title>
                            
                        </Step.Content>
                    </Step>
                </Step.Group>


                </Container>
               
            </div>
        )
    }
}
export default withRouter(MyOrdersStep);