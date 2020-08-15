import React from "react";
import Commodity from "./Commodity";
import {get} from '../../commons/FetcUtlils'

class CommodityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commodities: []
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
