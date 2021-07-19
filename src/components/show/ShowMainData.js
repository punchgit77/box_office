/* eslint-disable react/no-danger */

import React from 'react'
import { Star } from '../styled'
import { MainDataWrapper, Taglist } from './ShowMainData.styled';
// import IMAGE_PLACEHOLDER from '../../images/not_found.png'

const ShowMainData = ({image,name,rating,summary,tags}) => (
        <MainDataWrapper>
            <img src={image?image.original:null} alt="show-cover"/>
            <div>
                <div className="Headline">
                    <h1>{name}</h1>
                    <div>
                        <Star active/><span>{rating.average||'N/A'}</span>
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{__html:summary}}/>
                <Taglist>Tags:{' '}
                <div>{tags.map((tag,i)=>(
                    <span key={i}>{tag}</span>
                ))}</div>
                </Taglist>
            </div>
        </MainDataWrapper>
    )

export default ShowMainData;
