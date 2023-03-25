import React,{useState,useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from '../context/AuthContext';

const Login = () => {
  const [credentials,setCredentials]=useState({
    email:undefined,
    password:undefined,
  });

  const handleChange=(e)=>{
    setCredentials(prev=>({...prev,[e.target.id]:e.target.value}));
  }
  const dispatch=useContext(AuthContext);
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();

    dispatch({type:'LOGIN_START'});
    try{
      const res=fetch('http://localhost:9000/auth/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        credentials:'include',
        body:JSON.stringify(credentials),
      });

      const result=await res.json();
      //console.log(result);
      if(!res.ok)
         alert(result.message);
      
      dispatch({type:'LOGIN_SUCCESS',payload:result.data});
      console.log(res.data);
      navigate('/home');
    }catch(err){
      dispatch({type:'LOGIN_FAILURE',payload:err.message});
      //alert(err.message);
    }
  }
  return (
    <section className="bg-login bg-cover w-full h-full">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" name="password" id="password" placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""onChange={handleChange}/>
                    </div>
                    <button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign In</button>
                    <p className="text-sm font-light text-gray-900 bg-gray-100">
                        Don’t have an account yet? <Link to="/register" className="font-medium text-pink-600 hover:underline">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Login;