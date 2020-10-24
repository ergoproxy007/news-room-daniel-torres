import React, { Component, ComponentType } from 'react';
import { withRouter, RouteProps  } from 'react-router';
import { connect } from 'react-redux';
import { ScreenState } from './redux/model/ScreenState';

interface AppProps {
  lightMode: boolean,
  darkMode: boolean
};

class App extends Component<AppProps & RouteProps, any> {
  state = {};

  public render() {
    const { children } = this.props;
    return (
      <>
        {children}
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
