import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col, Button, Icon } from 'antd';
import colors from '../static/theme';
import MediaQuery from 'react-responsive';

export default class SecondAbout extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-width: 1224px)">
          <ScrollableAnchor id="section2">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '15vh', marginBottom: '15vh', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 80px rgba(0, 0, 0, 0.1) inset', backgroundColor: colors.yellow, padding: '2vh' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '45vw' }}>
                <h1 style={{ color: colors.white }}>About PictoToken</h1>
                <h2 style={{ color: colors.pink, fontSize: '3em' }}>We Are Reinventing How Photographers Share Their Memories</h2>
                <p style={{ color: colors.white }}> A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere</p>
                <Button type="primary" style={{ width: '15vw', backgroundColor: colors.pink, borderColor: colors.pink }}>
                  See How <Icon type="right" />
                </Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '50vw' }}>
                <img
                  src="/static/images/memory.jpg"
                  style={{
                    height: '80vh',
                  }}
                />
              </div>
            </div>
          </ScrollableAnchor>
        </MediaQuery>


        <MediaQuery query="(max-width: 1224px)">
          <ScrollableAnchor id="section2">
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', marginTop: '15vh', marginBottom: '15vh', boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 80px rgba(0, 0, 0, 0.1) inset', backgroundColor: colors.yellow, padding: '2vh' }}>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '80vw', marginTop: '10vh' }}>
                <h1 style={{ color: colors.white, }}>About PictoToken</h1>
                <h2 style={{ color: colors.pink,  fontSize: '2em' }}>We Are Reinventing How Photographers Share Their Memories</h2>
                <p style={{ color: colors.white, fontSize:' 1.2em',lineHeight: 2.1 }}> A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere</p>
                <Button type="primary" style={{ width: '40vw', height: '6vh', backgroundColor: colors.pink, borderColor: colors.pink }}>
                  See How <Icon type="right" />
                </Button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', width: '98vw' }}>
                <img
                  src="/static/images/memory.jpg"
                  style={{
                    height: '80vh',
                  }}
                />
              </div>
            </div>
          </ScrollableAnchor>
        </MediaQuery>
      </div>
    );
  }
}
