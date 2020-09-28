import React, { ReactChildren, ReactChild  } from 'react';
import "semantic-ui-css/semantic.min.css";
import ContenedorDesktop from './ContenedorDesktop';
import ContenedorMobile from './ContenedorMobile';

type ContenedorResponsiveProps = React.PropsWithChildren<{}>;

const ContenedorResponsive: React.FC<ContenedorResponsiveProps> = () => {
    const Escritorio = ({ children }: ContenedorResponsiveProps) => (<ContenedorDesktop>{children}</ContenedorDesktop>);
    const Movil = ({ children }: ContenedorResponsiveProps) => (<ContenedorMobile>{children}</ContenedorMobile>);
    return (
        <div>
            <Escritorio />
            <Movil />
        </div>
    );
}

export default ContenedorResponsive;
