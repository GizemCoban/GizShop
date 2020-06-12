import React, { Component } from 'react';
import { Button, Header, Image, Modal, Container, Grid, Input, Icon, Card } from 'semantic-ui-react';

import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { notification } from 'antd';
import {connect} from 'react-redux';
import {DeleteAddressListCheck} from './Address_action';

//this.props.obj._id
class AddressList extends Component {
    state = {
        modal: false,
    }
    onAddressUpdate = () => {
        this.props.history.push('/adresguncelle/' + this.props.obj._id);
        console.log("Seçilen Adress", this.props.obj._id)
    }
    onAddressDelete=()=>{
        this.setState({
            modal: true

        })
       
    }
    BackButtonAdmin=()=>{
        this.setState({
            modal: false

        })
    }

    DeleteAddress=()=>{
        this.props.DeleteAddressListCheck(this.props.obj._id)

    }
    componentWillReceiveProps(nextState){
        if(Object.keys(nextState.Address.DeleteAddress).length!==0){
            this.setState({
                modal: false
    
            })
           
                window.location.reload();
           
      
              
             // window.location.reload();
        }

    }

    render() {
        return (
            <>
                <Card style={{ margin: "10px" }}>
                    <Card.Content>

                        <Card.Header>{this.props.obj.addressTitle}</Card.Header>
                        <Card.Meta>{this.props.obj.username}</Card.Meta>
                        <Card.Description>
                            {this.props.obj.address}
                        </Card.Description>
                        <Card.Description>
                            {this.props.obj.phoneNumber}

                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Link to={"/adresguncelle/" + this.props.obj._id}>
                                <Button basic color='yellow'>
                                    <Icon name=' pencil alternate' /> Düzenle
                                </Button>

                            </Link>

                            {/* <Modal style={{ position: "fixed", margin: "auto", top: 0, right: 0, bottom: 0, left: 0 }}
                                trigger={<Button basic color='blue'> Düzenle</Button>}  centered={false}>
                                   
                            </Modal> */}
                            <Button basic color='red' onClick={this.onAddressDelete}>
                                <Icon name='trash alternate' />     Sil
          </Button>
                        </div>

                    </Card.Content>
                </Card>
                <Modal id="modalDesing" open={this.state.modal} style={{ position: "fixed", margin: "auto", top: 0, right: 0, bottom: 0, left: 0 }} basic size='small'>
                    <Header icon='trash alternate' content='Adresinizi Silmeye Emin Misiniz?' />

                    <Modal.Actions>
                        <Button color="red" onClick={() => { this.BackButtonAdmin() }} >
                            <Icon name='remove' />Hayır
</Button>
                        <Button color='green' inverted onClick={() => { this.DeleteAddress() }}>
                            <Icon name='checkmark' />Evet
</Button>
                    </Modal.Actions>
                </Modal>
            </>


        );
    }
}

const mapStateToProps = ({Address}) => {
	return {
        Address
	}
};

const mapDispatchToProps = {
    DeleteAddressListCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddressList));