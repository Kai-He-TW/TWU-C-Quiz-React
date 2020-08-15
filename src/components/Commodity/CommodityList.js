import React from "react";
import Commodity from "./Commodity";
import {get} from '../../commons/FetcUtlils'
import './CommodityList.css'

class CommodityList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commodities: []
        }
    }

    componentDidMount() {
        get('/commodity').then(commodities => {
            this.setState({
                commodities: commodities
            })
        })
    }

    render() {
        return (
            <div className='commodity-list'>
                <div className='commodity-list-cards'>
                    {this.state.commodities.map(commodity => <Commodity key={commodity.name} commodity={commodity}/>)}
                </div>
            </div>
        );
    }
}

export default CommodityList
