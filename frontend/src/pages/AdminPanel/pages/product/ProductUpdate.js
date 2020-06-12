import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Header, Image, Modal, Container, Grid, Input, TextArea } from 'semantic-ui-react'
import axios from "axios";
import { connect } from 'react-redux';
import {AdminProductUpdateListCheck,AdminProductUpdateCheck} from '../redux/Admin_action';

class ProductUpdate extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeBrandname = this.onChangeBrandname.bind(this);
        this.onChangeCode = this.onChangeCode.bind(this);
        this.onChangeFeature = this.onChangeFeature.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       

        this.state = {
            brandname: '',
            code: '',
            feature: '',
            stock: '',
            price: '',
            productsImg: '',
           

        }

    }

    onFileChange = (e) => {
        this.setState({ productsImg: e.target.files[0] })
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


    componentDidMount() {
        this.props.AdminProductUpdateListCheck(this.props.match.params.id)


    }

    componentWillReceiveProps(nextState) {
        console.log("idimiz:"+this.props.match.params.id)
        if (Object.keys(nextState.AdminProduct.UpdatePruductList).length !== 0) {
            let data = nextState.AdminProduct.UpdatePruductList.data
            console.log(data)

            this.setState({
                brandname:data.brandname,
                code:data.code,
                feature: data.feature,
                stock: data.stock,
                price:data.price,
                productsImg:data.productsImg,


            })
            

        } 
        else if (Object.keys(nextState.AdminProduct.UpdatePruduct).length !== 0){
            this.props.history.push('/admin/urunlistele');

        }



    }

    onSubmit(e) {
        e.preventDefault();


        const objAdminProductUpdate = {

            brandname:this.state.brandname,
            code:this.state.code,
            feature: this.state.feature,
            stock:this.state.stock,
            price:this.state.price,
            productsImg:this.state.productsImg,

        };
           

         this.props.AdminProductUpdateCheck(this.props.match.params.id,objAdminProductUpdate)
       

    }


    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <div>

                    <Container>
                        <Header as='h2' >Ürün Düzenle</Header>

                        <Grid>

                            <Grid.Column width={4}>
                                <p style={{ float: "left", fontWeight: "bold" }}>Marka Adı:</p>
                                <br />
                                <br />
                                <br />

                                <p style={{ float: "left", fontWeight: "bold" }}>Ürün Kodu:</p>

                                <br />
                                <br />
                                <br />

                                <p style={{ float: "left", fontWeight: "bold" }}>Ürün Özellikleri:</p>
                                <br />
                                <br />
                                <br />
                                <p style={{ float: "left", fontWeight: "bold" }}>Stok:</p>

                                <br />
                                <br />
                                <br />
                                <p style={{ float: "left", fontWeight: "bold" }}>Fiyat:</p>

                                <br />
                                <br />
                                <br />
                                <p style={{ float: "left", fontWeight: "bold" }}>Fotograf:</p>

                                <br />
                                <br />
                                <br />
                                <br />
                                <br />
                                <br />

                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Input facus name="brandname" id="brandname" style={{ float: "left", width: "400px" }} value={this.state.brandname} onChange={this.onChangeBrandname}></Input>
                                <br />
                                <br />
                                <br />
                                <Input facus name="code" id="code" style={{ float: "left", width: "400px" }} value={this.state.code} onChange={this.onChangeCode}   ></Input>
                                <br />
                                <br />
                                <br />
                                <Input facus name="feature" id="feature" style={{ float: "left", width: "400px" }} value={this.state.feature} onChange={this.onChangeFeature}   ></Input>

                                <br />
                                <br />
                                <br />
                                <Input facus name="stock" id="stock" style={{ float: "left", width: "400px" }} value={this.state.stock} onChange={this.onChangeStock}   ></Input>

                                <br />
                                <br />
                                <br />
                                <Input facus name="price" id="price" style={{ float: "left", width: "400px" }} value={this.state.price} onChange={this.onChangePrice}   ></Input>

                                <br />
                                <br />
                                <br />
                                <input type="file" onChange={this.onFileChange} style={{float:"left"}}></input>
                                <br />
                                <br />
                                <br />
                                <Link to={"/admin/urunlistele"} className="ui yellow basic button">İptal</Link>
                                <Button type="submit" color='yellow'>Güncelle</Button>

                            </Grid.Column>

                        </Grid>






                    </Container>
                </div>


            </form>

        )
    }
}
const mapStateToProps = ({ AdminProduct }) => {
    return {
        AdminProduct
    }
};

const mapDispatchToProps = {
    AdminProductUpdateListCheck,AdminProductUpdateCheck

};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductUpdate));