import React,{Component} from "react";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button, Header, Image, Modal, Container, Grid, Input,TextArea } from 'semantic-ui-react'
import axios from "axios";
import { connect } from 'react-redux';
import { AdminMemberUpdateListCheck,AdminMemberUpdateCheck} from '../redux/Admin_action';

class MemberUpdate extends React.Component{
    constructor(props) {

        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeMailaddress=this.onChangeMailaddress.bind(this);
        this.onChangePhonenumber=this.onChangePhonenumber.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       

        this.state = {
            username:'',
            mailaddress: '',
            phonenumber: ''
        }

    }

    componentDidMount() {
        this.props.AdminMemberUpdateListCheck(this.props.match.params.id)

      
    }



    componentWillReceiveProps(nextState) {
        if (Object.keys(nextState.Admin.UpdateMemberList).length !== 0) {
            let data = nextState.Admin.UpdateMemberList.data
            console.log(data)

            this.setState({
                username: data.username,
                mailaddress: data.mailaddress,
                phonenumber: data.phonenumber,


            })

        }    


    }
    
    onChangeUsername(e){
        this.setState({
            username:e.target.value
            
        });
    }

    onChangeMailaddress(e){
        this.setState({
            mailaddress:e.target.value
        });

    }

    onChangePhonenumber(e){
        this.setState({
            phonenumber:e.target.value
        });

    }
    onSubmit(e){
        e.preventDefault();


        const objAdminUpdate = {

            username: this.state.username,
            mailaddress: this.state.mailaddress,
            phonenumber: this.state.phonenumber


        };
           

         this.props.AdminMemberUpdateCheck(this.props.match.params.id,objAdminUpdate)

       
     }


    render(){
        return(
            <form onSubmit={this.onSubmit} >
            <div>
                
               <Container>
               <Header as='h2' >Üye Düzenle</Header>
              
               <Grid>
                       
                       <Grid.Column width={4}>
                          <p style={{float:"left",fontWeight:"bold"}}>Kullanıcı Adı:</p>
                          <br/>
                          <br/>
                          <br/>
                          
                          <p style={{float:"left",fontWeight:"bold"}}>Mail Adresi:</p>

                          <br/>
                          <br/>
                          <br/>
                          
                          <p style={{float:"left",fontWeight:"bold"}}>Telefon Numarası:</p>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                       
                       </Grid.Column>
                       <Grid.Column width={12}>
                           <Input facus name="username" id="username"style={{float:"left", width:"400px"}}  value={this.state.username} onChange={this.onChangeUsername}></Input>
                           <br/>
                          <br/>
                          <br/>
                          <Input facus name="mailaddress" id="mailaddress" style={{float:"left", width:"400px"}}  value={this.state.mailaddress} onChange={this.onChangeMailaddress}   ></Input>
                          <br/>
                          <br/>
                          <br/>
                          <Input facus name="phonenumber" id="phonenumber" style={{float:"left", width:"400px"}}  value={this.state.phonenumber} onChange={this.onChangePhonenumber}   ></Input>
                         
                          <br/>
                          <br/>
                          <br/>
                          <Link to={"/admin/uyelistele"} className="ui yellow basic button">İptal</Link>
                          <Button type="submit" color='yellow'>Güncelle</Button>

                       </Grid.Column>
                    
                   </Grid>
                   
                  
               
                  


               </Container>
           </div>


            </form>
          
        )
    }
}
const mapStateToProps = ({ Admin }) => {
    return {
        Admin
    }
};

const mapDispatchToProps = {
    AdminMemberUpdateListCheck,AdminMemberUpdateCheck

};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MemberUpdate));