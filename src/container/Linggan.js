import React, { Component } from 'react'
import { NavBar,Tabs} from 'antd-mobile';

const tabs = [
  { title:'推荐'},
  { title:'冬季'},
  { title:'宜家'},
  { title:'小清新'},
  { title:'小户型'},
  { title:'个性色彩'},
  { title:'小户型'},
]
export default class Linggan extends Component {
    render() {      
          const TabExample = () => (
            <div>
              <Tabs             
              tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
              >

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '529px', backgroundColor: '#fff',position:'relative' }}>
                  <div className="La" style={{  top: "20px",left:"4%"}}></div>
                  <div className="La" style={{  top: "20px",left:"53%" }}></div>
                  <div className="La" style={{  top: "270px",left:"4%"}}></div>
                  <div className="La" style={{  top: "270px",left:"53%"}}></div>
                  <div className="Lb" style={{  top: "210px",left:"5%"}}></div>
                  <div className="Lb" style={{  top: "210px",left:"55%"}}></div>
                  <div className="Lb" style={{  top: "460px",left:"5%"}}></div>
                  <div className="Lb" style={{  top: "460px",left:"55%"}}></div>
                  <p style={{  top: "215px",left:"18%",position: "absolute"}}>橙色律动</p>
                  <p style={{  top: "215px",left:"68%",position: "absolute"}}>儿童房</p>
                  <p style={{  top: "465px",left:"18%",position: "absolute"}}>翻滚吧,地毯君</p>
                  <p style={{  top: "465px",left:"68%",position: "absolute"}}>角落的遐想</p>
                  <div className="Lc" style={{  top: "225px",left:"42%"}}></div>
                  <div className="Lc" style={{  top: "470px",left:"42%"}}></div>
                  <div className="Lc" style={{  top: "225px",left:"91%"}}></div>
                  <div className="Lc" style={{  top: "470px",left:"91%"}}></div>
                </div>
              </Tabs>
            </div>
          );
        return (
            <div>
                <NavBar style={{backgroundColor:"#3fcccb",color:'white'}}>灵 感</NavBar>
                <TabExample/>
            </div>
        )
    }
}
