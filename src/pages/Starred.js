import React,{ useState,useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
      
        const [starred] = useShows();
        const [shows,setshows]=useState(null);
        const [isloading,setisloading]=useState(true);
        const [error,seterror]=useState(null);
         
         useEffect(()=>{

             if(starred && starred.length>0){
                 const promises=starred.map(showId=>apiGet(`/shows/${showId}`));

                 Promise.all(promises).then(apiData=>apiData.map(show=>({show})))
                 .then(results=>{
                     setshows(results); 
                    setisloading(false);
                })
                 .catch(err=>{
                     seterror(err.message);
                      setisloading(false);
                    });
             }
             else{
                 setisloading(false);
                 
             }
         }, [starred]);
        return(
        <MainPageLayout>
            {isloading && <div>shows are still loading </div>}
            {error && <div>Error Occured:{error}</div>}
            {isloading && !shows && <div>No Shows Available </div>}
            {!isloading && !error && shows && <ShowGrid data={shows}/>}
        </MainPageLayout>
    )
};
export default Starred;
