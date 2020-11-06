import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Search, Grid, SearchCategoryProps, Label } from "semantic-ui-react";
import { SemanticWIDTHS } from "semantic-ui-react/dist/commonjs/generic";

import _ from 'lodash';

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
  
const initialState = { isLoading: false, results: [], value: '' }

const getResults = (count: number, news: any[]) => 
    _.times(count, (i) => (
        {
            title: news[i],
            description: 'description ' + i,
            price: 'price ' + i
        }
    ))

const caterories = ['Politica', 'Deportes'];

const source = Array.from(caterories, (x, i) => x).reduce((memo: any, category: string) => {
    const name = 'canillitapp ' + category;
    const news = ['AAA', 'BBB', 'CCC'];
    // eslint-disable-next-line no-param-reassign
    memo[name] = {
      name,
      results: getResults(4, news),
    }
  
    return memo
}, {})
  
type SearchNewsProps = {
    ancho: SemanticWIDTHS
}

class SearchNews extends Component<SearchNewsProps & SearchCategoryProps, any> {
  state = initialState;
  
  handleResultSelect: any = (e: any, { result }: { result: any }) => this.setState({ value: result.title })

  handleSearchChange: any = (e: any, { value }: { value: any }) => {
    this.setState({ isLoading: true, value })

  setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result: any) => re.test(result.title)

      const filteredResults = _.reduce(
        source,
        (memo: any, data: any, name: any) => {
          const results = _.filter(data.results, isMatch)
          if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign

          return memo
        },
        {},
      )

      this.setState({
        isLoading: false,
        results: filteredResults,
      })
    }, 300)
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
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
      );
  }
}

export default SearchNews;
