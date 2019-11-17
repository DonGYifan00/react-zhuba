import React, { Component } from 'react'
import { Carousel,SearchBar, NavBar } from 'antd-mobile';
import '../index.css'

export default class Shangcheng extends Component {
    state = {
        
        imgHeight: 176,
        arr:[
            '桌','床','椅','几','柜','书架','沙发','家居饰品','户外家居','全部分类'
        ],

        
      }
      componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
          });
        }, 100);
      }
    render() {
        return (
            <div>
                <NavBar
                        style={{backgroundColor:"#3fcccb",color:'white'}}
                        >商 城</NavBar>
                <Carousel
                    style={{position:'relative'}}
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2,3,4].map(val => (
                
                        <img
                            src={require(`../images/shop1.png`)}
                            alt=""
                            style={{ width: '100%', height:'54.96vw',verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />

                    ))}
                </Carousel> 
                <div style={{position:'relative',bottom:'55vw',backgroundColor:'rgba(0,0,0,0.5)',width:'100%',height:'13vw'}} >
                    
                    <NavBar style={{backgroundColor:'rgba(0,0,0,0.5)',width:'100%',height:'13vw'}} icon={<i style={{position:'relative'}} class='iconfont icon-category'></i>}>
                        <SearchBar style={{backgroundColor:'rgba(0,0,0,0.5)',width:'80vw',marginLeft:'5vw'}} placeholder="输入关键字搜索" maxLength={8} />
                    </NavBar>
                </div>
                <div style={{position:'relative',bottom:'13vw',width:'100%',height:'43vw',backgroundColor:'#fff'}}>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map(val =>(
                            <li style={{height:'18vw',width:'18vw',float:'left',textAlign:'center'}}>
                                < img style={{width:'13vw',float:'left',marginLeft:'4vw',marginTop:'2vw'}} src={require(`../images/1.png`)}/>
                                <span style={{float:'left',width:'25vw',height:'3vw',fontSize:'1vw',marginLeft:'-2vw',marginTop:'1vw'}}>{this.state.arr[val-1]}</span>
                            </li>
                            
                        ))
                    }
                </div>
                <img src={require('../images/bottom.png')} alt="" className="shang"/>

                
            </div>
        )
    }
}