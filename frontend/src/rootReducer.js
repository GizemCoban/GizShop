import { combineReducers } from 'redux';
import User from './pages/user/reducer';
import Address from './pages/user/Address_reducer';
import Accountinfo from './pages/user/Accountinfo_reducer';
import Admin from './pages/AdminPanel/pages/redux/Admin_reducer';
import AdminProduct from './pages/AdminPanel/pages/redux/AdminProduct_reducer';
import Products from './pages/product/Redux/Product_reducer';

export default combineReducers({
    User, Address, Accountinfo, Admin, AdminProduct, Products
});