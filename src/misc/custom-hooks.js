import { useReducer,useEffect,useState } from "react";
import { apiGet } from './config';


function usePersistedReducer(reducer,initialstate,key){

                const [state,dispatch]=useReducer(reducer,initialstate,initial=>{
                    const persisted=localStorage.getItem(key);
                    return persisted?JSON.parse(persisted):initial;
                });

     useEffect(()=>{
         localStorage.setItem(key,JSON.stringify(state));
     },[state,key]);

     return [state,dispatch];

}

function ShowReducer(prevState,action){
    switch(action.type){
        case 'ADD': { return [...prevState,action.showId] }
    
         case 'REMOVE':{ return prevState.filter((showId=>showId!==action.showId))}

    default: return prevState;
    }
}

export function useShows(key='shows'){
    return usePersistedReducer(ShowReducer,[],key);
}

export function useLastQuery(key='LastQuery'){
    const [input,seInput]=useState(()=>{
        const persisted=sessionStorage.getItem(key);
        return persisted?JSON.parse(persisted):" ";
    });

    const setpersistedinput=(newState)=>{
        seInput(newState);
        sessionStorage.setItem(key,JSON.stringify(newState));
    };

    return [input,setpersistedinput];
}

const reducer = (prevState, action) => {
    

    switch (action.type) {
        
        case 'FETCH_SUCCESS':{
             return { isloading: false, error:null, show:action.show}}

        case 'FETCH_FAILED':{ return {...prevState,isloading:false,error:action.error}}

        default : return prevState;
    }
}


export function useShow(showId){

    const [state,dispatch] = useReducer(reducer,{
        show:null,
        isloading:true,
        error:null
       });

    useEffect(()=>{
        let isMounted=true;
          apiGet(`/shows/${showId}?embed[]=seasons&embed[]=cast`).then(results=>{
            //    setshow(results);
            setTimeout(()=>{
                if(isMounted){
               dispatch({type:'FETCH_SUCCESS',show:results})
                }
        },1000)
        }
              ).catch(err=>{
                  if(isMounted){
                    dispatch({type:'FETCH_FAILED',error:err.message})

                  }
              });

            return () => {
                isMounted=false;
            }
    },[showId]);

    return state;
}

