import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import MyOrdersStep from "./MyOrdersStep";
import { Container, Segment, Icon, Button, Card, Input, Grid, Popup, Label, Dropdown } from "semantic-ui-react";
const month = [
  { key: 'Ocak', text: 'Ocak', value: 'Ocak' },
  { key: 'Şubat', text: 'Şubat', value: 'Şubat' },
  { key: 'Mart', text: 'Mart', value: 'Mart' },
  { key: 'Nisan', text: 'Nisan', value: 'Nisan' },
  { key: 'Mayıs', text: 'Mayıs', value: 'Mayıs' },
  { key: 'Haziran', text: 'Haziran', value: 'Haziran' },
  { key: 'Temmuz', text: 'Temmuz', value: 'Temmuz' },
  { key: 'Ağustos', text: 'Ağustos', value: 'Ağustos' },
  { key: 'Eylül', text: 'Eylül', value: 'Eylül' },
  { key: 'Ekim', text: 'Ekim', value: 'Ekim' },
  { key: 'Kasım', text: 'Kasım', value: 'Kasım' },
  { key: 'Aralık', text: 'Aralık', value: 'Aralık' },

]




const year = [
  { key: "2019", text: '2019', value: '2019' },
  { key: '2020', text: '2020', value: '2020' },
  { key: '2021', text: '2021', value: '2021' },
  { key: '2022', text: '2022', value: '2022' },
  { key: '2023', text: '2023', value: '2023' },
  { key: '2024', text: '2024', value: '2024' },
  { key: '2025', text: '2025', value: '2025' },
  { key: '2026', text: '2026', value: '2026' },


]



class CreditCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cardnumber: "",
      cardname: "",
      cardmount: "",
      cardyear: "",
      cardcvv: "",
      labelStatus: "hidden"



    }

  }


  onChangeCardNumber = () => {
    this.setState({

    })


  }

  onClickCard() {
    this.props.history.push('/siparisozeti/'+ localStorage.getItem('_id'));
  }

  onClickCvv() {

    this.setState({
      labelStatus: "visible"
    })


  }
  labelStatus = () => {
    const labelStatus = "visible"
  }

  render() {



    return (

      <div>
        <MyOrdersStep activeStep="card" />
        <Container style={{ marginBottom: "2%" }}>
          <Segment placeholder>

            <div className="ui container center aligned" >



              <Card.Group itemsPerRow={0} >
                <Card color="yellow" style={{
                  margin: "auto", right: 0, bottom: 0, left: 0, width: "50%",
                  height: "500px"
                }}
                >
                  <Card.Header style={{ color: "#fbbd08", fontWeight: "bold", fontSize: "20px" }}>Kart Bilgileri</Card.Header>
                  <Card.Content>


                    <Grid divided='vertically'>


                      <Grid.Row columns={2}>

                        <Grid.Column>
                          <br /><br /><br />
                          <p style={{ fontWeight: "bold" }}>Kart Numarası:</p>
                          <br /><br />
                          <p style={{ fontWeight: "bold" }}>Kart Üzerindeki İsim:</p>
                          <br /><br />
                          <p style={{ fontWeight: "bold" }}>Son Kullanma Tarihi:</p>
                          <br /><br />
                          <p style={{ fontWeight: "bold" }}>CVV:</p>
                        </Grid.Column>
                        <Grid.Column>
                          <br /><br /><br />
                          <Input style={{ float: "left", width: "100%" }} name="cardnumber" id="cardnumber"></Input>
                          <br /><br /><br />
                          <Input style={{ float: "left", width: "100%" }}></Input>
                          <br /><br />
                          <Dropdown style={{ margin: ' 1em 0em ', minWidth: "7em", float: "left" }}
                            onChange={this.handleChange}
                            options={month}
                            placeholder='Ay'
                            selection


                          />
                          <Dropdown style={{ margin: ' 1em 0em ', minWidth: "7em" }}
                            onChange={this.handleChange}
                            options={year}
                            placeholder='Yıl'
                            selection


                          />
                          <br /><br />


                          <Input style={{ float: "left", width: "7em" }}></Input>

                          <Popup  
                            trigger={<Icon name='question circle outline' style={{ float: "left" }}  size='large'  />}
                            content='Kartınızın arkasındaki son 3 rakam'
                            position='bottom center'
                          />

                        
                            
      
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>



                  </Card.Content>
                </Card>
              </Card.Group>
            </div>
            <Button color='yellow' onClick={() => { this.onClickCard() }} style={{ position: "relative", left: "400px", fontSize: "15px", fontWeight: "bolder" }}>Ödeme Yap <Icon name="angle right" size="large"></Icon>    </Button>
          </Segment>
        </Container>

      </div>
    )
  }
}
export default withRouter(CreditCard);