import PropTypes from 'prop-types';
import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";

import {
    Button,
    Container,
    Icon,
    Menu,
    Responsive,
    Segment,
    Sidebar
  } from "semantic-ui-react";

type ContenedorMobileProps = {
};

class ContenedorMobile extends Component<ContenedorMobileProps, any> {
    static propTypes = {
        children: PropTypes.node
    };
    state = {sidebarOpened: false};

    handlePusherClick = () => {
      const { sidebarOpened } = this.state;
  
      if (sidebarOpened) this.setState({ sidebarOpened: false });
    };

    handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

    public render() {
        const { children } = this.props;
        const { sidebarOpened } = this.state;
    
        return (
          <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
            <Sidebar.Pushable>
              <Sidebar
                as={Menu}
                animation='overlay'
                icon="labeled"
                inverted
                vertical
                visible={sidebarOpened}
                width='thin'
              >
                <Menu.Item as="a" active> HOME </Menu.Item>
                <Menu.Item as="a">POLITÍCA</Menu.Item>
                <Menu.Item as="a">INTERNACIONAL</Menu.Item>
                <Menu.Item as="a">TECNOLOGÍA</Menu.Item>
                <Menu.Item as="a">ESPECTÁCULOS</Menu.Item>
                <Menu.Item as="a">DEPORTES</Menu.Item>
                <Menu.Item as="a">Log in</Menu.Item>
                <Menu.Item as="a">Sign Up</Menu.Item>
              </Sidebar>
    
              <Sidebar.Pusher
                dimmed={sidebarOpened}
                onClick={this.handlePusherClick}
                style={{ minHeight: "100vh" }}
              >
                <Segment
                  inverted
                  textAlign="center"
                  style={{ minHeight: 350, padding: "1em 0em" }}
                  vertical
                >
                  <Container>
                    <Menu inverted pointing secondary size="large">
                      <Menu.Item onClick={this.handleToggle}>
                       <Button Button as="a" color='black'>
                          Menu
                        </Button>
                      </Menu.Item>
                      <Menu.Item position="right">
                        <Button as="a" inverted>
                          Log in
                        </Button>
                        <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                          Sign Up
                        </Button>
                      </Menu.Item>
                    </Menu>
                  </Container>
                </Segment>
    
                {children}
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Responsive>
        );
      }
}

export default ContenedorMobile;
