import React, { Component } from 'react';
import { Button, Header, Image, Modal, Container, Grid, Input, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";
import {notification} from "antd"
import {connect} from 'react-redux';
import { AdminOrdersListCheck} from '../redux/Admin_action';

class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[]
    
        }
       
      }
 

 
    tabOrders(){
        return this.state.orders.map(function(obj, i){
            let toplamFiyat = 0;
            let toplamAdet = 0;
            for (let j=0; j<obj.orders.length; j++){
                toplamFiyat = toplamFiyat + obj.orders[j].total_price;
                toplamAdet = toplamAdet+ obj.orders[j].products_count;   
            }
            console.log(obj)
                return (
                    <tr>
                    <td>
                        {obj.username}
                    </td>
                    <td>
                        {obj.address}
                    </td>
                    <td>
                        {toplamAdet}
                    </td>
                    <td>
                        {toplamFiyat} TL
                    </td>
                    <td>
                        <Link to={{
                            pathname: "/admin/siparisdetay",
                            data: obj.orders
                        }
                            
                        } > Ürün Detayı</Link>
                    </td>
                    <td>
                        Teslim Edildi
                    </td>
                   
    
    
    
                </tr>
            )
        });
      }

      componentDidMount(){
          this.props.AdminOrdersListCheck();
      }
      componentWillReceiveProps(nextState){
        if(Object.keys(nextState.Admin.OrdersList).length!==0){
            this.setState({orders: nextState.Admin.OrdersList.data})

          }


      }
    render(){
        
           
      if (localStorage.getItem('admin') && localStorage.getItem('admin') !== "undefined" ){
        return(
            <div>
            <Container>
            
                <br/> <br/>
            <table  className="table table-striped" style={{marginTop:20}}>
          <thead>
              <tr>
                  <th>Kullanıcı Adı</th>
                  <th>Adresi</th>
                  <th>Ürün Adedi</th>
                  <th>Toplam Fiyat</th>
                  <th>Ürün Detayı</th>
                  <th>Teslim Edildi</th>
                
              </tr>
          </thead>
          <tbody>
          {this.tabOrders() } 
        </tbody>
      </table>   

            </Container>
           
                
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
const mapStateToProps = ({Admin}) => {
	return {
        Admin
	}
};

const mapDispatchToProps = {
    AdminOrdersListCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderList));