import React, { Component, ComponentType } from 'react';
import { withRouter, RouteProps  } from 'react-router';
import { connect } from 'react-redux';
import { ScreenState } from './redux/model/ScreenState';
import MainContainer from './redux/components/MainContainer';
import ResponsiveContainer from './redux/components/ResponsiveContainer';
import CategoryNews from './redux/components/CategoryNews';

interface AppProps {
  lightMode: boolean,
  darkMode: boolean
};

const AllNewsFeeds = () => {
  return (
    <div>
      <ResponsiveContainer advice>
        <CategoryNews />
      </ResponsiveContainer>
    </div>
    );
}

class App extends Component<AppProps & RouteProps, any> {
  state = {};

  public render() {
    console.log(this.props.location?.pathname);
    const isOriginPathname = this.props.location?.pathname === '/';
    const { children } = this.props;
    return (
      <>
        {
          isOriginPathname
          ? <AllNewsFeeds />
          : <MainContainer>{children}</MainContainer>
        }
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
