import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Menu, Icon, Carousel, Anchor, Layout } from 'antd';
import { v1 } from 'uuid';
import Root from '../components/Root';
import About from '../components/About';
import Badges from '../components/Badges';
import Team from '../components/Team';
import SecondAbout from '../components/SecondAbout';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;

export default class IndexPage extends Component {
  static defaultProps = {
    images: [
      {
        _id: v1(),
        src: '/static/images/picOne.jpg',
      },
      {
        _id: v1(),
        src: '/static/images/picTwo.jpg',
      },
      {
        _id: v1(),
        src: '/static/images/picThree.jpg',
      },
      {
        _id: v1(),
        src: '/static/images/picFour.jpg',
      }
    ],
  }

  state = {
    current: 'mail',
  }

  handleClick = ({ key: current }) => {
    this.setState({ current });
  }

  render() {
    return (
      <Root>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{ position:'fixed', zIndex: 10, width: '100vw' }}
        >
          <Menu.Item key="home">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
            <Icon type="home" /><a href='#section0'>Picto</a>
          </div>
          </Menu.Item>
          <Menu.Item key="about">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
            <Icon type="idcard" /><a href='#section1'>About</a>
          </div>
          </Menu.Item>
          <Menu.Item key="product">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
            <Icon type="camera" /><a href='#section2'>Product</a>
          </div>
          </Menu.Item>
          <Menu.Item key="whitepaper">
            <Icon type="profile" />White Paper
          </Menu.Item>
          <Menu.Item key="road">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
            <Icon type="compass" /><a href='#section3'>Road Map</a>
          </div>
          </Menu.Item>
          <Menu.Item key="tokens">
            <Icon type="pie-chart" />Token Distribution
          </Menu.Item>
          <Menu.Item key="team">
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center' }}>
            <Icon type="team" /><a href='#section4'>Team</a>
          </div>
          </Menu.Item>
        </Menu>
        <ScrollableAnchor id="section0">
          <div>
            <div style={{ zIndex: 2, position: 'absolute', left: 0, right: 0, textAlign: 'center', top: '30vh' }}>
              <h1 style={{ color: 'white', fontSize: '8em' }}>PictoToken</h1>
              <h3 style={{ color: 'white' }}>A decenteralized platform for images</h3>
              <Icon style={{ color: 'white', fontSize: '4em', marginTop: '12vh' }} type="down-circle-o" />
            </div>
            <Carousel vertical autoplay={true}>
              {this.props.images.map(image => (
                <img
                  key={image._id}
                  src={image.src}
                  style={{
                    height: '95vh',
                    width: '100vw',
                  }}
                />
              ))}
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
      </Root>
    );
  }
}
