import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col, Button, Icon, Card } from 'antd';
import colors from '../static/theme'

const { Meta } = Card;

export default class Team extends Component {
  render() {
    return (
      <ScrollableAnchor id="section4">
        <div style={{ marginTop: '10vh', backgroundColor: colors.white }}>
          <h2 style={{ color: colors.pink, fontSize: '2em', marginLeft: '3vw' }}>TEAM &amp; ADVISORS</h2>
          <h3 style={{ color: colors.yellow, marginLeft: '3vw' }}>Meet the Team Creating the First Decentralized Home Sharing platform</h3>
          <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent:'space-around' }}>
            <Card
              hoverable
              style={{ width: 240, marginLeft: '3vw', marginRight: '3vw', marginTop: '3vh', marginBottom: '3vh' }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
            </Card>
            <Card
              hoverable
              style={{ width: 240, marginLeft: '3vw', marginRight: '3vw', marginTop: '3vh', marginBottom: '3vh' }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
            </Card>
            <Card
              hoverable
              style={{ width: 240, marginLeft: '3vw', marginRight: '3vw', marginTop: '3vh', marginBottom: '3vh' }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
            </Card>
            <Card
              hoverable
              style={{ width: 240, marginLeft: '3vw', marginRight: '3vw', marginTop: '3vh', marginBottom: '3vh' }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
            </Card>
            <Card
              hoverable
              style={{ width: 240, marginLeft: '3vw', marginRight: '3vw', marginTop: '3vh', marginBottom: '3vh' }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
            <Meta
              title="Europe Street beat"
              description="www.instagram.com"
            />
            </Card>
          </div>
        </div>
      </ScrollableAnchor>
    );
  }
}
