import React, { Component } from 'react';
import ContenedorResponsive from './ContenedorResponsive';

type ContenedorPrincipalProps = {
  //
};

class ContenedorPrincipal extends Component<ContenedorPrincipalProps, any> {
  public render() {
    return (
      <div>
        <ContenedorResponsive />
      </div>
    );
  }
}

export default ContenedorPrincipal;
