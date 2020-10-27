import React from 'react';

import {
    Segment, Dimmer, Loader, Image
} from "semantic-ui-react";

const DimmerLoaderCard: React.FC = () => {
    return (
        <div>
            <Segment>
                <Dimmer active inverted>
                    <Loader size='large'>Loading</Loader>
                </Dimmer>
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
            </Segment>
        </div>
    );
}

export default DimmerLoaderCard;