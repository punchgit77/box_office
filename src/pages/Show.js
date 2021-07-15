/* eslint-disable no-console */
import  React,{ useEffect,useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';


const initialState={

 show:null,
 isloading:true,
 error:null
}

const reducer=(prevState,action)=>{
    switch(action.type){
        // eslint-disable-next-line no-undef
        case 'FETCH_SUCCESS':{ return {isloading:false, error:null, show:show.action}}

        case 'FETCH_FAILED':{ return {...prevState,isloading:false,error:action.error}}

        default : return prevState;
    }
}


const Show = () => {
    
    const { id }=useParams();

    const [{show,isloading,error},dispatch]=useReducer(reducer,initialState);
    // const [show,setshow]= useState(null);
    // const [isloading,setisloading]=useState(true);
    // const [error,seterror]=useState(null);
    

    useEffect(()=>{
        let isMounted=true;
          apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
              
            setTimeout(()=>{
                if(isMounted){
               dispatch({type:'FETCH_SUCCESS',show:results})
                }
        },2000)
        }
              ).catch(err=>{
                  if(isMounted){
                    dispatch({type:'FETCH_FAILED',error:err.message})

                  }
              })

            return () => {
                isMounted=false;
            }
    },[id])

    // eslint-disable-next-line no-console
    console.log('show',show);
    // eslint-disable-next-line no-console
    console.log('isloading',isloading);

    if(isloading){
        return <div>Data is being loaded</div>
    }

    if(error){
        return <div>error occured:{error}</div>
    }
    return (
        <div>
            this is show
        </div>
    )
}

export default Show;
