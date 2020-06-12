import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container, Card, Icon, Segment, Input, Button, Divider } from 'semantic-ui-react';
import AboutUsMenu from './AboutUsMenu';


class Mission extends React.Component {
    render() {
        return (
            <div>

                <Container className="containerContent">

                    <Grid celled style={{ height: "400px", width: "%80" }}>

                        <Grid.Column width={3}>
                            <AboutUsMenu />
                        </Grid.Column>


                        <Grid.Column width={13}>
                        <Container textAlign='justified'>
                    <b>Misyonumuz</b>
                    <Divider />
                    <p>
                    Geniş ürün yelpazesi ve sürekli yenilenen ürün koleksiyonları ile kaliteli güneş gözlüğü ürünlerini getirerek, müşterilerimizin hizmetine sunmak, güven, samimiyet, kaliteli ürün ve saygı anlayışı içerisinde hizmet sunarak fark ve değer yaratan çevrimiçi bir alışveriş sitesi olmak en önemli misyonumuzdur. 
      </p>
                 
                </Container>
              
                           

                        </Grid.Column>
                        
                    </Grid>

                </Container>






              
            </div>

        )
    }
}
export default withRouter(Mission);