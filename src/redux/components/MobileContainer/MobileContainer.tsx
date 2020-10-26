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
  pathname?: string
};

class MobileContainer extends Component<MobileContainerProps, any> {
    static propTypes = {
        children: PropTypes.node,
        advice: PropTypes.bool
    };
    state = {sidebarOpened: false};

    public componentDidMount(): void {}

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
                <Menu.Item as="a" active>
                  <Link to="/home">HOME</Link>
                </Menu.Item>
                <Menu.Item as="a">POLITÍCA</Menu.Item>
                <Menu.Item as="a">INTERNACIONAL</Menu.Item>
                <Menu.Item as="a">TECNOLOGÍA</Menu.Item>
                <Menu.Item as="a">ESPECTÁCULOS</Menu.Item>
                <Menu.Item as="a">DEPORTES</Menu.Item>
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
