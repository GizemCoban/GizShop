import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';


import {MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import HeaderDesing from "./component/HeaderDesing";
import SiderDesing from "./component/SiderDesing";

import ProductsTabMenu from "./pages/product/ProductsTabMenu";

import AdminMember from './pages/member/Member'
import MemberUpdate from './pages/member/MemberUpdate';
import ProductList from './pages/product/ProductList';
import ProductUpdate from "./pages/product/ProductUpdate";
import OrderList from "./pages/orders/OrderList";
import OrderDetail from "./pages/orders/OrderDetail";



const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class AdminApp extends React.Component{
    state = {
        collapsed: false,
        refresh: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    // componentDidMount(){
    //     if(!this.state.refresh){
    //         this.setState({refresh: true})
    //         window.location.reload();
    //     }
    // }
render(){
    if (localStorage.getItem('admin') && localStorage.getItem('admin') !== "undefined" ){
        return(
        
            <div>
            <Router >
                 <Layout>
                     <Header style={{height:"90px"}}>
                    <HeaderDesing/>
 
                     </Header>
                     <Layout>
                         <Sider collapsed={this.state.collapsed}>
                             <SiderDesing/>
                         </Sider>
                         <Layout>
                         <Header style={{ background: '#fff', padding: 0 }}>
                         {this.state.collapsed ?
                             <MenuFoldOutlined onClick={this.toggle} className="trigger"/> :
                             <MenuUnfoldOutlined  onClick={this.toggle} className="trigger"/>
                         }
                         
 
                                 </Header>
                                 <Content
                                     style={{
                                         margin: '24px 16px',
                                         padding: 24,
                                         background: '#fff',
                                         minHeight: 550,
                                     }}
                                 >
                                   
                                     <Route path="/admin/uyelistele" component={AdminMember} />
                                     <Route path="/admin/urunekle" component={ProductsTabMenu} />
                                     <Route path="/admin/uyeduzenle/:id" component={MemberUpdate} />
                                     <Route path="/admin/urunlistele" component={ProductList} />
                                     <Route path="/admin/urunduzenle/:id" component={ProductUpdate} />
                                     <Route path="/admin/siparisler" component={OrderList} />
                                     <Route path="/admin/siparisdetay" component={OrderDetail} />
                                                     
     
     
               </Content>
                         </Layout>
                     </Layout>
 
                 </Layout>
 
 </Router> 
             </div>
     )
    }else {
            return(
                <div>
                   
                    {window.location.href="/" }
                </div>
            )
        }
    
}
    
}export default withRouter(AdminApp);