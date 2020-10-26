import React, { Component } from 'react';
import ContenedorResponsive from '../ContenedorResponsive/ContenedorResponsive';

class ContenedorPrincipal extends Component {
  public render() {
    return (
      <div>
          <ContenedorResponsive>
            {this.props.children}
          </ContenedorResponsive>
      </div>
    );
  }
}

export default ContenedorPrincipal;
