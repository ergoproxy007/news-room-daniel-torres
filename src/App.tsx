import React, { Component, ComponentType, ReactNode } from 'react';
import { withRouter, RouteProps  } from 'react-router';
import { connect } from 'react-redux';
import { ScreenState } from './redux/model/ScreenState';
import MainContainer from './redux/components/MainContainer';
import ResponsiveContainer from './redux/components/ResponsiveContainer';
import CategoryNews from './redux/components/CategoryNews';
import Footer from './views/Footer';

import "semantic-ui-css/semantic.min.css";

interface AppProps {
  lightMode: boolean,
  darkMode: boolean,
};

interface IProps {
  children: ReactNode,
  location: any,
  footer: ReactNode
}

const Trending = () => {
  return (
    <div>
      <ResponsiveContainer advice>
        <CategoryNews titleCategory='¡Tendencia!' />
        <Footer />
      </ResponsiveContainer>
    </div>
  );
}

const Main = ({location, children, footer}: IProps) => {
  return (
    <MainContainer pathname={location?.pathname}>
      {children}
      {footer}
    </MainContainer>
  );
}

class App extends Component<AppProps & RouteProps, any> {
  state = {};

  public render() {
    const { children, location } = this.props;
    const isOriginPathname = this.props.location?.pathname === '/';
    return (
      <>
        { isOriginPathname ? <Trending /> : <Main location={location} children={children} footer={<Footer />} /> }
      </>
    );
  }
}

const mapStateToProps = (state: ScreenState) => ({
  lightMode: state.isLight,
  darkMode: state.isDark
});

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App) as ComponentType<any>
);
