import React from 'react';
import "semantic-ui-css/semantic.min.css";
import DesktopContainer from '../DesktopContainer';
import MobileContainer from '../MobileContainer';

type ResponsiveContainerProps = React.PropsWithChildren<{}>;

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = (props) => {
    const Desktop = ({ children }: ResponsiveContainerProps) => (<DesktopContainer>{children}</DesktopContainer>);
    const Mobile = ({ children }: ResponsiveContainerProps) => (<MobileContainer>{children}</MobileContainer>);
    return (
        <div>
            <Desktop> {props.children} </Desktop>
            <Mobile> {props.children} </Mobile>
        </div>
    );
}

export default ResponsiveContainer;
