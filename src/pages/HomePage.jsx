import React from 'react'
import {Link} from "react-router-dom"
const HomePageV = () => {
    return (
        <>
        <button className=' py-2 px-4  mx-auto pt-10 float-right'>
            <Link to={'/registro'} element=''><h1 className='font-bold text-xl text-black'>Registrarse</h1></Link>   
        </button>
        <button className=' py-2 px-4  mx-auto pt-10 float-right '>
            <Link to={'/login'} element=''><h1 className='font-bold text-xl text-black'>Iniciar sesión</h1></Link>
        </button>
        <header className="bg-[url('./assets/portadav1.jpg')]  bg-no-repeat bg-cover bg-center object-cover bg-fixed w-full p-56 ">
            <div className='grid justify-items-center'>
                <h1 className='text-6xl font-bold text-black '>Comunidad agricola</h1>
                <h2 className='text-3xl text-black pt-5 font-semibold'>Invernaderos Hidroponicos</h2> 
            </div>
        </header>
            <section className="bg-white w-full p-5 pt-16 flex flex-col items-center pb-16 ">
                <h2 className=" text-[#7ACEA4] text-4xl font-bold ">Nuestro productos</h2>  
                    <div className=' space-y-6 pt-16 w-96'>
                        <h3 className='text-black font-bold text-xl'>Frutas y verduras</h3>
                        <p className='font-serif tracking-wide'>Hoy nuestras frutas viajan por el Territorio Nacional para satisfacer clientes de todas las latitudes, nuestros productos tienen como destino los mercados de mayor exigencia y estandares de calidad.</p>
                    </div>
                    <div className=' space-y-6 pt-16 w-96'>
                        <h3 className='text-black font-bold text-xl'>Calidad y tiempo</h3>
                        <p className='font-serif tracking-wide'>Calidad a Tiempo semillas certificadas y las mejores variedades para asegurar la calidad y produccion de nuestros productos, lo que nos permite brindarle a nuestros clientes una mayor flexibilidad y agilidad en nuestros servicios.</p>
                    </div>
            </section>
        <section className="bg-gray-100 py-16 flex flex-col items-center">
            <h2 className=" text-[#7ACEA4] text-4xl pb-16 font-bold ">Nuestros servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 tracking-normal justify-center mx-72 gap-10">
                <div className="space-y-6 w-96 ">
                    <h3 className='text-black font-bold text-xl grid justify-center'>Filtración industrial</h3>
                    <p className='font-serif tracking-wide'>Representamos en Chile los mejores equipos de filtracion industrial para distintas aplicaciones como proteccion de sistemas de osmosis, recuperacion de agua en torres de refrigeracion,proteccion de equipos industriales entre otras</p>
                </div>
                <div className="space-y-6 w-96 ">
                    <h3 className='text-black font-bold text-xl grid justify-center'>Control de olores</h3>
                    <p className='font-serif tracking-wide'>Una amplia gama de sistemas para el control de olores en un formato simple, flexible a la medidas de sus procesos con PI2 technologies para la solucion a estos problemas.</p>
                </div>
                <div className="space-y-6 w-96">
                    <h3 className='text-black font-bold text-xl grid justify-center'>Tratamiento de agua</h3>
                    <p className='font-serif tracking-wide'>Parte importante de los procesos industriales es el control de temperatura. En Chile contamos con la linea completa de REYMSA torres de refrigeracion fabricadas con el mas alto estandar y certificados en eficiencia.</p>
                </div>
            </div>
        </section>
        <footer>
            <div className="bg-[#414141] pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 mx-64 py-14 gap-14">
                    <div className="grid items-center justify-center">
                        <h4 className='text-white text-xl font-bold text-center'>Telefono</h4>
                        <div class="border-t border-[#45C47E] border-2"></div>
                        <p className='text-white text-sm text-center'> 2830192830</p>
                    </div>
                    <div className="space-y-2 grid items-center justify-center">
                        <h4 className='text-white font-bold text-xl text-center'>Email</h4>
                        <div class="border-t border-[#45C47E] border-2"></div>
                        <p className='text-white text-sm text-center'>Mhglobal@Mhglobal.cl</p>
                    </div>
                    <div className="space-y-2 grid items-center justify-center">
                        <h4 className='text-white font-bold text-xl text-center'>Dirección</h4>
                        <div class=" border-t border-[#45C47E] border-2"></div>
                        <p className='text-white text-sm text-center'>Los Cactus #321</p>
                    </div>
                </div>
                <div class="flex-grow border-b border-gray-400"></div>
            </div>
        </footer>
        </>
      );
    };

export default HomePageV