import React from "react";
import PropTypes from 'prop-types'

class Commodity extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.commodity.imageUrl} alt={this.props.commodity.name}/>
                <span>{this.props.commodity.name}</span>
                <span>{this.props.commodity.price}元/{this.props.commodity.unit}</span>
            </div>
        );
    }
}

Commodity.propTypes = {
    commodity: PropTypes.object.isRequired
}

export default Commodity
