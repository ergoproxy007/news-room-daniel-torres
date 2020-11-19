import * as React from 'react';
import { shallow } from 'enzyme';
import CardNews from './CardNews';
import { NewsItem } from '../../redux/model/data/NewsItem';

describe('CardNews', () => {
  test('matches snapshot', () => {
    const newsItemMock = {
      news_id: 1,
      url: 'http://nuevo',
      img_url: 'img.png',
      title: 'Titulo',
      source_name: 'Infobae',
      category: 'Internacional'
    } as NewsItem;
    const wrapper = shallow(<CardNews newsItem={newsItemMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
