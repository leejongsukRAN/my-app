import React,{Component} from 'react'
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            goods:[
                { title: 'js零基础阶段',price: 19 },
                { title: 'vue基础',price: 29.8 },
                { title: 'react零基础进阶单页面项目实战',price: 29.8 },
            ]
        }
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.goods.map(good => {
                        return (
                            <li key={good.title}>
                                <span>{good.title}</span>
                                <span>{good.price}元</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }

}