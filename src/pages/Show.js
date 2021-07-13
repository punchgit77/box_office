import React,{ useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import { apiGet } from '../misc/config';

const Show = () => {

    const {id}=useParams();


    const [show,setshow]= useState(null);
    const [isloading,setisloading]=useState(true);
    const [error,seterror]=useState(null);

    useEffect(()=>{
        let isMounted=true;
        setisloading(false);
          apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results=>{
              
            setTimeout(()=>{
                if(isMounted){
            setshow(results);
            setisloading(false);
        }
        },2000)
        }
              ).catch(err=>{
                  if(isMounted){
                      seterror(err.message);
                      setisloading(false);
                  }
              })

            return () => {
                isMounted=false;
            }
    },[id])

    // eslint-disable-next-line no-console
    console.log('show',show)

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

export default Show
