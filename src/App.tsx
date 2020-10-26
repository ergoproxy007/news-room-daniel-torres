import React, { Component, ComponentType } from 'react';
import { withRouter, RouteProps  } from 'react-router';
import { connect } from 'react-redux';
import { ScreenState } from './redux/model/ScreenState';
import MainContainer from './redux/components/MainContainer';
import ResponsiveContainer from './redux/components/ResponsiveContainer';
import CategoryNews from './redux/components/CategoryNews';
import HomepageLayout from './redux/components/HomepageLayout';

interface AppProps {
  lightMode: boolean,
  darkMode: boolean
};

const AllNewsFeedsCategories = () => {
  return (
    <div>
      <ResponsiveContainer advice>
        <CategoryNews titleCategory='Hoy' />
        <HomepageLayout />
      </ResponsiveContainer>
    </div>
    );
}

class App extends Component<AppProps & RouteProps, any> {
  state = {};

  public render() {
    const { children } = this.props;
    const isOriginPathname = this.props.location?.pathname === '/';
    return (
      <>
        {
          isOriginPathname
          ? <AllNewsFeedsCategories />
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
