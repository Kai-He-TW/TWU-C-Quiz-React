import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <NavLink to='/'>商城</NavLink>
                <NavLink to='/order/'>订单</NavLink>
                <NavLink to='/commodity/'>添加商品</NavLink>
            </div>
        );
    }
}

export default Header
