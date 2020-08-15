import React from "react";
import {post} from "../../../commons/FetcUtlils";
import './CommodityForm.css'


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
            <div className='commodity-form'>
                <form className='commodity-form-f'>
                    <h2 className='commodity-form-title'>添加商品</h2>
                    <div className='commodity-form-filed'>
                        <label htmlFor='name'><span>*</span>名称</label><br/>
                        <input id='name' type='text' value={this.state.commodity.name} onChange={this.handlerInput}/>
                    </div>

                    <div className='commodity-form-filed'>
                        <label htmlFor='price'><span>*</span>价格</label><br/>
                        <input id='price' type='text' value={this.state.commodity.price} onChange={this.handlerInput}/>
                    </div>

                    <div className='commodity-form-filed'>
                        <label htmlFor='unit'><span>*</span>单位</label><br/>
                        <input id='unit' type='text' value={this.state.commodity.unit} onChange={this.handlerInput}/>
                    </div>

                    <div className='commodity-form-filed'>
                        <label htmlFor='imageUrl'><span>*</span>图片</label><br/>
                        <input id='imageUrl' type='text' value={this.state.commodity.imageUrl}
                               onChange={this.handlerInput}/>
                    </div>

                    <div>
                        <button className='commodity-form-but' typeof='submit' onClick={this.handleSubmit}>提交</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommodityForm
