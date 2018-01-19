import React from 'react'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import ScrollableAnchor from 'react-scrollable-anchor'
import About from './About';
import Badges from './Badges';
import Team from './Team';
import SecondAbout from './SecondAbout';

import { Menu, Icon, Carousel, Anchor, Layout } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;



export default class App extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    let images = ['picOne.jpg', 'picTwo.jpg', 'picThree.jpg', 'picFour.jpg'];
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{position:'fixed', zIndex: 10, width: '100vw'}}
        >
          <Menu.Item key="home">
            <div style={{display: 'flex',flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <Icon type="home" /><a href='#section0'>Picto</a>
            </div>
          </Menu.Item>
          <Menu.Item key="about">
          <div style={{display: 'flex',flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <Icon type="idcard" /><a href='#section1'>About</a>
            </div>

          </Menu.Item>
          <Menu.Item key="product">
          <div style={{display: 'flex',flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <Icon type="camera" /><a href='#section2'>Product</a>
            </div>

          </Menu.Item>
          <Menu.Item key="whitepaper">
            <Icon type="profile" />White Paper
          </Menu.Item>
          <Menu.Item key="road">
          <div style={{display: 'flex',flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <Icon type="compass" /><a href='#section3'>Road Map</a>
            </div>

          </Menu.Item>
          <Menu.Item key="tokens">
            <Icon type="pie-chart" />Token Distribution
          </Menu.Item>
          <Menu.Item key="team">
          <div style={{display: 'flex',flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
            <Icon type="team" /><a href='#section4'>Team</a>
            </div>

          </Menu.Item>
        </Menu>
        <ScrollableAnchor id={'section0'}>
        <div>
          <div style={{zIndex: 2, position: 'absolute', left: 0, right: 0, textAlign: 'center', top: '30vh'}}>
              <h1 style={{color: 'white', fontSize: '8em'}}>PictoToken</h1>
              <h3 style={{color: 'white'}}>A decenteralized platform for images</h3>
              <Icon style={{color: 'white', fontSize: '4em', marginTop: '12vh'}} type="down-circle-o" />
          </div>
          <Carousel vertical autoplay={true}>
            {images.map(image => {
              return <img src={require(`./static/${image}`)} style={{
                height: '95vh',
                width: '100vw'
              }} />
            })}
          </Carousel>
          </div>
        </ScrollableAnchor>
        <About />
        <SecondAbout />
        <Badges />
        <Team />
        <Footer style={{ textAlign: 'center' }}>
          Picto Design ©2018 Created by PictoTeam
        </Footer>   
      </div>
    );
  }
}
