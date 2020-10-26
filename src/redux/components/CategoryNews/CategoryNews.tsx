import React, {Component} from 'react';

import { connect } from 'react-redux';
import { NewsItem } from '../../model/data/NewsItem';
import { ComunState } from '../../model/ComunState';
import { getListNewsFeedsAsync } from '../../actions/newsfeeds/newsfeeds.actions';

import CardNews from '../../../views/CardNews';

import {
  Grid,
  Header,
  Segment
} from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

interface CategoryNewsProps {
  newsItem?: Array<NewsItem>,
  getListNewsFeeds: (page: number) => void
};

class CategoryNews extends Component<CategoryNewsProps, any> {

  public componentDidMount(): void {
    this.props.getListNewsFeeds(1);
  }

  public render() {
    const { newsItem } = this.props;
    const valor = newsItem && newsItem[0] ? newsItem[0].news_id : 0;
    console.log('newsItem: ' + valor);
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

const mapStateToProps = (state: ComunState) => {
  return state.newsfeeds;
}

const mapDispatchToProps = {
  getListNewsFeeds: getListNewsFeedsAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryNews);

