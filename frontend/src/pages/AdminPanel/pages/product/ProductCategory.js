import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Button, Input, TextArea, Grid, Container, Dropdown } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { AdminCategorytAddCheck } from '../redux/Admin_action';
import { Row, Col, notification } from 'antd';


const gender = [
  {
    key: 0,
    text: 'Kadın',
    value: 'Kadın',

  },
  {
    key: 1,
    text: 'Erkek',
    value: 'Erkek',

  },
  {
    key: 2,
    text: 'Çocuk',
    value: 'Çocuk',

  },
]


class ProductCategory extends React.Component {

  constructor(props) {
    super(props);

    this.onChangecategory = this.onChangecategory.bind(this);

    this.onSubmitCreateCategory = this.onSubmitCreateCategory.bind(this);

    this.state = {
      gender: '',
      category: '',


    }

  }
  onChangecategory(e) {
    this.setState({
      category: e.target.value
    });

  }
  onChangeGender = (e, data) => {
    this.setState({
      gender: data.value
    });


  }

  onSubmitCreateCategory(e) {
    const objAddCategory = {
      gender: this.state.gender,
      category: this.state.category,


    }
    this.props.AdminCategorytAddCheck(objAddCategory)

  }

  componentWillReceiveProps(nextState){
    if(Object.keys(nextState.AdminProduct.category).length!==0){
      notification.open({
                           message: 'Kategori Başarıyla Kayıtedildi',
          
                        });

    }

  }
  render() {
    if (localStorage.getItem('admin') && localStorage.getItem('admin') !== "undefined" ){
      console.log(this.state.gender)
      return (
        <div>
        
            <div>
              <Container>
                <Grid>
                  <Grid.Column width={4}>
                    <p style={{ float: "left", fontWeight: "bold" }} >Cinsiyet:</p>
                    <br />
                    <br />
                    <br />
  
                    <p style={{ float: "left", fontWeight: "bold" }}>Kategori Adı:</p>
  
  
  
  
  
  
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Dropdown
                      style={{ float: "left", width: "400px" }}
                      placeholder='Cinsiyet'
                      fluid
                      selection
                      options={gender}
                      onChange={this.onChangeGender}
                    />
  
                    <br />
                    <br />
                    <br />
                    <Input facus name="category" id="category" style={{ float: "left", width: "400px" }}
                      value={this.state.category} onChange={this.onChangecategory}
  
                    ></Input>
  
                    <br />
                    <br />
                    <br />
  
                    <Button onClick={this.onSubmitCreateCategory} color='yellow' style={{ width: "100px" }} >Kaydet</Button>
  
                  </Grid.Column>
  
                </Grid>
  
  
              </Container>
            </div>
  
        </div>
      )

    }
    else{
      return(
        <div>
            {this.props.history.push('/')}
        </div>
    )
    }
  
  }
}
const mapStateToProps = ({ AdminProduct }) => {
  return {
    AdminProduct
  }
};

const mapDispatchToProps = {
  AdminCategorytAddCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductCategory));