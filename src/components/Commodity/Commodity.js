import React from "react";
import PropTypes from 'prop-types'
import {post} from "../../commons/FetcUtlils";
import './Commodity.css'

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
            <div className='commodity'>
                <div>
                    <img className='commodity-img' src={this.props.commodity.imageUrl} alt={this.props.commodity.name}/>
                </div>
                <div className='commodity-text'>
                    <span className='commodity-text-name'>{this.props.commodity.name}</span><br/>
                    <span
                        className='commodity-text-unit'>{this.props.commodity.price}元/{this.props.commodity.unit}</span>
                </div>
                <div className='commodity-but-container'>
                    <button
                        className={this.state.isSubmitOrder ? 'commodity-but commodity-but-disable' : 'commodity-but'}
                        onClick={this.handlerAddOrder}
                        disabled={this.state.isSubmitOrder}>+
                    </button>
                </div>
            </div>
        );
    }
}

Commodity.propTypes = {
    commodity: PropTypes.object.isRequired
}

export default Commodity
