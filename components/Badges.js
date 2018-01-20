import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col, Button, Icon } from 'antd';

export default class Badges extends Component {
  render() {
    return (
      <ScrollableAnchor id="section3">
        <div style={{ marginTop: '40vh', marginBottom: '40vh' }}>
          <Row gutter={16}>
            <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Icon style={{ fontSize: '5em' }} type="credit-card" />
              <h1 style={{ color: 'aqua', textAlign: 'center' }}>0% Commissions</h1>
              <p style={{ color: 'black' , textAlign: 'center' }}>No commissions on bookings and listings No commissions on bookings</p>
            </Col>
            <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
              <Icon style={{ fontSize: '5em' }} type="lock" />
              <h1 style={{ color: 'aqua', textAlign: 'center' }}>Verified Security</h1>
              <p style={{ color: 'black', textAlign: 'center' }}>Verified user security through on-chain Know Your Customer (KYC) checks</p>
            </Col>
            <Col span={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
              <Icon style={{ fontSize: '5em' }} type="shop" />
              <h1 style={{ color: 'aqua', textAlign: 'center' }}>Lease Work</h1>
              <p style={{ color: 'black', textAlign: 'center' }}>We Are Reinventing No commissions on bookings and listings</p>
            </Col>
          </Row>
        </div>
      </ScrollableAnchor>
    );
  }
}
