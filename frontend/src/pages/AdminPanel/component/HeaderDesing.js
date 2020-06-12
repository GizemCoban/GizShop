import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Dropdown, Icon, Modal, ModalActions, Header,Popup } from 'semantic-ui-react'



class HeaderDesing extends React.Component {
    ExitButton = (e) => {
        localStorage.clear();
        //localStorage.removeItem('username');
        this.props.history.push('/');
    
    
      }
    componentWillReceiveProps(){
        if(window.location.pathname.indexOf('/admin') !== 0){
            window.location.reload()
        }
    }
    render() {
        return (
            <div>
                <div style={{float:"right"}}>
            
            <Popup
         trigger={<Icon name='user' color='grey' size='large' />}
         content={
             
          <div >
            <p> {localStorage.getItem('username')}</p>
               
            <Link className="text-link " to="/"  > <Icon name='user' />Anasayfa</Link><br/><br/>
            
       
            <Link  className="text-link " to7="/accountinfo"> <Icon name='question circle' />Yardım</Link><br/><br/>
            <Link className="text-link" onClick={this.ExitButton} > <Icon name='power off' />Çıkış</Link><br/>
      
          
        </div>
    
         }
         on="click"
         position='bottom center'
       />
      <p style={{color:"white"}}>Hesabım</p>
        </div>
            </div>
        )
    }
}
export default withRouter(HeaderDesing);