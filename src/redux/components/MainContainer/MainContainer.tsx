import React, { Component } from 'react';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer';

class MainContainer extends Component {
  public render() {
    return (
      <div>
          <ResponsiveContainer>
            {this.props.children}
          </ResponsiveContainer>
      </div>
    );
  }
}

export default MainContainer;
