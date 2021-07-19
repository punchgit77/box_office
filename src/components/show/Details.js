import React from 'react'
import { DetailsWrapper } from './Details.styled'

const Details = ({status,premiered,network}) => (
        <DetailsWrapper>
            <p>Status:<span>{status}</span></p>
            <p>Premiered:<span>{premiered}{network?`on ${network.name}`:null}</span></p>
        </DetailsWrapper>
    )

export default Details