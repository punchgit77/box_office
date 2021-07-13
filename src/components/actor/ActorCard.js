import React from 'react'
import { StyledActorCard } from './ActorCard.styled'

const ActorCard = ({name,gender,deathday,birthday,country,image}) => (
        <StyledActorCard>
            <div className="img-wrapper">
                <img src={image} alt="actor"/>
            </div>
            <h1>{name} {gender?`(${gender})`:null}</h1>
            {birthday?<p>Born {birthday}</p>:null}
            <p className="deathday">{deathday?`Died ${deathday}`:'Alive'}</p>
           
             <p>{country?`comes from ${country}`:'no country known'}</p> 
             <p>______________________________________</p>
             
             
             
             
        </StyledActorCard>
    )

export default ActorCard
