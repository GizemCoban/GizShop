import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { Button, Input, TextArea, Grid, Container, Icon, Image, Card, Segment, Header, Dropdown } from 'semantic-ui-react';
import axios from "axios";
import { notification } from 'antd';
import { connect } from 'react-redux';
import { AdminProductAddCheck, AdminCategorytSelectCheck } from '../redux/Admin_action';



class CreateProduct extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeBrandname = this.onChangeBrandname.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeFeature = this.onChangeFeature.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmitCreateProduct = this.onSubmitCreateProduct.bind(this);

        this.state = {
            brandname: '',
            code: '',
            feature: '',
            stock: '',
            price: '',
            productsImg: '',
            category: [],
            selectCatogories:''

        }


    }

    onFileChange = (e) => {
        this.setState({ productsImg: e.target.files[0] })
    }

    onChangeCategory = (e, data) => {
        this.setState({
          selectCatogories:data.value
        });
    
    
      }

    onChangeBrandname(e) {
        this.setState({
            brandname: e.target.value
        });
        console.log(e.target.value);
    }
    onChangeCode(e) {
        this.setState({
            code: e.target.value
        });
    }

    onChangeFeature(e) {
        this.setState({
            feature: e.target.value
        });
    }

    onChangeStock(e) {
        this.setState({
            stock: e.target.value
        });
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        });
    }
    onSubmitCreateProduct(e) {
        e.preventDefault();
        if (this.state.productsImg) {
            let reader = new FileReader();
            reader.readAsDataURL(this.state.productsImg);
            //Base64 formatına çevirme
            reader.onloadend = () => {


                const objAddProduct = {
                    brandname: this.state.brandname,
                    code: this.state.code,
                    feature: this.state.feature,
                    stock: this.state.stock,
                    price: this.state.price,
                    productsImg: reader.result,
                    category_id: this.state.selectCatogories

                }
                this.props.AdminProductAddCheck(objAddProduct)
            }

        }
        else{
            const objAddProduct = {
                brandname: this.state.brandname,
                code: this.state.code,
                feature: this.state.feature,
                stock: this.state.stock,
                price: this.state.price,
                productsImg: " ",
                category_id: this.state.selectCatogories

            }
            this.props.AdminProductAddCheck(objAddProduct)
        }



    }


    componentWillReceiveProps(nextState) {
        if (Object.keys(nextState.AdminProduct.product).length !== 0) {
            notification.open({
                message: 'Ürün Başarıyla Kayıtedildi',


            });
            this.setState({
                brandname: " ",
                code: " ",
                feature: " ",
                stock: " ",
                price:" ",
                productsImg: "",
                selectCatogories: null

            })

            

        }
        else if (Object.keys(nextState.AdminProduct.selectcatogories).length !== 0) {
            let category = nextState.AdminProduct.selectcatogories.data
            const newCategory = []
            for (let i = 0; i < category.length; i++) {
                newCategory.push({
                    key: i,
                    text: category[i].gender + " - " + category[i].category,
                    value: category[i]._id
                })
            }
            this.setState({ category: newCategory });

        }







        //   else if(nextState.Admin.MemberError){
        //     notification.open({
        //                  message: 'Başarısız',
        //                 description: "Üyeler Yüklenemedi",

        //               });

        //   }


    }

    componentDidMount() {
        this.props.AdminCategorytSelectCheck();



    }




    render() {
      
            console.log(this.state.category)
            return (
                <div>
                    <form onSubmit={this.onSubmitCreateProduct} >
                        <div>
    
                            <Container>
                                <Grid>
                                    <Grid.Column width={4}>
                                        <p style={{ float: "left", fontWeight: "bold" }}>Kategori:</p>
                                        <br />
                                        <br />
                                        <br />
                                        <p style={{ float: "left", fontWeight: "bold" }}>Marka Adı:</p>
                                        <br />
                                        <br />
                                        <br />
    
                                        <p style={{ float: "left", fontWeight: "bold" }}>Kodu:</p>
    
                                        <br />
                                        <br />
                                        <br />
    
                                        <p style={{ float: "left", fontWeight: "bold" }}>Ürün Özellikleri:</p>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
    
                                        <p style={{ float: "left", fontWeight: "bold" }}>Stok:</p>
                                        <br />
                                        <br />
                                        <br />
    
                                        <p style={{ float: "left", fontWeight: "bold" }}>Fiyat:</p>
    
    
                                    </Grid.Column>
                                    <Grid.Column width={12}>
                                        <Dropdown
                                            style={{ float: "left", width: "400px" }}
                                            placeholder='Kategoriler'
                                            fluid
                                            selection
                                            options={this.state.category}
                                            value={this.state.selectCatogories}
                                            onChange={this.onChangeCategory}
                                        />
                                        <br />
                                        <br />
                                        <br />
                                        <Input facus name="brandname" id="brandname" style={{ float: "left", width: "400px" }} value={this.state.brandname} onChange={this.onChangeBrandname}
                                        ></Input>
                                        <br />
                                        <br />
                                        <br />
                                        <Input facus name="code" id="code" style={{ float: "left", width: "400px" }}
                                            value={this.state.code} onChange={this.onChangeCode}
                                        ></Input>
                                        <br />
                                        <br />
                                        <br />
                                        <TextArea name="feature" id="feature" style={{ minHeight: 100, width: "400px", float: "left" }} value={this.state.feature} onChange={this.onChangeFeature}
                                        />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <Input name="stock" id="stock" facus style={{ float: "left", width: "400px" }}
                                            value={this.state.stock} onChange={this.onChangeStock}
                                        ></Input>
                                        <br />
                                        <br />
                                        <br />
                                        <Input name="price" id="price" facus style={{ float: "left", width: "400px" }}
                                            value={this.state.price} onChange={this.onChangePrice}
                                        ></Input>
                                        <br />
                                        <br />
                                        <br />
    
    
    
    
                                    </Grid.Column>
    
                                </Grid>
                                <Grid columns={2} style={{ height: "300px", width: "%60" }}>
                                    <Grid.Column width={6}>
                                        <Segment placeholder>
                                            <Header icon>
                                                <Icon name='image' />
                                        Bir Fotoğraf Seçiniz
        </Header>
                                            <br />
                                            <input type="file" onChange={this.onFileChange}></input>
                                        </Segment>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card color="teal" centered >
                                            <Card.Content>
                                                <Image
                                                    size='small'
                                                    src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                                />
                                            </Card.Content>
                                            <Card.Content extra>
    
                                                <Button basic color='red' style={{ width: "100%" }}>
                                                    Sil
              </Button>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
    
                                <Button type="submit" color='yellow' style={{ width: "100px" }} >Kaydet</Button>
                            </Container>
                        </div>
    
    
                    </form>
    
                </div>
            )

        
        
       

    }
}
const mapStateToProps = ({ AdminProduct }) => {
    return {
        AdminProduct
    }
};

const mapDispatchToProps = {
    AdminProductAddCheck, AdminCategorytSelectCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateProduct));