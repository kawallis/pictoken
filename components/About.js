import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col, Button, Icon } from 'antd';
import colors from '../static/theme';

export default class About extends Component {
  render() {
    return (
      <ScrollableAnchor id="section1">
          <div style={{display:'flex', flexDirection: 'row',flexWrap: 'wrap',justifyContent: 'center', marginTop: '15vh', marginBottom: '15vh', padding: '2vh' }}>
              <div style={{padding: '2vh', display: 'flex', justifyContent: 'center' }}>
                <img
                  src="/static/images/girlSmile.jpg"
                  style={{
                    height: '80vh',
                  }}
                />
              </div>
    
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h1 style={{ color: colors.yellow }}>About PictoToken</h1>
                <h2 style={{ color: colors.black , fontSize: '3em' }}>We Are Reinventing How Photographers Share Their Memories</h2>
                <p style={{color: colors.grey}}>A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere A decenteralized platform for images thats super cool and promises to do amazing things for everyone, and everywhere</p>
                <Button
                  type="primary"
                  style={{width: '15vw', backgroundColor: colors.yellow, borderColor: colors.yellow}}
                >
                  See How <Icon type="right" />
                </Button>
              </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
