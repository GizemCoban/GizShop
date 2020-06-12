import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { ProductsListCheck,ProductsAddBasketCheck,ProductsAddFavoriteCheck,ProductsBigListCheck,ProductsShortListCheck } from './Redux/Product_action';
import axios from 'axios';
import { message } from 'antd';

import { Image, Container, Button, Card, Icon, Segment, Dropdown } from 'semantic-ui-react';
const options = [
    {
        key: 1,
        text: 'Önerilen Sıralama',
        value: 1,

    },
    {
        key: 2,
        text: 'En Düşük Fiyat',
        value: 2,

    },
    {
        key: 3,
        text: 'En Yüksek Fiyat',
        value: 3,

    }

]


const data = [
    {
        title: 'Ant Design Title 1',
    },

];


class Product extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            productlist:[],

        }


    }
    componentDidMount() {
        console.log(this.props.match.params.id)
        this.props.ProductsListCheck(this.props.match.params.id);
    }
    componentDidUpdate(prevProps){
        console.log(this.props.match.params.id, prevProps.match.params.id)
        if(this.props.match.params.id !== prevProps.match.params.id)
            this.props.ProductsListCheck(this.props.match.params.id);
        //this.props.ProductsListCheck(this.props.match.params.id);

    }

    componentWillReceiveProps(nextState) {
        console.log("nextState")
        if (Object.keys(nextState.Products.productList).length !== 0) {
          
            this.setState({
             productlist:nextState.Products.productList.data

            })
        }
        else if(Object.keys(nextState.Products.basketAdd).length !== 0){
            message.success('Sepete Ekleme Başarılı',2);
            localStorage.setItem("basketcount",parseInt(localStorage.getItem("basketcount"))+1)
        }

    }


    Basket(_id) {
        const userId=localStorage.getItem('_id')
        const addBasket = {
           
            user_id: userId,
            products_id:_id,
            stock:1
            
        }
        this.props.ProductsAddBasketCheck(userId,addBasket)
    }
    


    onFavorite(_id) {
        console.log(_id)
        //this.props.history.push('/favorite');
        const userId = localStorage.getItem('_id')

        this.props.ProductsAddFavoriteCheck(userId,{favorites:_id})

      
    }

    handleChange=(e, { value })=>{
        console.log(value)
        if(value == 1){
            this.props.ProductsListCheck(this.props.match.params.id);
        }else if(value == 2){
            this.props.ProductsShortListCheck(this.props.match.params.id);
        }
        else{
            this.props.ProductsBigListCheck(this.props.match.params.id);
        }
        //this.props.ProductsListCheck(this.props.match.params.id);
    }


    render() {
        console.log(this.state.productlist)
        
        return (

            <div>
                <Container style={{ marginBottom: "2%" }} className="containerContent">

                    <Dropdown style={{ float: "right", margin: ' 1em 0em ', padding: '1em 0em' }}
                        onChange={this.handleChange}
                        options={options}
                        //value={value}
                        //placeholder='Seçiniz'
                        selection
                        defaultValue={options[0].value}

                    />
                    <br />  <br /><br /> <br /> <br />
                    <Card.Group>
                    {this.state.productlist && this.state.productlist.map((data,i) => {
                        return(
                            <Card >
                           <img style={{ height: "350px" }} src={data.productsImg == " " ? process.env.PUBLIC_URL+"/gorselyok.jpg" : data.productsImg}  wrapped ui={false} />
                            <Card.Content>
                        <Card.Header style={{ float: "left" }}>{data.brandname}- {data.code}</Card.Header>
                                        
                                        <Card.Description style={{ float: "left", fontWeight: "bold" }}>
                                            {data.price} TL
      </Card.Description>
                                    </Card.Content>
                            <Card.Content extra>
                                <div className='ui two buttons'>
                                    <Button animated inverted color='yellow' style={{ height: "40px" }} >
                                        <Button.Content visible id="product_button" style={{ color: "#1b1c1d" }}>Favorilerim</Button.Content>
                                        <Button.Content hidden  onClick={() => { this.onFavorite(data._id) }} >
                                            <Icon name='like' size="large" />
                                        </Button.Content>
                                    </Button>
                                    <Button animated inverted color='yellow'>
                                        <Button.Content visible style={{ color: "#1b1c1d" }}>Sepete Ekle</Button.Content>
                                        <Button.Content hidden onClick={() => { this.Basket(data._id) }} >
                                            <Icon name='shop' size="large" />
                                        </Button.Content>
                                    </Button>
                                </div>
                            </Card.Content>
                        </Card>

                        )
                    })}

                      
                    </Card.Group>




                </Container>

            </div>
        )
    }
}
const mapStateToProps = ({ Products }) => {
    return {
        Products
    }
};

const mapDispatchToProps = {
    ProductsListCheck,ProductsAddBasketCheck,ProductsAddFavoriteCheck,ProductsBigListCheck,ProductsShortListCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));