import React from 'react'
import { CastList } from './Cast.styled';

const Cast = ({ cast }) => (
        <CastList>
            {cast.map(({person,character,voice},key)=>(
                <div key={key}>
                    <div className="pic-wrapper">
                        <img src={person.image?person.image.medium:null} alt="cast-person"/>
                    </div>
                    <div className="actor"><span className="bold">{person.name}|{character.name}{voice?'/voice':' '}</span></div>
                    </div>
            ))}
        </CastList>
    );

export default Cast
