import React,{Component,Fragment} from 'react';

class Xiaojiejie extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue:'',
            list:['基础按摩','头部按摩']
        }
    }
    inputChange = (e) => {
        console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    };
    //增加列表
    addLIist = () =>{
        this.setState({
            list:[...this.state.list,this.state.inputValue],
            inputValue: ''
        })
    };
    //删除列表项
    deleteItem = (index) =>{
        console.log('打印索引',index);
        let list = this.state.list;
        list.splice(index,1);//删除
        this.setState({
            list:list
        })
    };
    //删除列表项（大坑）
    // deleteItem = (index) =>{
    //     this.state.list.splice(index,1);//不允许直接改变state里面的数据 否则后期优化或者做一些其他会很有很大的影响
    //     this.setState({
    //         list:this.state.list
    //     })
    // };

    render(){
        return (
            <Fragment>
                {/*jsx里面的注释*/}
                {
                    //单行注释{}一定要换行
                }
                <label htmlFor="jspang">增加服务：</label>
                <input id="jspang" value={this.state.inputValue} onChange={this.inputChange}/>
                <button onClick={this.addLIist}>增加服务</button>
                <ul>
                    {
                        this.state.list.map((item,index) =>{
                            return  (
                                <li
                                    key={index+item}
                                    onClick={this.deleteItem}
                                    dangerouslySetInnerHTML={{__html:item}}
                                >
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
export default Xiaojiejie