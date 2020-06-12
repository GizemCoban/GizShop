import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import { Container, Segment, Icon, Button, Card, Input, Grid, Label, Dropdown, Select,Image } from "semantic-ui-react";
import MyOrdersStep from "./MyOrdersStep";
class OrderCompleted extends React.Component{
    render(){
        return(<div>
              <div>
        <MyOrdersStep activeStep="tamamlandi" />
        <Container style={{ marginBottom: "2%"}}>
          <Segment placeholder>
          <Grid style={{marginTop:"6%",marginBottom: "6%"}}>
    <Grid.Row columns={3}>
      <Grid.Column>
       
      </Grid.Column>
      <Grid.Column>
        <Icon name="check circle" size="massive" color="green" />
      </Grid.Column>
      <Grid.Column>
      
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3}>
      <Grid.Column>
        
      </Grid.Column>
      <Grid.Column >
       <h1 style={{fontWeight:"bold"}}>Teşekkürler!</h1>
       <h4 style={{fontWeight:"bold"}}>Siparişiniz Başarıyla Tamamlandı.</h4>
       
      </Grid.Column>
      <Grid.Column>
       
      </Grid.Column>
     
    </Grid.Row>

 
  </Grid>

           
          </Segment>
        </Container>

      </div>
        </div>);
    }

}export default withRouter(OrderCompleted);