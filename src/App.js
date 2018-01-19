import React from 'react'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import ScrollableAnchor from 'react-scrollable-anchor'
import About from './About';
import Badges from './Badges';
import Team from './Team';
import SecondAbout from './SecondAbout';

import { Menu, Icon, Carousel } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


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
        >
          <Menu.Item key="home">
            <Icon type="home" />Picto
          </Menu.Item>
          <Menu.Item key="about">
            <Icon type="idcard" />About
          </Menu.Item>
          <Menu.Item key="product">
            <Icon type="camera" />Product
          </Menu.Item>
          <Menu.Item key="whitepaper">
            <Icon type="profile" />White Paper
          </Menu.Item>
          <Menu.Item key="road">
            <Icon type="compass" />Road Map
          </Menu.Item>
          <Menu.Item key="tokens">
            <Icon type="pie-chart" />Token Distribution
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />Team
          </Menu.Item>
        </Menu>
        <div style={{zIndex: 20, position: 'absolute', left: 0, right: 0, textAlign: 'center', top: '30vh'}}>
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
        <About />
        <SecondAbout />
        <Badges />
        <Team />

      </div>
    );
  }
}
