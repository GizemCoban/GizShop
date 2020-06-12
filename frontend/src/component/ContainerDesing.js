import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import reklam from "./resimler/react.png"
import reklamkadın from "./resimler/kadın.jpg"
import reklamerkek from "./resimler/erkek.png"

class ContainerDesing extends React.Component {
    render() {
        return (
            <div >

                <Container  style={{display: "inline-grid",marginBottom:"3%"}}>
                    <div className="hovereffect" style={{  height: "400px", marginLeft: "auto", marginRight:"auto" }}  >
                        <Link to='/'><Image src={reklamkadın} className="img-responsive" /></Link>
                        <div class="overlay" style={{width:"100%"}} >
                            <h2>KADIN</h2>
                            <a className="info" style={{position:"absolute",bottom:"50%", left:"50%"}}  href="/urunlerilistele/Kadın">Alışverişe Başla</a>
                        </div>
                    </div>
                    <div className="hovereffect" style={{  height: "400px", marginLeft: "auto", marginRight:"auto" }}  >
                        <Link to='/'><Image src={reklamerkek} className="img-responsive" /></Link>
                        <div class="overlay" style={{width:"100%"}} >
                            <h2>Erkek</h2>
                            <a className="info" style={{position:"absolute",bottom:"50%", left:"50%"}}  href="/urunlerilistele/Erkek">Alışverişe Başla</a>
                        </div>
                    </div>

                </Container>


            </div>
        )
    }
}

export default ContainerDesing;