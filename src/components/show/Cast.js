import React from 'react'

const Cast = ({ cast }) => (
        <div>
            {cast.map(({person,character,voice},key)=>(
                <div key={key}>
                    <div>
                        <img src={person.image?person.image.medium:null} alt="cast-person"/>
                    </div>
                    <div><span>{person.name}|{character.name}{voice?'/voice':' '}</span></div>
                    </div>
            ))}
        </div>
    );

export default Cast
