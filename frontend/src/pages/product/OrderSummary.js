import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import MyOrdersStep from "./MyOrdersStep";
import { Container, Segment, Header, Icon, Button, Card, Image, Grid, Label, Feed } from "semantic-ui-react";
import axios from "axios";
import { connect } from 'react-redux';
import { BasketListCheck, BasketStockUpdate, BasketProductDeleteCheck } from './Redux/Product_action';

class OrderSummary extends React.Component {
    state = {
        count: [],
        basket: [],
        totalPrice: 0,
        products: []
    }

    BackBasket() {
        this.props.history.push('/sepetim/' + localStorage.getItem('_id'));
    }

    componentDidMount() {
        this.props.BasketListCheck(this.props.match.params.id)
        //     axios.get('http://localhost:4001/basket/basketlist/'+this.props.match.params.id).then(res => {
        //       if(this.state.count.length<1){
        //           let count = [];
        //           let total = 0;
        //           for(let j=0; j<res.data.length; j++){
        //             axios.get('http://localhost:4001/basket/basket/'+res.data[j]._id+"/"+localStorage.getItem('_id'),).then(basket => {
        //                 console.log(basket)
        //                 console.log(count)

        //                if(basket.data[0].stock)
        //                     count.push(basket.data[0].stock)
        //                 else
        //                     count.push(1)


        //             })
        //         }
        //         setTimeout(() => {
        //             for(let i = 0; i<res.data.length; i++){
        //                 total += res.data[i].price * count[i]

        //             }
        //             this.setState({ count: count, totalPrice:total})

        //         }, 500)
        //       }

        //       this.setState({ basket: res.data })

        //   }).catch(err=>{
        //       console.log(err.message)
        //   })


    }
    componentWillReceiveProps(nextState) {
        if (Object.keys(nextState.Products.basketList).length !== 0) {
            let data = nextState.Products.basketList.data
            console.log(data)
            let toplam = 0
            for (let i = 0; i < data.length; i++) {
                toplam = toplam + (data[i].stock * data[i].product[0].price);
            }
            this.setState({
                products: data,
                totalPrice: toplam
            })
        } else if (nextState.Products.Stock) {
            this.props.BasketListCheck(this.props.match.params.id)
        }

    }


    FinishBasket() {
        let { products } = this.state
        console.log(this.state);
        let orders = {
            user_id: localStorage.getItem("_id"),
            username: localStorage.getItem("username"),
            address: localStorage.getItem("address"),
            orders: []
        }
        for (let i = 0; i < products.length; i++) {
            orders.orders.push({
                products_id: products[i].products_id,
                products_count: products[i].stock,
                brandname:products[i].product[0].brandname,
                code: products[i].product[0].code,
                total_price: products[i].stock * products[i].product[0].price
            })
        }
        console.log(orders)
        axios.post('http://localhost:4000/basket/addOrders', orders).then(res => {
            console.log(res)
            this.props.history.push('/siparistamamla');
        })
        console.log(orders)
    }



    render() {
        const { products } = this.state
        return (
            <div>
                <MyOrdersStep activeStep="siparisozet" />

                <Container style={{}}>
                    <Card.Group>

                        <Card style={{ width: "100%" }}>
                            <Card.Content>
                                <Grid divided='vertically'>


                                    <Grid.Row columns={2}>

                                        <Grid.Column>
                                            <h1 style={{ textAlign: "left", color: "#fbbd08", fontWeight: "bold" }}> Sipariş Özeti</h1>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Label onClick={() => { this.BackBasket() }} color="yellow" size="large" as='a' icon="shop" content='Sepete Geri Dön'>

                                            </Label>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>

                                <Card.Description style={{ float: "left" }}><strong>Lütfen sipariş bilgilernizi gözden geçirip onaylayın.</strong></Card.Description>
                                <br />
                                <br />
                                <Card.Group>
                                    {products && products.map((urun, i) => {
                                        return (
                                            <Card style={{ width: "100%" }}>

                                                <Card.Content>
                                                    <Grid>
                                                        <Grid.Row>
                                                            <Grid.Column width={2}>
                                                                <img  src={urun.product[0].productsImg == " " ? process.env.PUBLIC_URL+"/gorselyok.jpg" : urun.product[0].productsImg}
                                                                 height="100"/>
                                                                
                                                            </Grid.Column>
                                                            <Grid.Column width={8}>
                                                                <Card.Header>{urun.product[0].brandname} - {urun.product[0].code}</Card.Header>
                                                                <Card.Header>{urun.product[0].feature} </Card.Header>
                                                            </Grid.Column>
                                                            <Grid.Column width={3}>
                                                                <Card.Description >
                                                                    <Label as='a' color='yellow' size="large">
                                                                        {urun.stock} Adet
                                                                </Label>
                                                                </Card.Description>
                                                            </Grid.Column>
                                                            <Grid.Column width={3}>
                                                                <Card.Description >
                                                                    <Label as='a' color='yellow' size="large">
                                                                        {urun.product[0].price} TL
                                                                 </Label>
                                                                </Card.Description>
                                                            </Grid.Column>

                                                        </Grid.Row>
                                                    </Grid>
                                                </Card.Content>
                                            </Card>
                                        )


                                    })}

                                </Card.Group>
                            </Card.Content>
                        </Card>


                        <Card style={{ width: "100%", height: "250px" }}>
                            <Card.Content>

                                <Card.Header style={{ float: "left", color: "#fbbd08", fontWeight: "bold", fontSize: "30px" }}>Teslimat Bilgileri</Card.Header>
                                <br />
                                <Card.Description style={{ float: "left" }}>
                                    {localStorage.getItem('address')}
                                </Card.Description>
                            </Card.Content>

                        </Card>
                    </Card.Group>
                    <br />
                    <Button style={{ float: "right" }} onClick={() => { this.FinishBasket() }} color="yellow">Şiparişi Tamamla</Button>
                    <br />
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
    BasketListCheck, BasketStockUpdate, BasketProductDeleteCheck
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderSummary));

