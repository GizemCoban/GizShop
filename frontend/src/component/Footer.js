import React from 'react'
import {Divider, Grid,Header,Image, List, Segment} from 'semantic-ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import master from "./resimler/master.jpg";
import visa from "./resimler/visa.jpg";
import maximum from "./resimler/maximum.png";
class FixedMenuLayout extends React.Component{
    render(){
        return(
            <Segment inverted vertical style={{padding: '2em 0em',width:"100%"}}>
                <Grid divided inverted stackable >
                  <Grid.Column width={3}  >
                    <Header inverted as='h4' content='KURUMSAL' />
                    <List link inverted>
                      <Link to='/hakkimizda' className="footertext-link">Hakkımızda</Link><br/>
                      <Link to='/vizyonumuz' className="footertext-link">Vizyonumuz</Link><br/>
                      <Link to='/misyonumuz' className="footertext-link">Misyonumuz</Link>
                      
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='HIZLI ERİŞİM' />
                    <List link inverted>
                    <List.Item ><a href="/" > <p className="footertext-link" >Anasayfa</p></a> </List.Item>
                    <List.Item ><a href="/urunlerilistele/Kadın" > <p className="footertext-link" >Kadın</p></a> </List.Item>
                    <List.Item ><a href="/urunlerilistele/Erkek" > <p className="footertext-link" >Erkek</p></a> </List.Item>
                    <List.Item ><a href="/urunlerilistele/Çocuk" > <p className="footertext-link" >Çocuk</p></a> </List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='SOSYAL MEDYA' />
                    <List inverted>
                      <List.Item ><a href="https://www.facebook.com/"><i className="facebook square icon big"></i></a> </List.Item>
                      <List.Item > <a href="https://twitter.com/"><i className="twitter square icon big"></i></a></List.Item>
                      <List.Item ><a href="https://www.linkedin.com/company/c"><i className="linkedin square icon big"></i></a></List.Item>
                      
                      </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header inverted as='h4' content='İletişim Bilgileri' />
                    <p>
                    

                            <p style={{ float: "left", fontWeight: "bold" }}>Adres: </p>
                            <p style={{}}>Namık Kemal Mah, Alemdağ Cad. 8 A, 34762 Ümraniye/İstanbul</p>

                            <p style={{ float: "left", fontWeight: "bold" }}>Telefon:</p>
                            <p style={{}}>0531 365 13 14</p>

                            <p style={{ float: "left", fontWeight: "bold" }}>E-mail:</p>
                            <p style={{}}>gizshop1914@gmail.com</p>
                      
                    </p>
                  </Grid.Column>
                </Grid>
        
                <Divider inverted section />
                <List horizontal inverted divided link size='small'>
                  <List.Item >
                  <Image src={master} className="logo" style={{ margin: "auto",width:"30px",height:"30px" }} />
                    
                  </List.Item>
                  <List.Item >
                  <Image src={visa} className="logo" style={{ margin: "auto",width:"50px",height:"30px" }} />
                    
                  </List.Item>
                  <List.Item >
                  <Image src={maximum} className="logo" style={{ margin: "auto",width:"50px",height:"30px" }} />
                   
                  </List.Item>
                 
                </List>
                <p>Gizem ÇOBAN tarafından Bitirme Projesi İçin Yapılmıştır © Copyright 2020 Her Hakkı Saklıdır.</p>
              
            </Segment>)
    }
}


export default FixedMenuLayout;