import React from "react";
import PropTypes from "prop-types"
import './OrderRecord.css'

class OrderRecord extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.order.name}
                </td>

                <td>
                    {this.props.order.price}
                </td>

                <td>
                    {this.props.order.size}
                </td>

                <td>
                    {this.props.order.unit}
                </td>
                <td>
                    <button className='order-record-but'>删 除</button>
                </td>
            </tr>
        );
    }
}

OrderRecord.propTypes = {
    order: PropTypes.object.isRequired
}

export default OrderRecord
