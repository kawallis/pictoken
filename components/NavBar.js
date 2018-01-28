import React from 'react';
import { Menu, Icon, Carousel, Anchor, Layout } from 'antd';
import Headroom from 'react-headroom';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import colors from '../static/theme';
import Subscribe from '../components/Subscribe';
import MediaQuery from 'react-responsive';
import { Motion, spring } from 'react-motion';

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            menuToggle: false,
            currentView: 'Home'
        }
    }

    rotateAndShowMenu = () => {
        this.setState({ menuToggle: !this.state.menuToggle });
    }

    renderMobile = () => {

    
            return (
                <Motion style={{x: spring(!this.state.menuToggle ? -100 : 0)}}>
                {
                    ({x}) => { 
                        return (
                <Menu
                    mode="vertical"
                    style={{ position: 'fixed',top: '10vh', zIndex: 10, width: '100vw', backgroundColor: colors.white, border: 'none', height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexDirection: 'column',transform: `translate3d(${x}vw, 0, 0)` }}
                >
                    <Menu.Item key="home" >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={this.rotateAndShowMenu}>
                            <a href='#section0' style={{ color: colors.pink, fontSize: '1.5em' }}>Picto</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="about" >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={this.rotateAndShowMenu}>
                            <a href='#section1' style={{ color: colors.pink, fontSize: '1.5em' }}>About</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="product" >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={this.rotateAndShowMenu}>
                            <a href='#section2' style={{ color: colors.pink, fontSize: '1.5em' }}>Product</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="whitepaper" style={{ color: colors.pink }} >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={this.rotateAndShowMenu}>
                            <a href='#section3' style={{ color: colors.pink, fontSize: '1.5em' }}>White Paper</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="road" onClick={this.rotateAndShowMenu}>
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={this.rotateAndShowMenu}>
                            <a href='#section3' style={{ color: colors.pink, fontSize: '1.5em' }}>Road Map</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="tokens" style={{ color: colors.pink }} >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={this.rotateAndShowMenu}>
                            <a href='#section3' style={{ color: colors.pink, fontSize: '1.5em' }}>Token Distribution</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="team" >
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} onClick={this.rotateAndShowMenu}>
                            <a href='#section4' style={{ color: colors.pink, fontSize: '1.5em' }}>Team</a>
                        </div>
                    </Menu.Item>
                    <Menu.Item key="subscribe">
                        <Subscribe />
                    </Menu.Item>
                </Menu>
                        )}
            } 
          </Motion>
            )
    
    }

    render() {
        let rotation = this.state.menuToggle ? "90deg" : "0deg";
        return (
            <div>
                <MediaQuery query="(min-width: 1224px)">
                    <Headroom>
                        <Menu
                            mode="horizontal"
                            style={{ zIndex: 10, width: '100vw', backgroundColor: colors.white, border: 'none', height: '10vh', display: 'flex', alignItems: 'center' }}
                        >
                            <Menu.Item key="home">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type="home" style={{ color: colors.yellow }} /><a href='#section0' style={{ color: colors.pink }}>Picto</a>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type="idcard" style={{ color: colors.yellow }} /><a href='#section1' style={{ color: colors.pink }}>About</a>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="product">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type="camera" style={{ color: colors.yellow }} /><a href='#section2' style={{ color: colors.pink }}>Product</a>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="whitepaper" style={{ color: colors.pink }}>
                                <Icon type="profile" style={{ color: colors.yellow }} />White Paper
                    </Menu.Item>
                            <Menu.Item key="road">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type="compass" style={{ color: colors.yellow }} /><a href='#section3' style={{ color: colors.pink }}>Road Map</a>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="tokens" style={{ color: colors.pink }}>
                                <Icon type="pie-chart" style={{ color: colors.yellow }} />Token Distribution
                    </Menu.Item>
                            <Menu.Item key="team">
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icon type="team" style={{ color: colors.yellow }} /><a href='#section4' style={{ color: colors.pink }}>Team</a>
                                </div>
                            </Menu.Item>
                            <Menu.Item key="subscribe">
                                <Subscribe />
                            </Menu.Item>
                        </Menu>
                    </Headroom>
                </MediaQuery>
                <MediaQuery query="(max-width: 1224px)">
                    <Headroom>
                        <div style={{ backgroundColor: colors.white,height: '10vh' }}>
                            <Icon type="bars" style={{transform: `rotate(${rotation})`,    transitionDuration: '0.5s', margin: '2vh', fontSize: '5vh', color: colors.yellow,cursor: 'pointer' }}
                                onClick={this.rotateAndShowMenu}
                            />
                            {this.renderMobile()}
                        </div>
                    </Headroom>
                </MediaQuery>
            </div>
        )
    }
}