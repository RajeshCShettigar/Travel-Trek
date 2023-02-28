import { useState,useEffect } from "react";

const useFetch=(url)=>{
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{

        const fetchData=async()=>{
            setLoading(true);
            try{
                const resp=await fetch(url);
                
                if(!resp.ok){
                    setError('Failed to fetch');
                    alert('Failed to fetch');
                    alert(error);
                }
                const result=await resp.json();
                setLoading(false);
                setData(result.data);
            }catch(error){
                setError(error.message);
                setLoading(false);
            }
        }
        fetchData();
        },[url]);
    return {data,error,loading};
}

export default useFetch;
    

