import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Tabs, Icon } from 'antd';
import {FileOutlined,FileImageOutlined } from '@ant-design/icons';

import CreateProduct from "./CreateProduct";
import ProductsImg from "./ProductsImg";
import ProductCategory from "./ProductCategory";


const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}
class ProductsTabMenu extends React.Component {
    //Girilen ürünün id'sini state tuttuk
    state = {
        productid: null
    }

    getproductid = (id) => {
        this.setState({ productid: id })
    }
    render() {
        return (
            <div>


                <Tabs defaultActiveKey="1" onChange={callback} >
                    <TabPane
                        tab={
                            <span>
                                <FileOutlined />
         Kategori Ekle

         </span>
                        }
                        key="1">
                            <ProductCategory getproductid={this.getproductid} />
                       
                    </TabPane>
                    <TabPane
                        tab={
                            <span>
                                <FileImageOutlined />
                              
              
              Ürün Ekle
            </span>
                        }
                        key="2">
                            <CreateProduct getproductid={this.getproductid} />
                      
                    </TabPane>
                 
                </Tabs>

            </div>
        )
    }
}
export default withRouter(ProductsTabMenu);