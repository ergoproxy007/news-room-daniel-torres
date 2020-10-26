import React from 'react';

import {
    Container,
    Grid,
    Header,
    List,
    Segment,
    Rating
} from "semantic-ui-react";

import "./Footer.css";

const Paragraph = () => (
  <p>
    {[
      "I’m a person proud of his work, happy to work both in the backend and frontend",
      "I like to participate on innovate projects and learn news topics with my colleagues and clients",
      "I'm interested for working in a prestige company where they use the latest technologies and projects very interesting",
    ].join(". ")}
  </p>
);

interface RatingProps {
  countRating: number,
  maxiRating: number
}
const RatingStar = ({countRating, maxiRating}: RatingProps) => {
  return (<Rating icon='star' defaultRating={countRating} maxRating={maxiRating} />);
};

const Footer: React.FC = () => {
    return (
      <Segment inverted vertical style={{ padding: "3em 0em" }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="About me" />
                <List link inverted>
                  <List.Item as='a'>
                    <List.Icon name='user secret' size='large' />
                    <List.Content style={{ fontSize: '1.2rem' }}>by Daniel Torres</List.Content>
                  </List.Item>
                  <List.Item as='a' target='_blank' href='https://www.linkedin.com/in/daniel-arafat-torres-ruiz-59743813a/'>
                    <List.Icon name='linkedin' size='large' />
                    <List.Content style={{ fontSize: '1.2rem' }}>Linkedin Profile</List.Content>
                  </List.Item>
                  <List.Item as='a' target='_blank' href='https://github.com/ergoproxy007'>
                    <List.Icon name='github' size='large' />
                    <List.Content style={{ fontSize: '1.1rem' }}>GitHub Community</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Frontend Developer</List.Item>
                  <List.Item as="a" style={{ marginLeft: '10px' }}>JS, React, Angular</List.Item>
                  <List.Item as="a">Backend Developer</List.Item>
                  <List.Item as="a" style={{ marginLeft: '10px' }}>Java, .NET, NodeJs</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Skills" />
                <List link inverted>
                  <List.Item>
                    <List.Description>
                      <RatingStar countRating={4} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '1.1rem', marginLeft: '8px' }}>React</List.Item>
                    </List.Description>
                    <List.Content>
                      <RatingStar countRating={4} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '1.1rem', marginLeft: '8px' }}>Angular</List.Item>
                    </List.Content>
                    <List.Content>
                      <RatingStar countRating={4} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '1.1rem', marginLeft: '8px' }}>Boostrap</List.Item>
                    </List.Content>
                    <List.Content>
                      <RatingStar countRating={5} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '1.1rem', marginLeft: '8px' }}>Semantic-UI</List.Item>
                    </List.Content>
                    <List.Content>
                      <RatingStar countRating={4} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '0.9rem', marginLeft: '8px' }}>Java/Spring/Play</List.Item>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={6}>
                <Header as="h4" inverted>
                  Who I Am?
                </Header>
                <Paragraph />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
}

export default Footer;