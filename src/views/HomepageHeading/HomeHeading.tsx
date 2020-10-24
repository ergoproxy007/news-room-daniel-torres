import React from 'react';
import PropTypes from 'prop-types';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

type HomeHeadingProps = React.PropsWithChildren<{
    mobile: boolean
}>;

const HomeHeading: React.FC<HomeHeadingProps> = ({ mobile }) => {
    console.log("mobile: " + mobile);
    const Icono: any = Icon;
    return (  
        <Container text>
            <Header
                as="h1"
                content="Bienvenido a tu Noticiero Online"
                inverted
                style={{
                    fontSize: mobile ? "2em" : "4em",
                    fontWeight: "normal",
                    marginBottom: 0,
                    marginTop: mobile ? "1.5em" : "3em"
                }}
            />
            <Header
                as="h2"
                content="Selecciona tu categoría favorita"
                inverted
                style={{
                    fontSize: mobile ? "1.5em" : "1.7em",
                    fontWeight: "normal",
                    marginTop: mobile ? "0.5em" : "1.5em"
                }}
            />
            <Button primary size="huge">
            Get Started
            <Icono name="right arrow" />
            </Button>
        </Container>
    );
}

export default HomeHeading;
