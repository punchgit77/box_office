/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import  React,{ useEffect,useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/config';
import ShowMainData from '../components/show/ShowMainData';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import Cast from '../components/show/Cast';
import { InfoBlock, ShowPageWrapper } from './Show.styled';



const reducer = (prevState, action) => {
    

    switch (action.type) {
        
        case 'FETCH_SUCCESS':{
             return { isloading: false, error:null, show:action.show}}

        case 'FETCH_FAILED':{ return {...prevState,isloading:false,error:action.error}}

        default : return prevState;
    }
}

const initialState={
    show:null,
    isloading:true,
    error:null
   }

const Show = () => {
    
    const { id }=useParams();

     const [{show,isloading,error},dispatch] = useReducer(reducer,initialState);
    //   const [show,setshow]= useState(null);
    // const [isloading,setisloading]=useState(true);
    // const [error,seterror]=useState(null);
    

    useEffect(()=>{
        let isMounted=true;
          apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
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
    },[id]);
//   console.log('show',show);
    // eslint-disable-next-line no-console
    // console.log('show',show);
    // // eslint-disable-next-line no-console
    // console.log('isloading',isloading);

    if(isloading){
        return <div>Data is being loaded</div>
    }

     if(error){
        return <div>error occured:{error}</div>
    }
    return (
        <ShowPageWrapper>
            <ShowMainData image={show.image} name={show.name} rating={show.rating} summary={show.summary} tags={show.genres}/>
            <InfoBlock>
                <h2>Details</h2>
                <Details status={show.status} network={show.network} premiered={show.premiered}/>
            </InfoBlock>

            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons seasons={show._embedded.seasons}/>
            </InfoBlock>

            <InfoBlock>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast}/>
            </InfoBlock>

            
        </ShowPageWrapper>
    
    
    )
}

export default Show;
