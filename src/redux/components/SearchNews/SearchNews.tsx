import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";
import { SemanticWIDTHS } from "semantic-ui-react/dist/commonjs/generic";

type SearchNewsProps = {
    ancho: SemanticWIDTHS
}

class SearchNews extends Component<SearchNewsProps, any> {

    public render() {
        return (
            <Grid>
                <Grid.Row color='black'>
                    <Grid.Column width={this.props.ancho}>
                        <Search category placeholder='Buscar' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default SearchNews;
