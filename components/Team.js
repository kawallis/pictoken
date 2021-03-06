import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import { Row, Col, Button, Icon, Card } from 'antd';
import colors from '../static/theme'
import Slider from 'react-slick';
import MediaQuery from 'react-responsive';

const { Meta } = Card;

export default class Team extends Component {

  render() {
    var settings = {
      dots: true,
      infinite: false,
      centerMode: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: false,
    };
    return (
      <div>
        <MediaQuery query="(min-width: 1224px)">
          <ScrollableAnchor id="section4">
            <div style={{ marginTop: '10vh', backgroundColor: colors.white }}>
              <h2 style={{ color: colors.pink, fontSize: '2em', marginLeft: '3vw' }}>TEAM &amp; ADVISORS</h2>
              <h3 style={{ color: colors.yellow, marginLeft: '3vw' }}>Meet the Team Creating the First Decentralized Home Sharing platform</h3>
              <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around' }}>
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
        </MediaQuery>

        <MediaQuery query="(max-width: 1224px)">
          <ScrollableAnchor id="section4">

            <div style={{ marginTop: '15vh', marginBottom: '15vh' }}>
              <div style={{ backgroundColor: colors.white, paddingLeft: '9vw', paddingRight: '10vw' }}>
                <h2 style={{ color: colors.pink, fontSize: '2em', marginLeft: '3vw' }}>TEAM</h2>
                <h3 style={{ color: colors.yellow, marginLeft: '3vw' }}>Meet the Team Creating the First Decentralized Home Sharing platform</h3>
              </div>
              <Slider {...settings}>
                <Card
                  hoverable
                  style={{ width: 240, marginRight: '2vh' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
                <Card
                  hoverable
                  style={{ width: 240, marginRight: '2vh' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
                <Card
                  hoverable
                  style={{ width: 240, marginRight: '2vh' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
                <Card
                  hoverable
                  style={{ width: 240, marginRight: '2vh' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
                <Card
                  hoverable
                  style={{ width: 240, marginRight: '2vh' }}
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Slider>
            </div>
          </ScrollableAnchor>


          <div style={{ marginTop: '15vh', marginBottom: '15vh' }}>
            <div style={{ backgroundColor: colors.white, paddingLeft: '9vw', paddingRight: '10vw'}}>
              <h2 style={{ color: colors.pink, fontSize: '2em', marginLeft: '3vw' }}>Advisors</h2>
              <h3 style={{ color: colors.yellow, marginLeft: '3vw' }}>Meet the Team Creating the First Decentralized Home Sharing platform</h3>
            </div>

            <Slider {...settings}>
              <Card
                hoverable
                style={{ width: 240, marginRight: '2vh' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240, marginRight: '2vh' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240, marginRight: '2vh' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240, marginRight: '2vh' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
              <Card
                hoverable
                style={{ width: 240, marginRight: '2vh' }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
              >
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Slider>
          </div>
        </MediaQuery>
      </div>

    );
  }
}
