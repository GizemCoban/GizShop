
import React, { Component } from 'react';
import { Button, Card, Feed, Input, Radio, TextArea, Checkbox, Icon, Header, Segment, Label, Menu, List, Grid, Dropdown, Divider, Container, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { Row, Col, notification } from 'antd';


class ProductsImg extends React.Component{
    render(){
        return(
            <div>
                 <Container >
                    <Grid columns={2} celled style={{ height: "300px", width: "%80" }}>
                        <Grid.Column width={8}>
                            <Segment placeholder>
                                <Header icon>
                                    <Icon name='image' />
                                    Bir Fotoğraf Seçiniz
    </Header>

                                {this.props.productid}
                                <br />
                                <input type="file" onChange={this.onFileChange}></input>
                                <Button color='teal' onClick={this.onUpload} >Yükle</Button>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Card color="teal"  centered >
                                <Card.Content>
                                    <Image
                                        size='small'
                                        src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                    /> 
                                </Card.Content>
                                <Card.Content extra>
                                    
                                        <Button basic color='red' style={{width:"100%"}}>
                                            Sil
          </Button>                                  
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    </Grid>

                </Container>

            </div>
        )
    }
} 
export default withRouter(ProductsImg);