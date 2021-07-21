import React,{ useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
import { useLastQuery } from '../misc/custom-hooks';
import { Radioinputwrapper, SearchButtonWrapper, Searchinput } from './Home.styled';
import CustomRadio from '../components/CustomRadio';

const Home = () => {

const [input,seInput]=useLastQuery();
const [results,setresults]=useState(null);
const [searchOption,setsearchOption]=useState('shows');

const onRadiochange=(ev)=>{
    setsearchOption(ev.target.value);
}

const isShowsearch= searchOption==='shows';


const Onsearch=()=>{

    apiGet(`/search/${searchOption}?q=${input}`).then(result=>{setresults(result)});
    // fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(r=>r.json).then(result=>{setresults(result);
        // console.log(result)});
};


const InputChange=(ev)=>{
    seInput(ev.target.value);
};

const onkeyDown=(ev)=>{
    if(ev.keyCode===13){
        Onsearch();
    }
};
const renderResults=()=>{
    if(results && results.length===0){
        return<div>No results found</div>
    }
    if(results && results.length>0){
        return (
        results[0].show?<ShowGrid data={results}/>:<ActorGrid data={results}/>
             
        )}
    
    return null;
}

 
    return (
        <MainPageLayout>
            <Searchinput  
            type="text" 
            placeholder="search here.." 
            onChange={InputChange} 
            onKeyDown={onkeyDown} 
            value={input}/>

        <Radioinputwrapper>
            
                   <div> 
                    <CustomRadio 
                    label="Shows"
                    id ="shows-search" 
                    value="shows" 
                    checked={isShowsearch} 
                    onChange={onRadiochange}
                    />
             </div>

              <div>
                <CustomRadio 
                    label="Actors"
                    id ="actor-search" 
                    value="people" 
                    checked={!isShowsearch} 
                    onChange={onRadiochange}
                    />
                
            </div>
        </Radioinputwrapper>
            <SearchButtonWrapper>
                <button type="button" onClick={Onsearch}>Search</button>
             </SearchButtonWrapper>
                

            
            {renderResults()}
        </MainPageLayout>
    )
    };
export default Home;
