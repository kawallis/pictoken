import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col, Button, Icon } from 'antd';
import colors from '../static/theme';

export default class Badges extends Component {
  render() {
    return (
      <ScrollableAnchor id="section3">
        <div style={{ backgroundColor: colors.pink, marginTop: '35vh', paddingTop: '8vh', paddingBottom: '8vh', marginBottom: '35vh' }}>
          <Row gutter={16}>
            <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="credit-card" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>0% Commissions</h1>
              <p style={{ color: colors.grey , textAlign: 'center', width: '25vw'}}>No commissions on bookings and listings No commissions on bookings</p>
            </Col>
            <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="lock" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>Verified Security</h1>
              <p style={{ color: colors.grey, textAlign: 'center', width: '25vw' }}>Verified user security through on-chain Know Your Customer (KYC) checks</p>
            </Col>
            <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="shop" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>Lease Work</h1>
              <p style={{ color: colors.grey, textAlign: 'center', width: '25vw' }}>We Are Reinventing No commissions on bookings and listings</p>
            </Col>
          </Row>
        </div>
      </ScrollableAnchor>
    );
  }
}
