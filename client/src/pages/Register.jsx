import React,{useState,useContext} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
 
const Register = () => {
  const [credentials,setCredentials]=useState({
    userName:undefined,
    email:undefined,
    password:undefined,
  });

  const {dispatch}=useContext(AuthContext);
  const navigate=useNavigate();

  const handleChange=(e)=>{
      setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
        const res=await fetch('http://localhost:8080/api/auth/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',  
            },
            body:JSON.stringify(credentials),
        });

        const result=await res.json();
        if(!res.ok)alert(result.message);
        dispatch({type:'REGISTER_SUCCESS',payload:result.data});
        navigate('/login');
    }catch(err){
        alert(err.message);
    }

  }

  return (
    <section class="bg-pink-300">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div class="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Create your account
                </h1>
                <form class="space-y-4 md:space-y-6"
                onClick={(e)=>handleSubmit}>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                        <input type="text" name="userName" id="userName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name" required=""onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""onChange={handleChange}/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""onChange={handleChange}/>
                    </div>
                    <button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                    <p class="text-sm font-light text-gray-500">
                        Already have an account? <Link to="/login" class="font-medium text-primary-600 hover:underline">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Register