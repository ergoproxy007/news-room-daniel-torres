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
      "I’m a person proud of my work, happy to work both in the backend and frontend",
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
                    <List.Content style={{ fontSize: '1.2rem' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                      &nbsp; by Daniel Torres
                    </List.Content>
                  </List.Item>
                  <List.Item as='a' target='_blank' href='https://www.linkedin.com/in/daniel-arafat-torres-ruiz-59743813a/'>
                    <List.Content style={{ fontSize: '1.2rem' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/></svg>
                      &nbsp; Linkedin Profile
                    </List.Content>
                  </List.Item>
                  <List.Item as='a' target='_blank' href='https://github.com/ergoproxy007'>
                    <List.Content style={{ fontSize: '1.1rem' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      &nbsp; GitHub Community
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={3}>
                <Header inverted as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Frontend Developer</List.Item>
                  <List.Item as="a" style={{ marginLeft: '10px' }}>JS, React, Angular</List.Item>
                  <List.Item as="a">Backend Developer</List.Item>
                  <List.Item as="a" style={{ marginLeft: '10px' }}>Java, Scala, C#</List.Item>
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
                      <RatingStar countRating={5} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '1.1rem', marginLeft: '8px' }}>Redux</List.Item>
                    </List.Content>
                    <List.Content>
                      <RatingStar countRating={3} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '1.1rem', marginLeft: '8px' }}>Hooks</List.Item>
                    </List.Content>
                    <List.Content>
                      <RatingStar countRating={4} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '1.1rem', marginLeft: '8px' }}>Bootstrap</List.Item>
                    </List.Content>
                    <List.Content>
                      <RatingStar countRating={5} maxiRating={5} />
                      <List.Item as='a' style={{ fontSize: '1.1rem', marginLeft: '8px' }}>Semantic-UI</List.Item>
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