import React from "react";
import Commodity from "./Commodity";

class CommodityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commodities: [
                {
                    name: "可乐1",
                    price: 12.5,
                    unit: "瓶",
                    image: "not-image"
                },
                {
                    name: "可乐2",
                    price: 12.5,
                    unit: "瓶",
                    image: "not-image"
                },
                {
                    name: "可乐3",
                    price: 12.5,
                    unit: "瓶",
                    image: "not-image"
                },
                {
                    name: "可乐4",
                    price: 12.5,
                    unit: "瓶",
                    image: "not-image"
                }
            ]
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/commodity")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(commodities => {
                this.setState({
                    commodities: commodities
                })
            })
    }

    render() {
        return (
            <div>
                {this.state.commodities.map(commodity => <Commodity key={commodity.name} commodity={commodity}/>)}
            </div>
        );
    }
}

export default CommodityList
