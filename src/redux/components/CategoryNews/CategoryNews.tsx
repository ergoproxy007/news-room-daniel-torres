import React, {Component} from 'react';

import { connect } from 'react-redux';
import { RouteProps  } from 'react-router';
import { NewsItem } from '../../model/data/NewsItem';
import { ComunState } from '../../model/ComunState';
import { getListNewsFeedsAsync, trendingAsync } from '../../actions/newsfeeds/newsfeeds.actions';

import CardNews from '../../../views/CardNews';

import _ from 'lodash';

import {
  Grid,
  Header,
  Segment,
  Dimmer, Loader, Image
} from "semantic-ui-react";
import DimmerLoaderCard from '../../../views/DimmerLoaderCard';

interface CategoryNewsProps {
  newsItems?: Array<NewsItem>,
  titleCategory: string,
  getListNewsFeeds: (page: number) => void,
  trending: (today: string, count: number) => void
};

class CategoryNews extends Component<CategoryNewsProps & RouteProps, any> {
  private parametros: any;

  state = {idCategory: 0};

  public componentDidMount(): void {
    this.parametros = this.props;
    if (this.parametros.match) {
      const idCategory = parseInt(this.parametros.match.params.id, 0);
      this.setState({idCategory});
      
      this.props.getListNewsFeeds(idCategory);
    } else {
      this.props.trending(this.obtenerFechaGuionYYYYMMDD(), 12);
    }
  }

  private getTitle = (idCategory: number, titleCategory: string): string => {
    if (titleCategory) {
      return titleCategory;
    }
    switch (idCategory) {
      case 1: { return 'Politíca'; }
      case 2: { return 'Internacional'; }
      case 3: { return 'Tecnología'; }
      case 4: { return 'Espectáculos'; }
      case 5: { return 'Deportes'; }
      default: { return 'Hoy'; }
    }
  }

  private obtenerFechaGuionYYYYMMDD = (): string => {
    const feentrada = new Date();
    const anio = feentrada.getFullYear();
    const mes = feentrada.getMonth() + 1;
    const dia = feentrada.getDate();
    return anio+'-'+mes+'-'+dia;
  }

  public render() {
    const { newsItems, titleCategory } = this.props;
    const { idCategory } = this.state;
    const indefinido = newsItems ? newsItems.length === undefined || newsItems.length === 0 : true;
    return (
      <>
        <Segment style={{ padding: "2em 0em" }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={16}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  {this.getTitle(idCategory, titleCategory) }
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {_.times(3, (i) => (
                indefinido 
                ? 
                  <Grid.Column width={5}>
                    <DimmerLoaderCard key={i} />
                  </Grid.Column>
                : null
                ))}
              {
                newsItems?.map((item: NewsItem) => {
                  return (
                    <Grid.Column width={5}>
                      <CardNews newsItem={item} />
                    </Grid.Column>
                  );
                })
              }
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
  getListNewsFeeds: getListNewsFeedsAsync,
  trending: trendingAsync
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryNews);

