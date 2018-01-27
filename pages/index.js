import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Menu, Icon, Carousel, Anchor, Layout } from 'antd';
import { v1 } from 'uuid';
import Root from '../components/Root';
import About from '../components/About';
import Badges from '../components/Badges';
import Team from '../components/Team';
import SecondAbout from '../components/SecondAbout';
import Subscribe from '../components/Subscribe';
import { Parallax, Background } from 'react-parallax';
import Headroom from 'react-headroom';

import colors from '../static/theme';

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

  render() {
    return (
      <Root>
        <link href="https://fonts.googleapis.com/css?family=Cabin|Open+Sans|Oswald|Raleway|Roboto|Source+Sans+Pro" rel="stylesheet" />
        <Headroom style={{
          
        }}>
          <Menu
            mode="horizontal"
            style={{  zIndex: 10, width: '100vw', backgroundColor: colors.white, border: 'none'}}
          >
            <Menu.Item key="home">
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon type="home" style={{color: colors.yellow}}/><a href='#section0' style={{color: colors.pink}}>Picto</a>
              </div>
            </Menu.Item>
            <Menu.Item key="about">
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon type="idcard" style={{color: colors.yellow}} /><a href='#section1' style={{color: colors.pink}}>About</a>
              </div>
            </Menu.Item>
            <Menu.Item key="product">
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon type="camera" style={{color: colors.yellow}} /><a href='#section2' style={{color: colors.pink}}>Product</a>
              </div>
            </Menu.Item>
            <Menu.Item key="whitepaper" style={{color: colors.pink}}>
              <Icon type="profile" style={{color: colors.yellow}} />White Paper
            </Menu.Item>
            <Menu.Item key="road">
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon type="compass" style={{color: colors.yellow}}/><a href='#section3' style={{color: colors.pink}}>Road Map</a>
              </div>
            </Menu.Item>
            <Menu.Item key="tokens" style={{color: colors.pink}}>
              <Icon type="pie-chart" style={{color: colors.yellow}} />Token Distribution
            </Menu.Item>
            <Menu.Item key="team">
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon type="team" style={{color: colors.yellow}}/><a href='#section4' style={{color: colors.pink}}>Team</a>
              </div>
            </Menu.Item>
            <Menu.Item key="subscribe">
              <Subscribe />
            </Menu.Item>
          </Menu>
        </Headroom>
        <Parallax style={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 80px rgba(0, 0, 0, 0.1) inset', backgroundColor: colors.pink ,borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
          <ScrollableAnchor id="section0">
            <div style={{ zIndex: 2, height: '100vh', width: '100vw', display: 'flex',justifyContent: 'center', alignItems:'center', flexDirection: 'column' }}>
              <h1 style={{ color: colors.yellow, fontSize: '4em',fontFamily: 'Cabin' }}>PictoToken</h1>
              <h3 style={{ color: colors.white, width: '50vw', textAlign: 'center', fontFamily: 'Open Sans' }}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur</h3>
              <Icon style={{ color: colors.yellow, fontSize: '4em',position: 'absolute', bottom: 40}} type="down-circle-o" />
            </div>
          </ ScrollableAnchor>
        </Parallax>
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
