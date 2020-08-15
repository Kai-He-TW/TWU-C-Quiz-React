import React from "react";
import Commodity from "./Commodity";
import {get} from '../../commons/FetcUtlils'

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
        get('/commodity').then(commodities => {
            console.log(commodities)

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
