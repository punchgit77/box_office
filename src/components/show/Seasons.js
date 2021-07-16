/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'

const Seasons = ({ seasons }) => (
        <div>
            <p> Seasons in total:<span>{seasons.length}</span></p>
            <p>Episodes in total:{' '}<span>{seasons.reduce((acc,season)=>acc+episodeOrder,0)}</span></p>
           <div>
               {seasons.map(season=>(
                   <div key={season.id}>
                       <div>
                           <p>Season{season.number}</p>
                           <p>Episodes:<span>{season.episodeOrder}</span></p>
                           </div>
                           <div>Aired:{' '}
                           <span>{season.premierDate}-{season.endDate}</span>
                           </div></div>
               ))}
           </div>
        </div>
    );

export default Seasons
