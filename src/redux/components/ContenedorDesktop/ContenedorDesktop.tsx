import PropTypes from 'prop-types';
import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";

type ContenedorDesktopProps = {
};

class ContenedorDesktop extends Component<ContenedorDesktopProps, any> {
    static propTypes = {
        children: PropTypes.node
    };

    state = {fixed: true};
  
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });
  
    public render() {
      const { children } = this.props;
      const { fixed } = this.state;
  
      return (
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 700, padding: "1em 0em" }}
              vertical
            >
              <Menu
                fixed={fixed ? "top" : "bottom" }
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
                  <Container>
                    <Menu.Item as="a" active> HOME </Menu.Item>
                    <Menu.Item as="a">POLITÍCA</Menu.Item>
                    <Menu.Item as="a">INTERNACIONAL</Menu.Item>
                    <Menu.Item as="a">TECNOLOGÍA</Menu.Item>
                    <Menu.Item as="a">ESPECTÁCULOS</Menu.Item>
                    <Menu.Item as="a">DEPORTES</Menu.Item>
                    <Menu.Item position="right">
                    <Button as="a" inverted={!fixed}>
                        Log in
                    </Button>
                    <Button
                        as="a"
                        inverted={!fixed}
                        primary={fixed}
                        style={{ marginLeft: "0.5em" }}
                    >
                        Sign Up
                    </Button>
                    </Menu.Item>
                </Container>
              </Menu>
            </Segment>
          </Visibility>
  
          {children}
        </Responsive>
      );
    }
}

export default ContenedorDesktop;
