import React from "react";
import OrderRecord from "./OrderRecord";
import {get} from "../../commons/FetcUtlils";

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
            <div>
                {this.state.orders.map(order => <OrderRecord key={order.name} order={order}/>)}
            </div>
        );
    }
}

export default Orders
