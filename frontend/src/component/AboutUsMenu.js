import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container, Card, Icon, Segment, Input, Button } from 'semantic-ui-react';

class AboutUsMenu extends React.Component {
    render() {
        return (
            <div>
                <h2>KURUMSAL</h2>

                <Segment vertical>
                    <Link className="text-link " to={"/hakkimizda"}> Hakkımızda</Link>
                </Segment>
                <Segment vertical>
                    <Link  className="text-link " to="/vizyonumuz">Vizyonumuz</Link>
                </Segment>
                <Segment vertical>
                    <Link className="text-link " to={'/misyonumuz'}> Misyonumuz</Link>
                </Segment>
               
            </div>
        )
    }
}
export default withRouter(AboutUsMenu);