import React from 'react';
import Navs from "./Navs";
import Title from './Title';

const MainPageLayout = ({children}) => 
     (
        <div>
            <Title  title1="Box" title2="O" title3="ffice"  subtitle="are you looking for a movie or a actor?"/>
            <Navs/>
            {children}
        </div>
    )


export default MainPageLayout
