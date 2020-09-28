import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

type ContenedorPrincipalProps = {
  //
};

class ContenedorPrincipal extends Component<ContenedorPrincipalProps, any> {
  state = {fixed: true};
  
  public render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : "left"}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  HOME
                </Menu.Item>
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

export default ContenedorPrincipal;
