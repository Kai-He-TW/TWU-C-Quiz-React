import React from "react";
import OrderRecord from "./OrderRecord";

class Orders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
                {
                    name: "可乐1",
                    price: 15.6,
                    size: 2,
                    unit: "瓶"
                },
                {
                    name: "可乐2",
                    price: 15.6,
                    size: 2,
                    unit: "瓶"
                },
                {
                    name: "可乐3",
                    price: 15.6,
                    size: 2,
                    unit: "瓶"
                },
                {
                    name: "可乐4",
                    price: 15.6,
                    size: 2,
                    unit: "瓶"
                },
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => <OrderRecord key={order.name} order={order}/>)}
            </div>
        );
    }
}

export default Orders
