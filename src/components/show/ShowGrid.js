/* eslint-disable no-unused-vars */
import React from 'react';
// import IMAGE_NOT_FOUND from '../../images/not_found.png'
import { FlexGrid } from '../styled';
import ShowCard from './ShowCard';
import { useShows } from '../../misc/custom-hooks';

const ShowGrid = ({data}) => {

  const [starredshows,dispatchstarred]=useShows();
 return (<FlexGrid>
         {data.map(({show})=> {
                      const isstarred=starredshows.includes(show.id);

                      const onstarclick=()=>{if(isstarred)
                                                {dispatchstarred({type:'REMOVE',showId:show.id})}
                                                  else{dispatchstarred({type:'ADD',showId:show.id})}
                                                 }
                         return (
                         <ShowCard 
                         key={show.id} 
                         id={show.id} 
                         name={show.name} 
                         image={show.image?show.image.medium:null} 
                         summary={show.summary} 
                         onstarclick={onstarclick}
                         isstarred={isstarred}
                         />
                         );
                     })
                     
              }    
     </FlexGrid>)

}

export default ShowGrid;
