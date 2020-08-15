import React from "react";
import PropTypes from 'prop-types'
import PlusIcon from './plus-icon.png'
import {post} from "../../commons/FetcUtlils";

class Commodity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSubmitOrder: false
        }
    }

    handlerAddOrder = (event) => {
        event.preventDefault()

        this.setState({
            isSubmitOrder: true
        })

        post("/order", {
            name: this.props.commodity.name,
            price: this.props.commodity.price,
            unit: this.props.commodity.unit,
            size: 1
        }).then(response => {
            if (response.ok) {
                this.setState({
                    isSubmitOrder: false
                })
            } else {
                return response.json()
            }
        }).then(result => {
            if (result && result.code !== 1) {
                alert(result.message)
            }
        })
    }

    render() {
        return (
            <div>
                <img src={this.props.commodity.imageUrl} alt={this.props.commodity.name}/>
                <span>{this.props.commodity.name}</span>
                <span>{this.props.commodity.price}元/{this.props.commodity.unit}</span>
                <button onClick={this.handlerAddOrder}><img src={PlusIcon} alt='+'/></button>
            </div>
        );
    }
}

Commodity.propTypes = {
    commodity: PropTypes.object.isRequired
}

export default Commodity
