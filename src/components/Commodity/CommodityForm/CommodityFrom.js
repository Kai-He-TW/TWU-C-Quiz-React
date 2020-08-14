import React from "react";

class CommodityForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor='name'>名称</label>
                        <input id='name' type='text'/>
                    </div>

                    <div>
                        <label htmlFor='price'>价格</label>
                        <input id='price' type='text'/>
                    </div>

                    <div>
                        <label htmlFor='unit'>单位</label>
                        <input id='unit' type='text'/>
                    </div>

                    <div>
                        <label htmlFor='image'>图片</label>
                        <input id='image' type='text'/>
                    </div>

                    <div>
                        <button typeof='submit'>提交</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default CommodityForm
