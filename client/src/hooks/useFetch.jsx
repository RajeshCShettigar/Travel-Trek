import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{

        const fetchData=async()=>{
            setLoading(true);
            try{
                const res=await fetch(url);
                
                if(!res.ok){
                    setError('Failed to fetch');
                    //alert(error);
                }
                const result=await res.json();
                setLoading(false);
                setData(result.data);
            }catch(error){
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData();
        },[url]);
    return {data,error,loading};
}

export default useFetch;
    

