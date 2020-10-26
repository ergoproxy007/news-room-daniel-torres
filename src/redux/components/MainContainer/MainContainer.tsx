import React, { Component } from 'react';
import ResponsiveContainer from '../ResponsiveContainer';


interface MainContainerProps {
  pathname?: string 
};

class MainContainer extends Component<MainContainerProps, any> {
  public render() {
    return (
      <div>
          <ResponsiveContainer pathname={this.props.pathname}>
            {this.props.children}
          </ResponsiveContainer>
      </div>
    );
  }
}

export default MainContainer;
