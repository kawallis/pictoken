import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';
const Search = Input.Search;
import colors from '../static/theme'

export default class Subscribe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }
    emitEmpty = () => {
        this.emailInput.focus();
        this.setState({ email: '' });
    }
    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    render() {
        const { userName } = this.state;
        const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
            <div>
                <Input
                    placeholder="Enter your email"
                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)'}} />}
                    suffix={suffix}
                    value={userName}
                    onChange={this.onChangeEmail}
                    ref={node => this.emailInput = node}
                />
                <Button style={{backgroundColor: colors.yellow, color: colors.white}}>Subscribe</Button>
            </div>
        );
    }
}
