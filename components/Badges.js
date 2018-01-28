import React, { Component } from 'react'
import ScrollableAnchor from 'react-scrollable-anchor';
import { Icon } from 'antd';
import colors from '../static/theme';
import MediaQuery from 'react-responsive';

export default class Badges extends Component {
  render() {
    return (
      <div>
      <MediaQuery query="(min-width: 1224px)">
        <ScrollableAnchor id="section3">
          <div style={{ backgroundColor: colors.pink, marginTop: '35vh', paddingTop: '8vh', paddingBottom: '8vh', marginBottom: '35vh', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="credit-card" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>0% Commissions</h1>
              <p style={{ color: colors.grey, textAlign: 'center', width: '25vw' }}>No commissions on bookings and listings No commissions on bookings</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="lock" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>Verified Security</h1>
              <p style={{ color: colors.grey, textAlign: 'center', width: '25vw' }}>Verified user security through on-chain Know Your Customer (KYC) checks</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="shop" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>Lease Work</h1>
              <p style={{ color: colors.grey, textAlign: 'center', width: '25vw' }}>We Are Reinventing No commissions on bookings and listings</p>
            </div>
          </div>
        </ScrollableAnchor>
      </MediaQuery>

      <MediaQuery query="(max-width: 1224px)">
        <ScrollableAnchor id="section3">
          <div style={{ backgroundColor: colors.pink, marginTop: '35vh', paddingTop: '8vh', paddingBottom: '8vh', marginBottom: '35vh', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , marginBottom: '5vh', marginTop: '5vh'}}>
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="credit-card" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>0% Commissions</h1>
              <p style={{ color: colors.grey, textAlign: 'center', width: '60vw' }}>No commissions on bookings and listings No commissions on bookings</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '5vh', marginTop: '5vh' }} >
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="lock" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>Verified Security</h1>
              <p style={{ color: colors.grey, textAlign: 'center', width: '60vw' }}>Verified user security through on-chain Know Your Customer (KYC) checks</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '5vh', marginTop: '5vh' }} >
              <Icon style={{ fontSize: '5em', color: colors.yellow }} type="shop" />
              <h1 style={{ color: colors.white, textAlign: 'center' }}>Lease Work</h1>
              <p style={{ color: colors.grey, textAlign: 'center', width: '60vw' }}>We Are Reinventing No commissions on bookings and listings</p>
            </div>
          </div>
        </ScrollableAnchor>
      </MediaQuery>
    </div>
    );
  }
}
