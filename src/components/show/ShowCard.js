import React from 'react';
import { Link } from 'react-router-dom';
// import {SearchCard} from '../styled'
// eslint-disable-next-line import/named
import { StyledShowcard } from './ShowCard.styled';
// import { FlexGrid } from '../styled';

const ShowCard = ({id,image,name,summary}) => {

    const summaryText=summary?`${summary.splt(' ').slice(0,10).join(' ').replace(/<.+?>/g,'')}...`:'No Description';
    return(
        <StyledShowcard>
            <div className="img-wrapper">
                <img src={image} alt="show"/>
            </div>
            <h1>{name}</h1>
            <p>{summaryText}</p>
            <div className="btns">
                <Link to={`/show/${id}`}>Read more</Link>
                <button type="button">Star Me</button>
                
            </div>
            <p>______________________________________</p>
        </StyledShowcard>
          
    )
    }

export default ShowCard
