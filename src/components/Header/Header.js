import React from "react";
import {NavLink} from "react-router-dom";
import HomeIcon from './home.png'
import PlusIcon from './plus.png'
import ShoppingCardIcon from './shopping-card.png'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <NavLink className='header-nav' activeStyle={{backgroundColor: '#168FFD'}} exact to='/'><img
                    className='header-nav-icon' src={HomeIcon} alt='home'/>商城</NavLink>
                <NavLink className='header-nav' activeStyle={{backgroundColor: '#168FFD'}} exact to='/order/'><img
                    className='header-nav-icon' src={ShoppingCardIcon} alt='shopping-card'/>订单</NavLink>
                <NavLink className='header-nav' activeStyle={{backgroundColor: '#168FFD'}} exact to='/commodity/'><img
                    className='header-nav-icon' src={PlusIcon} alt='plus'/>添加商品</NavLink>
            </div>
        );
    }
}

export default Header
