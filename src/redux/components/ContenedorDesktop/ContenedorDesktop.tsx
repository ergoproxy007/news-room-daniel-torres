import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import HomeHeading from '../../../views/HomepageHeading/HomeHeading';

type ContenedorDesktopProps = {
};

class ContenedorDesktop extends Component<ContenedorDesktopProps, any> {
    static propTypes = {
        children: PropTypes.node
    };

    state = {fixed: false};
  
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
                fixed={"top"}
                inverted={!fixed}
                pointing={!fixed}
                secondary={!fixed}
                size="large"
              >
                  <Container>
                    <Menu.Item as="a" active={false}> HOME </Menu.Item>
                    <Menu.Item as="a" active={true}>POLITÍCA</Menu.Item>
                    <Menu.Item as="a">INTERNACIONAL</Menu.Item>
                    <Menu.Item as="a">TECNOLOGÍA</Menu.Item>
                    <Menu.Item as="a">ESPECTÁCULOS</Menu.Item>
                    <Menu.Item as="a">DEPORTES</Menu.Item>
                    <Menu.Item position="right">
                    <Button as="a" inverted={!fixed}>
                        Log in
                    </Button>
                    </Menu.Item>
                  </Container>
              </Menu>
              <HomeHeading mobile={false} />
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      );
    }
}

export default ContenedorDesktop;
