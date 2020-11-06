import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchPhrasePromiseAsync, onlyOneSearchAsync } from '../../actions/newsfeeds/newsfeeds.actions';
import { ComunState } from '../../model/ComunState';
import { NewsItem } from '../../model/data/NewsItem';

import PropTypes from 'prop-types';
import _ from 'lodash';
import { Search, Grid, Label, SearchResultData, SearchProps } from 'semantic-ui-react';
import { SemanticWIDTHS } from 'semantic-ui-react/dist/commonjs/generic';

const categoryLayoutRenderer: any = ({ categoryContent, resultsContent } : { categoryContent: any, resultsContent: any }) => (
    <div>
      <h3 className='name'>{categoryContent}</h3>
      <div  className='results'>
        {resultsContent}
      </div>
    </div>
)

categoryLayoutRenderer.propTypes = {
    categoryContent: PropTypes.node,
    resultsContent: PropTypes.node,
}

const categoryRenderer: any = ({ name }: { name: string }) => <Label as='span' content={name} />

categoryRenderer.propTypes = {
    name: PropTypes.string,
}

const resultRenderer = ({ title }: { title: string }) => <Label content={title} />

resultRenderer.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}
  
const initialState = { isLoading: false, results: [], value: '', isSelected: false, limit: 8 }


const getResultsAsync = (count: number, news: any[]) => {
    return news && news.length > 0 ? getResults2(count, news) : null;
}

const getResults2 = (count: number, news: any[]) => 
    _.times(count, (i) => (
        {
            id: news[i].news_id,
            title: news[i].title,
            category: news[i].category,
            url: news[i].url,
            img_url: news[i].img_url,
            source_name: news[i].source_name
        }
    ))

interface SearchNewsProps {
    ancho: SemanticWIDTHS,
    newsItems?: Array<NewsItem>,
    searchPhrasePromise: (phrase: string) => any,
    onlyOneSearch: (newsItems: Array<NewsItem>) => any
}

class SearchNews extends Component<SearchNewsProps, any> {
  state = initialState;

  handleResultSelect: any = (event: React.MouseEvent<HTMLDivElement>, data: SearchResultData) => {
    const { result } = data;
    const newsfeeds: any[] = [];
    newsfeeds.push(result);
    this.setState({ value: result.title, isSelected: true, results: [] }, () => this.props.onlyOneSearch(newsfeeds));
  }

  handleSearchChange: any = (event: React.MouseEvent<HTMLElement>, data: SearchProps) => {
    const { value } = data;
    this.setState({ isLoading: true, isSelected: false, value })

    if (this.state.value.length > 1) {
        this.props.searchPhrasePromise(this.state.value)
        .then( (response: any[]) => {
            if (response && response.length > 0) {
                if (this.state.value.length < 1) return this.setState(initialState)
                //const re = new RegExp(_.escapeRegExp(this.state.value), 'i');
                //const isMatch = (result: any) => re.test(result.title)
                const caterories = [];
                caterories.push(response);
                const source = Array.from(caterories, (x, i) => x).reduce((memo: any, listCategory: any[]) => {
                    const name = 'Todas las categorías';
                    // eslint-disable-next-line no-param-reassign
                    memo[name] = { name, results: getResultsAsync(this.state.limit, listCategory) }
                    return memo
                }, {})
                
                const filteredResults = _.reduce(
                    source,
                    (memo: any, data: any, name: any) => {
                        const results = data.results;  //=_.filter(data.results, isMatch)
                        if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign
    
                        return memo
                    },
                    {},
                )
                this.setState({
                    isLoading: false,
                    isSelected: false,
                    results: filteredResults
                })
            } else {
                this.setState({
                    isLoading: false,
                    isSelected: false,
                    results: []
                })
            }
        })
        .catch( (error: any) => { console.log('on error ' + error); });
    }
  }

  public render() {
      const { isLoading, value, results } = this.state;
      return (
        <Grid>
            <Grid.Row color='black'>
                <Grid.Column width={this.props.ancho}>
                    <Search 
                        category placeholder='Buscar'
                        categoryLayoutRenderer={categoryLayoutRenderer}
                        categoryRenderer={categoryRenderer}
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={_.debounce(this.handleSearchChange, 500, {
                            leading: true,
                        })}
                        resultRenderer={resultRenderer}
                        results={results}
                        value={value}
                        noResultsMessage="Buscando..."
                        onMouseDown={(event: React.MouseEvent<HTMLElement>, data: SearchProps) => {
                            if (this.state.isSelected) {
                                this.setState(initialState);
                            } 
                        }}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      );
  }
}

const mapStateToProps = (state: ComunState) => {
    return state.newsfeeds;
}
  
const mapDispatchToProps = {
    searchPhrasePromise: searchPhrasePromiseAsync,
    onlyOneSearch: onlyOneSearchAsync
};
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchNews);
