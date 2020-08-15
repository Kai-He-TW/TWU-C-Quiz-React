import React from "react";
import {post} from "../../../commons/FetcUtlils";


class CommodityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commodity: {
                name: '',
                price: '',
                unit: '',
                imageUrl: ''
            }
        }

    }

    handlerInput = (event) => {
        let target = event.target;
        let state = this.state;

        if (target.id === 'price' && !/^\d*(\.\d*)?$/g.test(target.value)) {
            return
        }

        state.commodity[target.id] = target.value
        this.setState(state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let commodity = this.state.commodity;
        try {
            post('/commodity', commodity)
                .then(response => {
                    if (!response.ok) {
                        return response.json()
                    }
                })
                .then((result) => {
                    if (!result) {
                        this.setState({
                            commodity: {
                                name: '',
                                price: '',
                                unit: '',
                                imageUrl: ''
                            }
                        });
                    } else {
                        alert("商品名称已存在，请输入新的商品名称")
                    }
                })
        } catch (error) {

        }
    }


    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor='name'>名称</label>
                        <input id='name' type='text' value={this.state.commodity.name} onChange={this.handlerInput}/>
                    </div>

                    <div>
                        <label htmlFor='price'>价格</label>
                        <input id='price' type='text' value={this.state.commodity.price} onChange={this.handlerInput}/>
                    </div>

                    <div>
                        <label htmlFor='unit'>单位</label>
                        <input id='unit' type='text' value={this.state.commodity.unit} onChange={this.handlerInput}/>
                    </div>

                    <div>
                        <label htmlFor='imageUrl'>图片</label>
                        <input id='imageUrl' type='text' value={this.state.commodity.imageUrl}
                               onChange={this.handlerInput}/>
                    </div>

                    <div>
                        <button typeof='submit' onClick={this.handleSubmit}>提交</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommodityForm
