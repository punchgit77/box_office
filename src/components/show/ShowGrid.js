import React from 'react';
// import IMAGE_NOT_FOUND from '../../images/not_found.png'
import { FlexGrid } from '../styled';
import ShowCard from './ShowCard';

const ShowGrid = ({data}) => <FlexGrid>
        {
               data.map(({show})=> <ShowCard key={show.id} id={show.id} name={show.name} image={show.image?show.image.medium:null} />
               )
        }
     </FlexGrid>;

export default ShowGrid
