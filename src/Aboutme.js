import React, { Component } from 'react';
import './App.css';

import { Row, Col, Button } from 'antd';

class Aboutme extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="aboutmeHolder">
        <Row type="flex" justify="center">
          <Col xl={12} lg={20} md={20} sm={20} xs={20}>
            <Row>
              <Col xl={10} lg={10} md={10} sm={24} xs={24}>
                <img src="/img/profile.jpg" className="profile" width="100%" />
              </Col>
              <Col xl={14} xl={14} md={14} sm={24} xs={24}>
                <div className="details">
                  <h3><span>About</span> Me</h3>
                  <h4>i am a ui/ux designer and a human</h4>
                  <p> 
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>

                  <div className="info">
                    <Row className="i">
                      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <label>Name:</label> Romnel O. Bunoan
                      </Col>
                      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <label>Email:</label> romnel02@yahoo.com
                      </Col>
                    </Row>

                    <Row className="i">
                      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <label>Age:</label> 31
                      </Col>
                      <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                        <label>Location:</label> Singapore
                      </Col>
                    </Row>
                  </div>

                  <Button type="primary" icon="download" size="large">Download Resume</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Aboutme;
