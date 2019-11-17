import React, { Component } from 'react'
import { NavBar,Carousel } from 'antd-mobile';


export default class AppHome extends Component {
    constructor(){
        super();
        this.state={
            data: ['1', '2'],
            imgHeight: 200,
        }
    }
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
          this.setState({
            data: ['1','2'],
          });
        }, 100);
    }
    render() {
        return (
            <div>
                    <NavBar
                        style={{backgroundColor:"#3fcccb",color:'white'}}
                        >住 吧 家 居</NavBar>
                        
                    <Carousel
                        autoplay={true}
                        infinite={true}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            <img
                                src={require(`../images/shouye/shouye${val}.png`)}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top'}}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        ))}
                    </Carousel>
                    <div className="n1">
                        <div className="n2">
                            <div className="n5">
                            </div>
                            <p>热门品牌</p>
                        </div>
                        <div className="n3">
                            <div className="n5">                               
                            </div>
                            <p>私人搭配师</p>
                        </div>
                        <div className="n4">
                            <div className="n5">                               
                            </div>
                            <p>选购指南</p>
                        </div>       
                    </div>
                    <div className="p1">
                        <div className="p2"></div>
                        <p>热 门 推 荐</p>
                    </div>
                    <div className="p3">
                        <div className="p4"></div>
                        <p>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</p>
                    </div>          
            </div>
        )
    }
}