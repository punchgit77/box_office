import React from 'react'
import { FlexGrid } from '../styled'
import ActorCard from './ActorCard'
// import IMAGE_NOT_FOUND from '../../images/not_found.png'



const ActorGrid = ({data}) => (
        <FlexGrid>
             {
               data.map(({person})=> <ActorCard key={person.id}  name={person.name} gender={person.gender} deathday={person.deathday} country={person.country?person.country.name:null} birthday={person.birthday} image={person.image?person.image.medium:null} />
               )
        }
        </FlexGrid>
    )

export default ActorGrid
