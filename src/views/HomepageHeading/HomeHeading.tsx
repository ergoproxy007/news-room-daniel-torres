import React from 'react';

import {
  Button,
  Container,
  Header,
  Icon
} from "semantic-ui-react";
import DropdownCategories from '../DropdownCategories';

type HomeHeadingProps = React.PropsWithChildren<{
    mobile?: boolean
}>;

const HomeHeading: React.FC<HomeHeadingProps> = ({ mobile }) => {
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
            <DropdownCategories />
        </Container>
    );
}

export default HomeHeading;
