import React from "react";
import { Container, Grid, Input, Image, Icon, Label, Popup, Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import logo from "./resimler/logo_transparent.png";
import axios from 'axios';
import ChatBox from './ChatBot';

let menus;
class Header extends React.Component {
  state = {
    submenu1:[],
    submenu2:[],
    submenu3:[],
    basketcount:0,
    kadinSteps:[],
    erkekSteps:[],
    cocukSteps:[],
     
  }
  componentDidMount(){
    if(this.state.submenu1.length<1){
      axios.get('http://localhost:4000/categories/submenu/Kadın').then(res=>{
        let data = [];
        for(let i=0; i<res.data.length; i++){
          data.push({value:res.data[i]._id, label:res.data[i].category, trigger:"7"})
        }
        this.setState({ submenu1: res.data, kadinSteps: data})
      })
    }
    if(this.state.submenu2.length<1){
      axios.get('http://localhost:4000/categories/submenu/Erkek').then(res=>{
        let data = [];
        for(let i=0; i<res.data.length; i++){
          data.push({value:res.data[i]._id, label:res.data[i].category, trigger:"7"})
        }
        this.setState({ submenu2: res.data, erkekSteps: data})
      })
    }
    if(this.state.submenu3.length<1){
      axios.get('http://localhost:4000/categories/submenu/Çocuk').then(res=>{
        let data = [];
        for(let i=0; i<res.data.length; i++){
          data.push({value:res.data[i]._id, label:res.data[i].category, trigger:"7"})
        }
        this.setState({ submenu3: res.data, cocukSteps: data})
      })
    }
    if(this.state.basketcount == 0){
      axios.get('http://localhost:4000/basket/basketcount/'+localStorage.getItem("_id")).then(res=>{
        this.setState({ basketcount: res.data})
        localStorage.setItem('basketcount',res.data)
      })
    }
  }
  
  componentWillReceiveProps(){
    if(window.location.pathname.indexOf('/admin') == 0){
      this.props.adminChange(0)

    }
  }
  componentDidUpdate(){
    console.log("render")
  }
  GirisYap() {
    console.log("giris")
    this.props.history.push('/login');
  }

  UyeOl(e) {
    this.props.history.push('/register');
  }
  ExitButton = (e) => {
    localStorage.clear();
    //localStorage.removeItem('username');
    this.props.history.push('/');


  }
  CreateButton() {
    console.log('create Buttoma')

    if (localStorage.getItem('_id')) {
      if (localStorage.getItem('admin') && localStorage.getItem('admin') !== "undefined") {
        return (
          <div>

            <Popup
              trigger={<Icon name='user' color='grey' size='large' />}
              content={

                <div >
                  <p> {localStorage.getItem('username')}</p>

                  <Link className="text-link " to={"/admin"} > <Icon name='user' />Admin Paneli</Link><br /><br />

                  <Link className="text-link " to7="/accountinfo"> <Icon name='question circle' />Yardım</Link><br /><br />
                  <Link className="text-link" onClick={this.ExitButton} > <Icon name='power off' />Çıkış</Link><br />


                </div>

              }
              on="click"
              position='bottom center'
            />
            <p>Hesabım</p>
          </div>


        )

      }
      else {
        return (
          <div>
           
            <Popup
              trigger={<Icon name='user' color='grey' size='large' />}
              content={

                <div >
                  <p> {localStorage.getItem('username')}</p>

                  <Link className="text-link " to={"/kullanicibilgileri/" + localStorage.getItem('_id')} > <Icon name='user' />Kullanıcı Bilgilerim</Link><br /><br />
                  <Link className="text-link " to={'/adresbilgisi/' + localStorage.getItem('_id')}> <Icon name='map marker alternate' /> Adres Bilgilerim</Link> <br /><br />
                  <Link className="text-link " to="/accountinfo"> <Icon name='gift' />Siparişlerim</Link><br /><br />
                  <Link className="text-link " to7="/accountinfo"> <Icon name='question circle' />Yardım</Link><br /><br />
                  <Link className="text-link" onClick={this.ExitButton} > <Icon name='power off' />Çıkış</Link><br />


                </div>

              }
              on="click"
              position='bottom center'
            />
            <p>Hesabım</p>

          </div>
        )
      }
    }

    else {
      return (
        <div>
          <Popup
            trigger={<Icon name='user' color='grey' size='large' />}
            content={
              <div>
                <Link to="/login">
                  <Button color="yellow" style={{ width: "100%" }} >Giriş Yap</Button>
                </Link> <br />
                <br />
                <Button inverted color="yellow" style={{ width: "100%" }} onClick={() => { this.UyeOl() }}>Üye Ol</Button>

              </div>

            }
            on="click"
            position='bottom center'
          />
          <p>Giriş Yap</p>
        </div>
      )

    }
  }
  render() {
    return (
      <div className="Header">
         {this.state.kadinSteps && this.state.erkekSteps && this.state.cocukSteps && 
            <ChatBox kadin={this.state.kadinSteps} erkek={this.state.erkekSteps} cocuk={this.state.cocukSteps} />}
             
        <div className="headerTop">
          <Container>
            <Grid >
              <Grid.Row >
                <Grid.Column width={4} textAlign="center" className="searchBox">
                  <Input icon='search' iconPosition='left' placeholder='Arama..' />
                </Grid.Column >
                <Grid.Column width={6}  >
                  <Link to="/">
                    <Image src={logo} className="logo" style={{ margin: "auto" }} />
                  </Link>
                </Grid.Column>
                <Grid.Column width={6} textAlign="center" id="ButtonGrp">
                  {/* {localStorage.getItem('_id')} */}
                  {
                    this.CreateButton()
                  }
                  {(() => {
                    console.log('if')
                    //   if (localStorage.getItem('_id')){
                    //     return(
                    //       <div>
                    //       <Popup
                    //    trigger={<Icon name='user' color='grey' size='large' />}
                    //    content={
                    //      <div>
                    //        <Link to="/login"> 
                    //          <Button color="yellow" style={{ width: "100%" }} >Giriş Yap</Button>
                    //        </Link> <br />
                    //        <br />
                    //        <Button inverted color="yellow" style={{ width: "100%" }}onClick={() => { this.UyeOl() }}>Üye Ol</Button>

                    //      </div>

                    //    }
                    //    on="click"
                    //    position='bottom center'
                    //  />
                    //   <p>Hesabım</p>
                    //   </div>
                    //     )


                    //   }
                    // else{
                    //   return(
                    //     <div>
                    //     <Popup
                    //       trigger={<Icon name='user' color='grey' size='large' />}
                    //       content={
                    //         <div>
                    //           <Link to="/login"> 
                    //             <Button color="yellow" style={{ width: "100%" }} >Giriş Yap</Button>
                    //           </Link> <br />
                    //           <br />
                    //           <Button inverted color="yellow" style={{ width: "100%" }}onClick={() => { this.UyeOl() }}>Üye Ol</Button>

                    //         </div>

                    //       }
                    //       on="click"
                    //       position='bottom center'
                    //     />
                    //       <p>Giriş Yap</p>
                    //     </div>
                    //   )

                    // }

                  })



                  }

                  <div>
                    
                  <Link to={"/favoriler/"+localStorage.getItem('_id')}>
                  <Icon name='heart' color='grey' size='large' />
                  </Link>  
                    <p>Favorilerim</p>


                  </div>
                  

                  <div>
                    
                    <Link to={"/sepetim/"+localStorage.getItem('_id')}>
                    <Icon.Group size='large'>
                      <Icon name='cart' color="grey" />
                      <Label color='yellow' size="tiny" floating circular>
                        {localStorage.getItem('basketcount')}
                                        </Label>
                    </Icon.Group>
                    </Link>
                  
                    <p>Sepetim</p>

                  </div>




                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>
        <div className="headerBottom">
          <Container textAlign="center">
            <ul className="site-menu ">
              <li className="has-children active">
                <a href="/">ANASAYFA </a>
               
              </li>
              <li class="has-children">
                <a>KADIN <Icon name='angle down' /></a>
                <ul className="dropdown">
                <li><Link to="/urunlerilistele/Kadın">Tüm Ürünler</Link></li>
                  {this.state.submenu1 && this.state.submenu1.map((menu) => {
                    return(<li><Link to={"/urunlerilistele/"+menu._id}>{menu.category}</Link></li>)
                  })}
                </ul>
              </li>
              <li class="has-children">
                <a>ERKEK <Icon name='angle down' /></a>
                <ul className="dropdown">
                <li><Link to="/urunlerilistele/Erkek">Tüm Ürünler</Link></li>
                {this.state.submenu2 && this.state.submenu2.map((menu) => {
                    return(<li><Link to={"/urunlerilistele/"+menu._id}>{menu.category}</Link></li>)
                  })}
                </ul>
              </li>
              <li class="has-children">
                <a>ÇOCUK <Icon name='angle down' /></a>
                <ul className="dropdown">
                <li><Link to="/urunlerilistele/Çocuk">Tüm Ürünler</Link></li>
                {this.state.submenu3 && this.state.submenu3.map((menu) => {
                    return(<li><Link to={"/urunlerilistele/"+menu._id}>{menu.category}</Link></li>)
                  })}
                </ul>
              </li>
              <li><a href="/hakkimizda">HAKKIMIZDA</a></li>
              <li><a href="/iletisim">İLETİŞİM</a></li>
            </ul>
          </Container>
        </div>
      </div>
    )
  }
}
export default withRouter(Header);
