import React, { Component } from 'react';
import './App.css';

import { fadeOut } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import { Row, Col, Icon } from 'antd';

import HeaderAnimation from './Particles';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loaded: false,
      header: {
        welcome: "Welcome",
        introduce: "I am Romnel Bunoan",
        title: "Full Stack Developer"
      }
    };
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({ loading: false });
    }, 1500);

    setTimeout(()=>{
      this.setState({ loaded: true });
    }, 2000);

  }

  render() {
    const { loading, loaded, header } = this.state;

    let stylesLoader = {};
    if (!loading) {
      stylesLoader = {
        fadeOut: {
          animation: 'x .5s',
          animationName: Radium.keyframes(fadeOut, 'fadeOut'),
        },
      }
    }

    return (
      <div>
          {
            (!loaded) ?
              <StyleRoot>
                <div className="preloader" style={stylesLoader.fadeOut}>
                  <div className="loader"></div>
                </div>
              </StyleRoot>
              :
              ""
          }          
          
          <header className="header">
            <div className="animation">
              <HeaderAnimation />
            </div>
            
            <Row className="v-middle">
              <Col span={24}>
                <h1>
                  <span>{header.welcome}</span><br />
                  {header.introduce}
                </h1>
                <label>{header.title}</label>
                <div className="social">
                  <a href="https://www.facebook.com/romnel.dee" target="_blank"><div><Icon type="facebook" style={{ fontSize: 16, color: '#ffffff' }} /></div></a>
                  <a href="https://twitter.com/RomnelBunoan?lang=en" target="_blank"><div><Icon type="twitter" style={{ fontSize: 16, color: '#ffffff' }} /></div></a>
                  <a href="https://www.linkedin.com/in/romnel-bunoan-610138108/" target="_blank"><div><Icon type="linkedin" style={{ fontSize: 16, color: '#ffffff' }} /></div></a>
                </div>
              </Col>
            </Row>
          </header>   
      </div>
    );
  }
}

export default Header;
