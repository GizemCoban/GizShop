import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import { Container,Input,Icon } from 'semantic-ui-react';
import axios from "axios";
import {notification,Pagination} from "antd"
import Product from "./Product";
import {connect} from 'react-redux';
import {  AdminProductListCheck} from '../redux/Admin_action';




class ProductList extends React.Component{


    constructor(props){
        super(props);
        this.state={urunler:[]};
    }

    state={
        search:'', 
        data:[],
        
    }

   

    componentDidMount(){
      this.props.AdminProductListCheck();
      }


      
      componentWillReceiveProps(nextState){
          console.log(nextState)
        if(Object.keys(nextState.AdminProduct.productList).length!==0){
          this.setState({urunler:nextState.AdminProduct.productList.data})

        }
        // else if(nextState.Admin.MemberError){
        //   notification.open({
        //                message: 'Başarısız',
        //               description: "Üyeler Yüklenemedi",
      
        //             });

        // }


    }
      tabRow(){
        return this.state.urunler.map(function(obj, i){
            return <Product obj={obj} key={i} />;
        });
        /**
         * [{},{}]
         */
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
                          <th>Kategori</th>
                          <th>Marka Adı</th>
                          <th>Ürün Kodu</th>
                          <th>Ürün Özellikleri</th>
                          <th>Stok</th>
                          <th>Fiyat</th>
                          <th>Fotoğraf</th>
                          <th>Düzenle</th>
                          <th>Sil</th>
                      </tr>
                  </thead>
                  <tbody>
                  {this.tabRow() }
               
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
const mapStateToProps = ({AdminProduct}) => {
	return {
        AdminProduct
	}
};

const mapDispatchToProps = {
    AdminProductListCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductList));