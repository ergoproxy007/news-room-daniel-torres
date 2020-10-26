import React, { Component } from 'react';
import { Link } from "react-router-dom";
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
import SearchNews from '../SearchNews';
import HomeHeading from '../../../views/HomepageHeading';

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
                size="large">
                  <Container>
                    <Menu.Item as="a" active>
                      <Link to="/home">HOME</Link>
                    </Menu.Item>
                    <Menu.Item as="a">POLITÍCA</Menu.Item>
                    <Menu.Item as="a">INTERNACIONAL</Menu.Item>
                    <Menu.Item as="a">TECNOLOGÍA</Menu.Item>
                    <Menu.Item as="a">ESPECTÁCULOS</Menu.Item>
                    <Menu.Item as="a">DEPORTES</Menu.Item>
                    <Menu.Item position="right">
                      <SearchNews ancho={8} />
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
