import React, { Component, ComponentType } from 'react';
import { withRouter, RouteProps  } from 'react-router';
import { connect } from 'react-redux';
import { ScreenState } from './redux/model/ScreenState';
import { Button } from 'semantic-ui-react';
import ContenedorPrincipal from './redux/components/ContenedorPrincipal';
import ContenedorResponsive from './redux/components/ContenedorResponsive/ContenedorResponsive';
import HomepageLayout from './redux/components/HomepageLayout';

interface AppProps {
  lightMode: boolean,
  darkMode: boolean
};

const AllContainer = () => {
  return (
    <div>
      <ContenedorResponsive>
        <HomepageLayout />
      </ContenedorResponsive>
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
          ? <ContenedorPrincipal>{children}</ContenedorPrincipal>
          : <AllContainer />
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
