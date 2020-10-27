import React from 'react';
import { Card, Icon, Image, List } from 'semantic-ui-react'
import { NewsItem } from '../../redux/model/data/NewsItem';
import PropTypes from 'prop-types';

interface CardNewsProps {
  newsItem: NewsItem
};

const CardNews: React.FC<CardNewsProps> = ({newsItem}) => {
  return (
    <Card style={{ minHeight: '340px', marginBottom: '1.3rem' }}>
      <Image src={newsItem.img_url} wrapped ui={false} alt='Foto Noticia' />
      <Card.Content>
        <Card.Header>{newsItem.source_name}</Card.Header>
        <Card.Meta>
          <span className='date'>{newsItem.category}</span>
        </Card.Meta>
        <Card.Description>
          {newsItem.title}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <List>
          <List.Item
            as="a"
            content="🌐 VER MÁS"
            href={newsItem.url}
            target="_blank"
          />
        </List>
      </Card.Content>
    </Card>
  );
}

CardNews.propTypes = {
  newsItem: PropTypes.object.isRequired as PropTypes.Validator<NewsItem>
}

export default CardNews;
