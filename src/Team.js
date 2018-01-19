import React from 'react'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Row, Col, Button, Icon, Card } from 'antd';
import ScrollableAnchor from 'react-scrollable-anchor'

const { Meta } = Card;

export default class Team extends React.Component {

    render() {
        return (
            <ScrollableAnchor id={'section4'}>

            <div style={{marginTop: '10vh'}}>
                <h2 style={{ color: 'black', fontSize: '2em', marginLeft: '3vw' }}> TEAM & ADVISORS </h2>
                <h3 style={{ marginLeft: '3vw'}}>Meet the Team Creating the First Decentralized Home Sharing platform</h3>
                <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent:'space-around'}}>
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