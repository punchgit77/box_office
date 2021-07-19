/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-undef */
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from '../styled';
// import {SearchCard} from '../styled'
import { StyledShowcard } from './ShowCard.styled';
// import { FlexGrid } from '../styled';

const ShowCard = ({ id,image,name,summary,onstarclick,isstarred}) => {

    const summaryAsText = summary?`${summary.split(' ').join(' ').replace(/<.+?>/g, '')}...`:'No';
    
    return(
        <StyledShowcard>
            <div className="img-wrapper">
                <img src={image} alt="show"/>
            </div>
            <h1>{name}</h1>
            <p>{summaryAsText}</p>
            <div className="btns">
                <Link to={`/show/${id}`}>Read more</Link>
                <button type="button" onClick={onstarclick}><Star active={isstarred}/></button>
                
            </div>
            <p>______________________________________</p>
        </StyledShowcard>
          
    );
    };

export default ShowCard;
