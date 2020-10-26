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

interface DesktopContainerProps {
  advice?: boolean,
  pathname?: string
};

class DesktopContainer extends Component<DesktopContainerProps, any> {
    static propTypes = {
        children: PropTypes.node,
        advice: PropTypes.bool
    };

    state = {fixed: false, activeItem: 'home' };
 
    category = {
      politica: '/category/1',
      internacional: '/category/2',
      tecnologia: '/category/3',
      espectaculos: '/category/4',
      deportes: '/category/5'
    }
  
    hideFixedMenu = () => this.setState({ fixed: false });
    showFixedMenu = () => this.setState({ fixed: true });

    public render() {
      const { children, advice, pathname } = this.props;
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
                  <Container fluid>
                    <Menu.Item as='a' active={pathname === undefined}>
                      <Link to="/">HOME</Link>
                    </Menu.Item>
                    <Menu.Item as='a' active={pathname === this.category.politica}>
                      <Link to={this.category.politica}>POLITÍCA</Link>
                    </Menu.Item>
                    <Menu.Item as="a" active={pathname === this.category.internacional}>
                      <Link to={this.category.internacional}>INTERNACIONAL</Link>
                    </Menu.Item>
                    <Menu.Item as="a" active={pathname === this.category.tecnologia}>
                      <Link to={this.category.tecnologia}>TECNOLOGÍA</Link>
                    </Menu.Item>
                    <Menu.Item as="a" active={pathname === this.category.espectaculos}>
                      <Link to={this.category.espectaculos}>ESPECTÁCULOS</Link>
                    </Menu.Item>
                    <Menu.Item as="a" active={pathname === this.category.deportes}>
                      <Link to={this.category.deportes}>DEPORTES</Link>
                    </Menu.Item>
                    <Menu.Item position="right">
                      <SearchNews ancho={16} />
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
