import React, { Component } from 'react';
import { Button, Header, Image, Modal, Container, Grid, Input, Icon } from 'semantic-ui-react';
import axios from "axios";
import { withRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {  AdminProductDeleteCheck} from '../redux/Admin_action';
import {notification} from "antd"



class Product extends Component {

  constructor(props) {
    super(props);
    this.onClickProductDelete = this.onClickProductDelete.bind(this);

  }
  
  onClickProductDelete() {
    console.log(this.props.obj._id)
    this.props.AdminProductDeleteCheck(this.props.obj._id)
    // axios.delete('http://localhost:4000/urunler/delete/'+this.props.obj._id)

    // .then(res => {console.log(res.data)
    //   this.props.history.push('/admin/urunlistele');  
    //   } ).catch((error) => {
    //     console.log(error)
    //   })

      
  }

  componentWillReceiveProps(nextState){
    console.log(nextState)
  if(nextState.AdminProduct.productDelete){
    //this.props.history.push('/admin/urunlistele'); 
    window.location.href='/admin/urunlistele'
  }
 


}

  render() {
    return (

      <tr>
        <td>
          {this.props.obj.category}
        </td>
        <td>
          {this.props.obj.brandname}
        </td>
        <td>
          {this.props.obj.code}
        </td>
        <td>
          {this.props.obj.feature}
        </td>
        <td>
          {this.props.obj.stock}
        </td>
        <td>
          {this.props.obj.price}
        </td>
        <td>
        <Image
          floated='right'
          size='mini'
          src={this.props.obj.productsImg}
        />
        

        </td>
        
        <td>
                    <Link to={"/admin/urunduzenle/"+ this.props.obj._id} className="btn btn-primary"><Icon name="edit"></Icon></Link>
                </td>
        <td>
          <button className="btn btn-danger" onClick={this.onClickProductDelete} > <Icon name="trash alternate"></Icon></button>
        </td>

      </tr>


    );
  }
}

const mapStateToProps = ({AdminProduct}) => {
	return {
        AdminProduct
	}
};

const mapDispatchToProps = {
  AdminProductDeleteCheck
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));