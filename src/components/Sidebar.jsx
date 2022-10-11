
import React, { useContext,useState } from 'react'
import { RiMenu3Fill, RiCloseLine,RiLogoutBoxRLine,RiHome3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { UserContext } from '../context/UserContext'
const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
    const {setAuth,auth,user} =useContext(UserContext)

    const handleLogout = () =>{
      setAuth(false)
      window.localStorage.removeItem('loggedUser') 
    }


  return (
    <div
      className={`fixed top-0 w-3/4 xl:left-0 md:w-96 h-full bg-[#32502E] p-8 flex flex-col justify-between z-50 transition-all ${
        showMenu ? "left-0" : "-left-full"
      }`}
    >
      <div>
        <h1 className="text-2xl uppercase font-bold mb-10">Tu logo</h1>
        <ul>
          <span className="text-white text-rm font-semibold ">Dashboard</span>
          <li>
            <Link to={'/dashboard/inicio'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
              Inicio</Link>
          </li>
          <li>
          <Link to={'../dashboard/invernaderos'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
              Invernadero</Link>
          </li>
          <li>
          <Link to={'../dashboard/cultivos'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
              Cultivos</Link>
          </li>
          <li>
          <Link to={'../dashboard/camas'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
              Camas</Link>
          </li>
          <li>
          <Link to={'../dashboard/perfil'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
              Perfil</Link>
          </li>
        </ul>
        <ul className="py-5">
          <li>
          <span className="text-white text-rm font-semibold ">Indicadores</span>
          </li>
          <li>
            <Link to={'/dashboard/inicio'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
              Temperatura del agua</Link>
          </li>
          <li>
          <Link to={'/dashboard/inicio'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
          Temperatura del ambiente</Link>
          </li>
          <li>
          <Link to={'/dashboard/inicio'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
          Nivel de Co2</Link>
          </li>
          <li>
          <Link to={'/dashboard/inicio'} className='flex items-center gap-4 text-[#ECE7B4] hover:bg-[#406343] transition-colors py-2 px-4 rounded-lg font-bold text-[20px]'>              <RiHome3Line />
              Nivel de humedad</Link>
          </li>
        </ul>

      </div>
      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 object-cover rounded-full ring-4 ring-white"
          src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg"
          alt=""
        />
        <div>
          <h5 className="font-medium text-[#ECE7B4]">{user.nombre} {user.apellido}</h5>
          <p className="text-sm text-white">Calama</p>
        </div>

        <Link to={'/'} onClick={handleLogout}><RiLogoutBoxRLine className="text-white h-10 w-10"/></Link>
      </div>
   
      <button
        onClick={toggleMenu}
        className="fixed bottom-6 right-6 bg-gray-100 rounded-full p-4 xl:hidden"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </div>
  );
};

export default Sidebar;
