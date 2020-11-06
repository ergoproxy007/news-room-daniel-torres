import React from 'react';
import { withRouter } from 'react-router-dom';

import { Dropdown, DropdownProps } from 'semantic-ui-react';

const categoriesOptions = [
    {
        key: 'politica',
        text: 'Politíca',
        value: '1',
        image: { avatar: true, src: 'https://cdn.pixabay.com/photo/2017/09/29/10/48/elephant-2798628_960_720.jpg' },
    },
    {
        key: 'internacional',
        text: 'Internacional',
        value: '2',
        image: { avatar: true, src: 'https://cdn.pixabay.com/photo/2017/01/11/19/02/metal-1972636_960_720.png' },
    },
    {
        key: 'tecnologia',
        text: 'Tecnología',
        value: '3',
        image: { avatar: true, src: 'https://cdn.pixabay.com/photo/2017/01/22/12/07/imac-1999636_960_720.png' },
    },
    {
        key: 'espectaculo',
        text: 'Espectáculos',
        value: '4',
        image: { avatar: true, src: 'https://cdn.pixabay.com/photo/2015/11/03/07/23/clapper-board-1019607_960_720.jpg' },
    },
    {
        key: 'deportes',
        text: 'Deportes',
        value: '5',
        image: { avatar: true, src: 'https://cdn.pixabay.com/photo/2016/02/15/11/43/sport-1201014_960_720.jpg' },
    }
  ]

const DropdownCategories = withRouter(({ history }) => 
    (<Dropdown
                placeholder='Seleccionar'
                selection
                options={categoriesOptions}
                onChange={(event: React.SyntheticEvent<HTMLElement>, data: DropdownProps) => {
                    history.push('/category/' + data.value)
                }}
    />)
)

export default DropdownCategories;
