import React from "react";
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container, Card, Button, Icon, Segment, Feed, Label } from 'semantic-ui-react'
import axios from "axios"
import { connect } from 'react-redux';
import {BasketListCheck, BasketStockUpdate,BasketProductDeleteCheck} from './Redux/Product_action';

class MyCard extends React.Component {
    state = { 
        count: [],
        baskets:[],
        products:[],
        totalPrice:0

    }

    handleIncrement = (stock,_id) => {
        //this.setState({ count: this.state.count + 1 })
        this.props.BasketStockUpdate( localStorage.getItem('_id'), _id, parseInt(stock)+1)
        localStorage.setItem("basketcount",parseInt(localStorage.getItem("basketcount"))+1)
    }

    handleDecrement = (stock,_id) => {
        console.log(stock)
        if(stock>1){
            this.props.BasketStockUpdate( localStorage.getItem('_id'), _id, parseInt(stock)-1)
            localStorage.setItem("basketcount",parseInt(localStorage.getItem("basketcount"))-1)
        }
            
    }

    componentDidMount(){
        this.props.BasketListCheck(this.props.match.params.id)
        
      
}

componentWillReceiveProps(nextState){
    if (Object.keys(nextState.Products.basketList).length !== 0) {
        let data = nextState.Products.basketList.data
        console.log(data)
        let toplam = 0
        for(let i=0; i<data.length; i++){
           toplam= toplam +(data[i].stock*data[i].product[0].price);
        }
        this.setState({
            products:data,
            totalPrice: toplam
        })
    }else if(nextState.Products.Stock){
        this.props.BasketListCheck(this.props.match.params.id)
    }
    else if(nextState.Products.basketDelete){
        this.props.BasketListCheck(this.props.match.params.id)
    }
}


ProductsDelete(_id,stock){
    this.props.BasketProductDeleteCheck(localStorage.getItem('_id'),{data:{products_id:_id}})
    console.log(_id)
    localStorage.setItem("basketcount",parseInt(localStorage.getItem("basketcount"))-stock)
    
}   

BasketCheck(){
    this.props.history.push('/siparisadresim');
}   


    Shopping(){
        this.props.history.push('/');
    }

    render() {
        let stock;
       
        return (
            <div>
                
                  <Container className="containerContent">
                
                <Grid>                
                    <Grid.Column width={13}>      
                        <Card.Group >
                        {this.state.products && this.state.products.map((data,i) => {
                            return(
                                <Card style={{ width: "100%" }}>
                                   
                                <Card.Content>
                                     <Feed>
                                         <Feed.Event>
                                             <Image
                                                 floated='left'
                                                 size='small'
                                                 src={data.product[0].productsImg == " " ? process.env.PUBLIC_URL+"/gorselyok.jpg" : data.product[0].productsImg}
                                                 style={{ width: "100px", height: "100px" }}

                                             />
                                             <Feed.Content>
                                                 <Feed.Summary>
                            <Card.Header style={{ float: "left" }}>{data.product[0].brandname}</Card.Header>
                                                     <br />
                                                     <Card.Meta style={{ float: "left" }}>{data.product[0].feature} </Card.Meta>
                                                     <br />
                                                 </Feed.Summary>
                                             </Feed.Content>
                                             <Feed.Content  >
                                                 <Feed.Summary>
                                                     <Card.Description >
                                                         <br /><br />
                                                         <Label size="big" color='yellow' tag style={{ justifyContent: "center" }}>
                                                        {data.product[0].price} TL
 </Label>
                                                     </Card.Description>
                                                 </Feed.Summary>
                                             </Feed.Content>
                                             <Feed.Content>
                                                 <Feed.Summary>
                                                     <Card.Description >
                                                         <br /><br />
                                                         
                                                         <Button onClick={() => this.handleDecrement(data.stock,data.product[0]._id)} size="mini"><Icon name='minus' size="small" /></Button>
                                                         <Label size="large" color='yellow'>
                                                           {data.stock}
                                                         </Label>

                                                         <Button onClick={() => this.handleIncrement(data.stock,data.product[0]._id)} size="mini"> <Icon name='plus' size="small" /></Button >
                                                         <Button circular color='white' icon='trash alternate' size="big" style={{ float: "right" }} onClick={() => { this.ProductsDelete(data.product[0]._id, data.stock)}} />          

                                                     </Card.Description>
                                                 </Feed.Summary>

                                             </Feed.Content>

                                         </Feed.Event>
                                     </Feed>
                                 </Card.Content>
                             </Card>    

                            )
                        })}
                                        
                           
                        </Card.Group>
                        <br />  <br />
                <Button style={{marginBottom:"7%",fontWeight:"bold",fontSize:"18px", float:"right"}} inverted  color='yellow' onClick={()=>{this.Shopping()}}>Alışverişe Devam Et</Button> 
                    </Grid.Column>
                    <Grid.Column width={3}>


                        <Label size="big" color='yellow' tag style={{ justifyContent: "center" }} >
                            <h5 style={{color:"white"}}>Toplam Fiyat</h5> {this.state.totalPrice}TL
</Label>
                        <br />  <br />
                        <Button color='yellow'  style={{ width: "100%" }} disabled = {this.state.products.length>0 ? false : true}><p style={{ fontSize: "15px", fontWeight: "bolder" }}  onClick={()=>{this.BasketCheck()}} >Sepeti Onayla <Icon name="angle right" size="large"></Icon> </p></Button>
                    </Grid.Column>

                </Grid>
              
              
            </Container>
            </div>
        )
    }


}

const mapStateToProps = ({ Products}) => {
    return {
        Products
    }
};

const mapDispatchToProps = {
    BasketListCheck, BasketStockUpdate,BasketProductDeleteCheck
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCard));