import React, {Component} from "react";
import { withRouter } from 'react-router-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import {FolderAddOutlined,UserOutlined,ShoppingOutlined} from '@ant-design/icons';



const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class SiderDesing extends React.Component{
    state = {
        collapsed: false,
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render(){
        return(
            <div>
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                      <SubMenu key="sub1"
                                    title={
                                        <span>
                                            <FolderAddOutlined />
                                            <span>Ürünler</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="3"><Link to="/admin/urunekle">Ürün Ekle</Link> </Menu.Item>
                                    <Menu.Item key="4"><Link to="/admin/urunlistele">Ürünler</Link></Menu.Item>
                      </SubMenu>

                      
                      <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                          <UserOutlined />
                                            <span>Üyeler</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5"><Link to="/admin/uyelistele">Üyeler</Link></Menu.Item>
                                    <Menu.Item key="6">Engellenen Üyeler</Menu.Item>
                                   
                                </SubMenu>
                                <Menu.Item key="7"><Link to="/admin/siparisler"><ShoppingOutlined /><span>Siparişler</span> </Link></Menu.Item>

                  </Menu>

            </div>
        )
    }
}
export default withRouter(SiderDesing);