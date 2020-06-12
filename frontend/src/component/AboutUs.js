import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Grid, Image, Container, Card, Icon, Segment, Input, Button, Divider } from 'semantic-ui-react';
import AboutUsMenu from './AboutUsMenu';


class AboutUs extends React.Component {
    render() {
        return (
            <div>

                <Container className="containerContent">

                    <Grid celled style={{ height: "400px", width: "%80" }}>

                        <Grid.Column width={3}>
                            <AboutUsMenu />
                        </Grid.Column>


                        <Grid.Column width={13}>
                        <Container textAlign='justified'>
                    <b>Hakkımızda</b>
                    <Divider />
                    <p>
                    1996 Sivas doğumluyum. Ailemle birlikte İstanbul’da yaşamaya devam ediyorum.
                            Yazılıma olan merakım lise yıllarında başlamıştır. İstanbul’da Anadolu liseleri kazandım fakat evime çok uzak olmasından dolayı ailem tarafından meslek lisesini kayıt ettirildim. Ve bu olay aslında benim dönüş noktam oldu çünkü olmak istediğim mesleğe karar vermiştim. 2016 yılında Marmara Üniversitesi Bilgisayar Programcılığından mezun oldum. 2017 yılında dgs ile Fırat Üniversitesi Yazılım Mühendisliği bölümü kazandım.  Şuan son sınıf öğrencisiyim.
      </p>
                    <p>
                    Bilgisayar Programcılığı okurken Mediaclick adında bir şirkette zorunlu stajımı yaptım. Burada stajımı yaparken PHP programlama dilini öğrendim. Stajlarım dışında frelance içerik editörlüğü yaptım. Fırat üniversitesinde yazılım mühendisliğini okurken ise hem yaz stajımı hem de son sınıftaki iş yeri eğitimi adındaki programda uzun dönem stajımı Netaş A.Ş. React.js, Node,js ve MongoDb kullanarak bir e-ticaret sitesi geliştirdim. Şuan bu teknolojiler üzerine çalışıp kendimi geliştirmekteyim.
                    
      </p>
                </Container>
              
                           

                        </Grid.Column>
                        
                    </Grid>

                </Container>






              
            </div>

        )
    }
}
export default withRouter(AboutUs);