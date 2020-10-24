import React from 'react';
import "semantic-ui-css/semantic.min.css";
import ContenedorDesktop from '../ContenedorDesktop';
import ContenedorMobile from '../ContenedorMobile';

type ContenedorResponsiveProps = React.PropsWithChildren<{}>;

const ContenedorResponsive: React.FC<ContenedorResponsiveProps> = (props) => {
    const Desktop = ({ children }: ContenedorResponsiveProps) => (<ContenedorDesktop>{children}</ContenedorDesktop>);
    const Mobile = ({ children }: ContenedorResponsiveProps) => (<ContenedorMobile>{children}</ContenedorMobile>);
    return (
        <div>
            <Desktop> {props.children} </Desktop>
            <Mobile> {props.children} </Mobile>
        </div>
    );
}

export default ContenedorResponsive;
