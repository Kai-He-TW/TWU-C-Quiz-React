import React from "react";
import PropTypes from "prop-types"

class OrderRecord extends React.Component {
    render() {
        return (
            <div>
                {this.props.order.name}
                {this.props.order.price}
                {this.props.order.size}
                {this.props.order.unit}
            </div>
        );
    }
}

OrderRecord.propTypes = {
    order: PropTypes.object.isRequired
}

export default OrderRecord
