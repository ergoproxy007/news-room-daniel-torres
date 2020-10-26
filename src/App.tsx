import React, { Component, ComponentType } from 'react';
import { withRouter, RouteProps  } from 'react-router';
import { connect } from 'react-redux';
import { ScreenState } from './redux/model/ScreenState';
import MainContainer from './redux/components/MainContainer';
import ResponsiveContainer from './redux/components/ResponsiveContainer';
import HomepageLayout from './redux/components/HomepageLayout';

interface AppProps {
  lightMode: boolean,
  darkMode: boolean
};

const AllNewsFeeds = () => {
  return (
    <div>
      <ResponsiveContainer>
        <HomepageLayout />
      </ResponsiveContainer>
    </div>
    );
}

class App extends Component<AppProps & RouteProps, any> {
  state = {};

  public render() {
    const { children } = this.props;
    return (
      <>
        {
          children
          ? <MainContainer>{children}</MainContainer>
          : <AllNewsFeeds />
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
