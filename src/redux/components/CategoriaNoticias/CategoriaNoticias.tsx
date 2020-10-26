import React, {Component} from 'react';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    List,
    Segment
} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import CardNews from '../../../views/CardNews';

class CategoriaNoticias extends Component {

  state = {}

  public componentDidMount(): void {
  }

  public render() {
    return (
      <>
        <Segment style={{ padding: "2em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Titulo
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <CardNews />
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they never
                  thought possible. Let us delight your customers and empower your
                  needs... through pure data analytics.
                </p>
              </Grid.Column>
              <Grid.Column width={5}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  We Help Companies and Companions
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  We can give your company superpowers to do things that they never
                  thought possible. Let us delight your customers and empower your
                  needs... through pure data analytics.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </>
    );
  }

}

export default CategoriaNoticias;
