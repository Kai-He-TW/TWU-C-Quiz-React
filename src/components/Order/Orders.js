import React from "react";
import OrderRecord from "./OrderRecord";
import {deleteFetch, get} from "../../commons/FetcUtlils";
import './Order.css'
import {Link} from "react-router-dom";

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        get("/order").then(orders => {
            this.setState({
                orders: orders
            })
        })
    }

    handlerDeleteOrder = (index, orderId) => {
        deleteFetch(`/order/${orderId}`).then(response => {
            if (response.ok) {
                let orders = this.state.orders
                delete orders[index]
                this.setState({
                    orders: orders
                })
            } else {
                alert("订单删除失败，请稍后再试")
            }
        }).catch(() => {
            alert("订单删除失败，请稍后再试")
        })
    }

    renderOrders() {
        if (this.state.orders.length === 0) {
            return <h3>暂无订单，返回<Link exact to='/'>商城页面</Link>继续购买</h3>
        } else {
            return <table className='order-table' cellSpacing="0" cellPadding="0">
                <thead>
                <tr className='order-table-tr order-table-header'>
                    <th>名字</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th>单位</th>
                    <th>操作</th>
                </tr>
                </thead>
                <tbody>
                {this.state.orders.map((order, index) => <OrderRecord key={index}
                                                                      order={order}
                                                                      index={index}
                                                                      handlerDeleteOrder={this.handlerDeleteOrder}/>)}
                </tbody>
            </table>
        }
    }

    render() {
        return (
            <div className='order'>
                {this.renderOrders()}

            </div>
        );
    }
}

export default Orders
