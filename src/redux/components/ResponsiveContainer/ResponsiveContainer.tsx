import React from 'react';
import DesktopContainer from '../DesktopContainer';
import MobileContainer from '../MobileContainer';

type ResponsiveContainerProps = React.PropsWithChildren<{
    advice?: boolean
}>;

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = (props) => {
    const Desktop = ({ children }: ResponsiveContainerProps) => (<DesktopContainer advice={props.advice}>{children}</DesktopContainer>);
    const Mobile = ({ children }: ResponsiveContainerProps) => (<MobileContainer advice={props.advice}>{children}</MobileContainer>);
    return (
        <div>
            <Desktop> {props.children} </Desktop>
            <Mobile> {props.children} </Mobile>
        </div>
    );
}

export default ResponsiveContainer;
