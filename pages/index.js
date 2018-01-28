import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Menu, Icon, Carousel, Anchor, Layout } from 'antd';
import { v1 } from 'uuid';
import Root from '../components/Root';
import Head from '../components/Head';
import About from '../components/About';
import Badges from '../components/Badges';
import Team from '../components/Team';
import SecondAbout from '../components/SecondAbout';
import { Parallax, Background } from 'react-parallax';
import Headroom from 'react-headroom';
import NavBar from '../components/NavBar';

import colors from '../static/theme';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const { Header, Content, Footer } = Layout;

import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const styles = {
  bounce: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
}

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
        <Head />
        <NavBar />
        <Parallax style={{ boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 80px rgba(0, 0, 0, 0.1) inset', backgroundColor: colors.pink ,borderTopLeftRadius: '50px', borderTopRightRadius: '50px'}}>
          <ScrollableAnchor id="section0">
            <div style={{ zIndex: 2, height: '100vh', width: '100vw', display: 'flex',justifyContent: 'center', alignItems:'center', flexDirection: 'column' }}>
              <h1 style={{...styles.bounce,color: colors.yellow, fontSize: '4em',fontFamily: 'Cabin' }}>PictoToken</h1>
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
