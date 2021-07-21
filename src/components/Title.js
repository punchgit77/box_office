/* eslint-disable arrow-body-style */
import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({title1,title2,title3,subtitle}) => 
     {
        return (
        <TitleWrapper>
            <h1> {title1} <span>{title2}</span>{title3} </h1>
            <p>{subtitle}</p>
        </TitleWrapper>
        );
    }

export default Title;
