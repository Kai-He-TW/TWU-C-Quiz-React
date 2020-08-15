import React from "react";
import OrderRecord from "./OrderRecord";
import {get} from "../../commons/FetcUtlils";
import './Order.css'

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

    render() {
        return (
            <div className='order'>
                <table className='order-table' cellSpacing="0" cellPadding="0">
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
                    {this.state.orders.map((order, index) => <OrderRecord key={index} order={order}/>)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Orders
