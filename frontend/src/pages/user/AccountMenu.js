import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container, Card, Icon, Segment, Input, Button } from 'semantic-ui-react';

class AccountMenu extends React.Component {
    render() {
        return (
            <div>
                <h2>Hesabım</h2>

                <Segment vertical>
                    <Link className="text-link " to={"/kullanicibilgileri/"+ localStorage.getItem('_id') }> <Icon name='user' />Kullanıcı Bilgilerim</Link>
                </Segment>
                <Segment vertical>
                    <Link  className="text-link " to="/accountinfo"> <Icon name='gift' />Siparişlerim</Link>
                </Segment>
                <Segment vertical>
                    <Link className="text-link " to={'/adresbilgisi/'+ localStorage.getItem('_id')}> <Icon name='map marker alternate' /> Adres Bilgilerim</Link>
                </Segment>
                <Segment vertical>
                    <Link className="text-link " to="/accountinfo"> <Icon name='credit card' />Kayıtlı Kredi Kartlarım</Link>
                </Segment>
            </div>
        )
    }
}
export default withRouter( AccountMenu);