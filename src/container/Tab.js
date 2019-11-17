import React from 'react';
import { TabBar } from 'antd-mobile';
import Shouye from './Shouye';
import Linggan from './Linggan';
import Shangcheng from './Shangcheng';

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Tab',
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494" 
          tintColor="#33A3F4"
          barTintColor="white" 
        >
          
          <TabBar.Item style={{color:'#3fcccb'}}          
            title="首页"
            key="Home"
            icon={
              <i class='iconfont icon-shouye'
              style={{
                width: '20px',
                height: '20px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  20px 20px no-repeat' }}
              />
            }
            selectedIcon={<div className='iconfont icon-shouye' 
              style={{
                width: '20px',
                height: '20px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  20px 20px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'Tab'}
            onPress={() => {
              this.setState({
                selectedTab: 'Tab',              
              });
            }}
          >
            <Shouye/>
          </TabBar.Item>



          <TabBar.Item
            title="灵感"         
            key="Linggan"
            icon={
              <i class='iconfont icon-shouye'
              style={{
                width: '20px',
                height: '20px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  20px 20px no-repeat' }}
              />
            }
            selectedIcon={<div className='iconfont icon-shouye' 
              style={{
                width: '20px',
                height: '20px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  20px 20px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'LTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'LTab',
              });
            }}
          >
            <Linggan/>
          </TabBar.Item>



          <TabBar.Item
            title="商城"
            key="Shangcheng"
            icon={
              <i class='iconfont icon-shouye'
              style={{
                width: '20px',
                height: '20px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  20px 20px no-repeat' }}
              />
            }
            selectedIcon={<div className='iconfont icon-shouye' 
              style={{
                width: '20px',
                height: '20px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  20px 20px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'STab'}
            onPress={() => {
              this.setState({
                selectedTab: 'STab',
              });
            }}
          >
            <Shangcheng/>
          </TabBar.Item>

          <TabBar.Item
            title="我的"
            key="wode"
            icon={
              <i class='iconfont icon-shouye'
              style={{
                width: '20px',
                height: '20px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  20px 20px no-repeat' }}
              />
            }
            selectedIcon={<div className='iconfont icon-shouye' 
              style={{
                width: '20px',
                height: '20px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg) center center /  20px 20px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === 'WTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'WTab',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}