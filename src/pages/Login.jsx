import React,{useContext, useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import loginImg from '../assets/portada.jpg'
import axios from "axios"
import { UserContext } from '../context/UserContext'


const Login = () => {

    const [input, setInput] =useState({
        email:'',
        password:''
    })
    const navigate = useNavigate()

    const handleInput = (e) => {
        setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
    }

    const {setUser,user} =useContext(UserContext)

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            await axios.post("https://www.tuinvernadero.xyz/api/auth/login",input).then((response) =>{
                document.cookie = `token=${response.data.tokenSession}; max-age=${3600*3};path=/;samesite=stric`
                setUser(response.data.data[0])
                window.localStorage.setItem('loggedUser',JSON.stringify(response.data.data[0]))
            })
            navigate('/dashboard')
        } catch (e) {
            console.log(e)
        }
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={loginImg} alt="" />
        </div>
        <div className='bg-gray-200 flex flex-col justify-center'>
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8'>
                <h2 className='text-4xl text-[#505568] font-bold text-center'>Iniciar sesión</h2>
                <div className='flex flex-col text-[#505568] py-2'>
                    <label>Correo</label>
                    <input onChange={(e)=>{handleInput(e)}} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="Correo"/>
                </div>
                <div className='flex flex-col text-[#505568] py-2'>
                    <label>Contraseña</label>
                    <input onChange={(e)=>{handleInput(e)}} className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="Contraseña"/>
                </div>
                
                <div className='flex justify-between text-gray-400 py-2'>
                    <p className='flex items-center'><input className='mr-2' type="checkbox" /> Recuerdame</p>
                    <Link to={'/registro'} className="font-medium  hover:underline text-[#406343]"> Registrate</Link>
                </div>
                <button className='w-full my-5 py-2 bg-[#406343] shadow-lg text-white font-semibold rounded-lg' >Ingresar</button>
            </form>
        </div>
    </div>
  );
}

export default Login;
