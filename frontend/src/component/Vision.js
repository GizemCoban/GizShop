import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container, Card, Icon, Segment, Input, Button, Divider } from 'semantic-ui-react';
import AboutUsMenu from './AboutUsMenu';


class Vision extends React.Component {
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
                                <b>Vizyonumuz</b>
                                <Divider />
                                <p>
                                    Kalite ve teknolojinin imkanlarını kullanarak müşterilerimize en iyi hizmeti vermeyi kendine ilke edinen GizShop’un amacı; müşterilerine sadece güneş gözlüğü satmak değil, satışın her aşamasında müşteri memnuniyetini sağlamaktır.
      </p>

                            </Container>



                        </Grid.Column>

                    </Grid>

                </Container>







            </div>

        )
    }
}
export default withRouter(Vision);