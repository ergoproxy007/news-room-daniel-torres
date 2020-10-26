import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
    Button,
    Container,
    Menu,
    Responsive,
    Segment,
    Sidebar
  } from "semantic-ui-react";
import SearchNews from '../SearchNews';
import HomeHeading from '../../../views/HomepageHeading';

interface MobileContainerProps {
  advice?: boolean
};

class MobileContainer extends Component<MobileContainerProps, any> {
    static propTypes = {
        children: PropTypes.node,
        advice: PropTypes.bool
    };

    state = {sidebarOpened: false};

    category = {
      politica: '/category/1',
      internacional: '/category/2',
      tecnologia: '/category/3',
      espectaculos: '/category/4',
      deportes: '/category/5'
    }

    handlePusherClick = () => {
      const { sidebarOpened } = this.state;
  
      if (sidebarOpened) this.setState({ sidebarOpened: false });
    };

    handleToggle = () =>
    this.setState({ sidebarOpened: !this.state.sidebarOpened });

    public render() {
        const { children, advice } = this.props;
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
                <Menu.Item as="a">
                  <Link to="/">HOME</Link>
                </Menu.Item>
                <Menu.Item as="a"><Link to={this.category.politica}>POLITÍCA</Link></Menu.Item>
                <Menu.Item as="a"><Link to={this.category.internacional}>INTERNACIONAL</Link></Menu.Item>
                <Menu.Item as="a"><Link to={this.category.tecnologia}>TECNOLOGÍA</Link></Menu.Item>
                <Menu.Item as="a"><Link to={this.category.espectaculos}>ESPECTÁCULOS</Link></Menu.Item>
                <Menu.Item as="a"><Link to={this.category.deportes}>DEPORTES</Link></Menu.Item>
              </Sidebar>
    
              <Sidebar.Pusher
                dimmed={sidebarOpened}
                onClick={this.handlePusherClick}
                style={{ minHeight: "100vh" }}
              >
                <Segment
                  inverted
                  textAlign="center"
                  style={{ minHeight: advice ? 350 : 0, padding: "1em 0em" }}
                  vertical
                >
                  <Container>
                    <Menu inverted secondary>
                      <Menu.Item position='left'>
                        <Button Button as='a' color='black'  onClick={this.handleToggle}>
                          Menu
                        </Button>
                        <SearchNews ancho={4} />
                      </Menu.Item>
                    </Menu>
                  </Container>
                  { advice ? <HomeHeading mobile /> : null }
                </Segment>
                {children}
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Responsive>
        );
      }
}

export default MobileContainer;
