import { useReducer,useEffect } from "react";

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

