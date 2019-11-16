import React, {Component} from 'react';
import { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';import './PenelitianPkM.css';
import classnames from 'classnames';

class PenelitianPkM extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeTab: '1',
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render(){
    return (

      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >T 8.f.1 Publikasi Ilmiah
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >T 8.f.2 Karya Ilmiah
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >T 8.f.3 Produk/Jasa
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >T 8.f.4 Luaran Penelitian/PkM
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            {/* <Tabel3b1 /> */}
          </TabPane>
          <TabPane tabId="2">
            {/* <Tabel3b2 /> */}
          </TabPane>
          <TabPane tabId="3">
            {/* <Tabel3b3 /> */}
          </TabPane>
          <TabPane tabId="4">
            {/* <Tabel3b4 /> */}
          </TabPane>
          <TabPane tabId="6">
            {/* <Tabel3b6 /> */}
          </TabPane>
          <TabPane tabId="5">
            {/* <Tabel3b5 /> */}
          </TabPane>
          <TabPane tabId="7">
            {/* <Tabel3b7 /> */}
          </TabPane>
        </TabContent>
      </div>
    )
  }
}
PenelitianPkM.propTypes = {
}

export default PenelitianPkM;