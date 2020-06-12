import React from 'react';
import {BrowserRouter,Route,Router,Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Footer from "./component/Footer";
import './App.css'
import Header from "./component/Header";
import Home from "./component/Home";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import ProductsList from "./pages/product/Product";
import MyCard from "./pages/product/MyCard";
import AddressInformation from "./pages/user/AddressInformation";
import AccountInfo from "./pages/user/AccountInfo";
import AddressUpdate from "./pages/user/AddressUpdate";
import MyOrderAddress from './pages/product/MyOrderAddress';
import CreditCart from './pages/product/CreditCard';
import OrderSummary from './pages/product/OrderSummary';
import Ordercompleted from './pages/product/OrderCompleted';

import AdminApp from './pages/AdminPanel/App'
import ChatBox from './component/ChatBot';
import Favori from './pages/product/Favori';
import Contact from "./component/Contact";
import AboutUs from "./component/AboutUs";
import Vision from './component/Vision';
import Mission from './component/Mission';





const history=createBrowserHistory();
//<Login/>
// <Register/>
// <Route exact path="/accountinfo" component={AccountInfo}/>
     
class App extends React.Component {
  state={
    isAdmin: window.location.pathname.indexOf('/admin') === 0 ? true : false
  }
  adminChange = (admin) =>{
    if(admin === 0){
      this.setState({ isAdmin: true})
    }else{
      this.setState({ isAdmin: false})
    }
  }
  render(){
    return (
      <div className="App">
       
        
        <Router history={history}>
        {this.state.isAdmin === false && <> <Header adminChange={this.adminChange} /> </>}
        
      <div id="content">
      
        <Route exact path="/" component={Home} /> 
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/urunlerilistele/:id"component={ProductsList}/>
        <Route exact path="/sepetim/:id" component={MyCard}/>
        <Route exact path="/adresbilgisi/:id" component={AddressInformation}/>
        <Route exact path="/adresguncelle/:id" component={AddressUpdate}/>
        <Route exact path="/kullanicibilgileri/:id" component={AccountInfo}/>
        <Route exact path="/siparisadresim" component={MyOrderAddress}/>
        <Route exact path="/kartbilgilerim" component={CreditCart}/>
        <Route exact path="/siparisozeti/:id" component={OrderSummary}/>
        <Route exact path="/siparistamamla" component={Ordercompleted} />
        <Route exact path="/favoriler/:id" component={Favori}/>
        <Route exact path="/iletisim" component={Contact}/>
        <Route exact path="/hakkimizda" component={AboutUs}/>
        <Route exact path="/vizyonumuz" component={Vision}/>
        <Route exact path="/misyonumuz" component={Mission}/>

  

        <Route path="/admin" component={AdminApp} />

     
      </div>
       {window.location.pathname.indexOf('/admin') !== 0 && <Footer/>}
      
      </Router>

     
      
      </div>
    );
  }
  
  }
  
export default App;
