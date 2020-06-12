import React, { Component } from "react";
import { Grid, Image, Container,Button,Icon,Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import axios from "axios"
import { List, Avatar, message } from 'antd';
import { connect } from 'react-redux';
import { FavoriteProductsListCheck,ProductsAddBasketCheck,ProductsDeleteFavoriteCheck} from './Redux/Product_action';



class Favori extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            subcategory: "",
            favorites: [],
            value: 0
        };

    }
    componentDidMount() {
        if(this.state.favorites.length===0 || this.state.favorites === undefined){
            // axios.get('http://localhost:4000/urunler/favorite/'+this.props.match.params.id).then(res => {
            //     this.setState({ favorites: res.data })
            // })
            this.props.FavoriteProductsListCheck(this.props.match.params.id);
        }
    }

  

    onFavorite(_id) {
        const userId = localStorage.getItem('_id')
        const fav = {favorites: _id}
        console.log("sdfsd", _id)
        if({favorites:_id}){
            this.props.ProductsDeleteFavoriteCheck(userId,{data:{favorites: _id}});
            // axios.delete('http://localhost:4000/people/favorite/delete/'+userId, {data:{favorites: _id}}).then(res=>{
            //     console.log(res)
            //     window.location.reload()

            // }).catch(err=>{
            //     console.log(err)
            // });

        }
        else{
            console.log("hatalı")
            
        }
       
    }

   

    
    handleChange = (e, { value }) => this.setState({ value })
    Basket(_id) {
        console.log(_id)
        const userId=localStorage.getItem('_id')
        const addBasket = {
           
            user_id: userId,
            products_id:_id,
            stock:1
            
        }
        // axios.post('http://localhost:4000/basket/addbasket/'+userId,addBasket).then(res=>{
        //     console.log(res)
        //     message.success('Sepete Ekleme Başarılı',2);

                  
        // }).catch(err=>{
        //     console.log(err);
        this.props.ProductsAddBasketCheck(userId,addBasket)
        // });

    }


    componentWillReceiveProps(nextState){
        if (Object.keys(nextState.Products.favoriteList).length !== 0) {
          
            this.setState({
             favorites:nextState.Products.favoriteList.data

            })
        }
        else if(Object.keys(nextState.Products.basketAdd).length !== 0){
            message.success('Sepete Ekleme Başarılı',2);

        }
        else if(nextState.Products.favoriteDelete){
            window.location.reload();


        }


    }
    render() {
       const {favorites} = this.state
       console.log("selam",this.state.favorites)
        if (localStorage.getItem('username')) {
            return (
                <div>
                   
                    <Container style={{marginBottom:"2%"}}>
                        <Card.Group >
                            {favorites && favorites.map((urun) => {
                                return (
                                    <Card>
                                        <img style={{ height: "350px" }} src={urun.productsImg == " " ? process.env.PUBLIC_URL+"/gorselyok.jpg" : urun.productsImg}  wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header style={{ float: "left" }}> Marka: {urun.brandname}
                                            </Card.Header>
                                            <Card.Description  style={{ float: "left" }}>
                                                <span className='date'> Ürün Kodu:{urun.code}</span>
                                            </Card.Description>
                                            <Card.Description style={{ float: "left", fontWeight: "bold" }}>
                                            {urun.price}    TL
      </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button animated inverted color='yellow' style={{ height: "40px" }} onClick={() => {this.onFavorite(urun._id)}}>
                                                    <Button.Content visible id="product_button" style={{ color: "#1b1c1d" }} 
                                                    >Favorilerden Çıkar</Button.Content>
                                                    <Button.Content hidden>
                                                        <Icon name='like' size="large" />
                                                    </Button.Content>
                                                </Button>
                                                <Button animated inverted color='yellow'>
                                                    <Button.Content visible style={{ color: "#1b1c1d" }}>Sepete Ekle</Button.Content>
                                                    <Button.Content hidden onClick={() => { this.Basket(urun._id) }}>
                                                        <Icon name='shop' size="large" />
                                                    </Button.Content>
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>

                                )

                            }

                            )}



                        </Card.Group>

                    </Container>

                 

                </div>
            )


        }
        else {
            return (
                <div>
                    {this.props.history.push('/login')}
                </div>
            )
        }

    }

}
const mapStateToProps = ({ Products }) => {
    return {
        Products
    }
};

const mapDispatchToProps = {
    FavoriteProductsListCheck,ProductsAddBasketCheck,ProductsDeleteFavoriteCheck

};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Favori));