import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility
} from "semantic-ui-react";
import SearchNews from '../SearchNews';
import HomeHeading from '../../../views/HomepageHeading';

import "semantic-ui-css/semantic.min.css";

interface DesktopContainerProps {
  advice?: boolean
};

class DesktopContainer extends Component<DesktopContainerProps, any> {
    static propTypes = {
        children: PropTypes.node,
        advice: PropTypes.bool
    };

    state = {fixed: false};

    public componentDidMount(): void {}
  
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });
  
    public render() {
      const { children, advice } = this.props;
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
              style={{ minHeight: advice ? 700 : 90, padding: "1em 0em" }}
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
              { advice ? <HomeHeading /> : null }
            </Segment>
          </Visibility>
          {children}
        </Responsive>
      );
    }
}

export default DesktopContainer;
