import React,{ useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config';

const Home = () => {

const [input,seInput]=useState('');
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
        results[0].show?results.map((item=>(<div key={item.show.id}>{item.show.name}</div>))):
               results.map((item=>(<div key={item.person.id}>{item.person.name}</div>)))
    )}
    
    return null;
}

 
    return (
        <MainPageLayout>
            <input type="text" placeholder="search here.." onChange={InputChange} onKeyDown={onkeyDown} value={input}/>
            <div>
                <label htmlFor="shows-search">
                    shows
                    <input id ="shows-search" type="radio" value="shows" checked={isShowsearch} onChange={onRadiochange}/>
                </label>
                
                <label htmlFor="actor-search">
                    actors
                    <input id ="actor-search" type="radio" value="people" checked={!isShowsearch} onChange={onRadiochange}/>
                </label>
                <button type="button" onClick={Onsearch}>Search</button>
            </div>

            
            {renderResults()}
        </MainPageLayout>
    )
    };
export default Home;
