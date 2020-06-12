import React, { Component } from 'react';
import { Button, Header, Image, Modal, Container, Grid, Input, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from "axios";
import {notification} from "antd"
import {connect} from 'react-redux';
import { AdminOrdersListCheck} from '../redux/Admin_action';

class OrderDetail extends React.Component {
   
    render(){
        
           
      if (localStorage.getItem('admin') && localStorage.getItem('admin') !== "undefined" ){
        console.log(this.props)
        return(
            <div>
                 
            <Container>
            
                <br/> <br/>
            <table  className="table table-striped" style={{marginTop:20}}>
          <thead>
              <tr>
                  <th>Marka Adı</th>
                  <th>Ürün Kodu</th>
                  <th>Ürün Adedi</th>
                  <th>Toplam Fiyat</th>
                  
                
              </tr>
          </thead>
          <tbody>
              {this.props.location.data && this.props.location.data.map((data)=>{
                  return(
                    <tr>
                    <td>
                        {data.brandname}
                    </td>
                    <td>
                        {data.code}
                    </td>
                    <td>
                        {data.products_count}
                    </td>
                    <td>
                        {data.total_price} TL
                    </td>
                   
                   
                   
    
    
    
                </tr>

                  )
              })}
          
          
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
export default OrderDetail;