import React, { useContext, useState } from 'react'
import { RiSoundcloudLine } from "react-icons/ri";
import { UserContext } from '../context/UserContext'
const Perfil = () => {
  
  const {user,setUser} =useContext(UserContext)
  const [input, setInput] =useState(user)



  const handleInput = (e) => {
    setInput((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
        await axios.patch(`https://www.tuinvernadero.xyz/api/usuarios/${user.id_usuario}`,input).then((response) =>{
            setUser(response.data.data[0])
            window.localStorage.setItem('loggedUser',JSON.stringify(response.data.data[0]))
        })
        navigate('/dashboard/perfil')
    } catch (e) {
        console.log(e)
    }
}
  return (
    <>
    <div className='w-full px-20 py-5  rounded-lg shadow-lg '>
    <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
    <h6 class="text-black font-bold mt-3 mb-6 uppercase text-xl text-center">
          Información de usuario
        </h6>

        <form onSubmit={handleSubmit}>
          <div class="flex flex-wrap pb-5">
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="text-1xl text-black font-bold text-center mb-2" htmlfor="grid-password">
                  Rut
                </label>
                <input onChange={(e)=>{handleInput(e)}} className="pt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="rut" type="text" placeholder="Correo" value={user.rut}/>

              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="text-1xl text-black font-bold text-center mb-2" htmlfor="grid-password">
                  Correo
                </label>
                <input onChange={(e)=>{handleInput(e)}} className="pt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="email" type="text" placeholder="Correo" value={user.email} />
                
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="text-1xl text-black font-bold text-center mb-2" htmlfor="grid-password">
                  Nombre
                </label>
                <input onChange={(e)=>{handleInput(e)}} className="pt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="nombre" type="text" placeholder="Correo" value={user.nombre}/>

              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="text-1xl text-black font-bold text-center mb-2" htmlfor="grid-password">
                  Apellido
                </label>
                <input onChange={(e)=>{handleInput(e)}} className="pt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="apellido" type="text" placeholder="Correo" value={user.apellido}/>

              </div>
            </div>
          </div>
          <div className='flex items-center justify-center pb-5'>
            <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full lg:w-6/12' onSubmit={''}>Actualizar</button>
          </div>
        </form>


        <div class="border-t border-gray-200 border-2"></div>
        <div class="flex flex-wrap pt-5">
          <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="text-1xl text-black font-bold text-center mb-2" htmlfor="grid-password">
                  Contraseña
                </label>
                <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value=''/>
              </div>
            </div>
            <div class="w-full lg:w-6/12 px-4">
              <div class="relative w-full mb-3">
                <label class="text-1xl text-black font-bold text-center mb-2" htmlfor="grid-password">
                  Nueva Contraseña
                </label>
                <input type="email" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" value=''/>
              </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Perfil