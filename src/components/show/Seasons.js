/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { SeasonList, SeasonWrapper } from './Seasons.styled';

const Seasons = ({ seasons }) => (
        <SeasonWrapper>
            <p> Seasons in total:<span>{seasons.length}</span></p>
            <p>Episodes in total:{' '}<span>{seasons.reduce((acc,season)=>acc+season.episodeOrder,0)}</span></p>
           <SeasonList>
               {seasons.map(season=>(
                   <div key={season.id} className="season-item">
                       <div className="left">
                           <p>Season{season.number}</p>
                           <p>Episodes:<span>{season.episodeOrder}</span></p>
                           </div>
                           <div className="right">Aired:{' '}
                           <span>{season.premierDate}-{season.endDate}</span>
                           </div></div>
               ))}
           </SeasonList>
        </SeasonWrapper>
    );

export default Seasons
