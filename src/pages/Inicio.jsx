
import { RiSoundcloudLine } from "react-icons/ri";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const Inicio = () => {

    
    const data = [
      {
        name: 'Miercoles',
        uv: 4000,
        ppm: 2400,
        amt: 2400,
      },
      {
        name: 'Jueves',
        uv: 3000,
        ppm: 1398,
        amt: 2210,
      },
      {
        name: 'Viernes',
        uv: 80,
        ppm: 120,
        amt: 2290,
      },
      {
        name: 'Sabado',
        uv: 2780,
        ppm: 3908,
        amt: 2000,
      },
      {
        name: 'Domingo',
        uv: 1890,
        ppm: 4800,
        amt: 2181,
      },
      {
        name: 'Lunes',
        uv: 2390,
        ppm: 3800,
        amt: 2500,
      },
      {
        name: 'Martes',
        uv: 3490,
        ppm: 4300,
        amt: 2100,
      },
    ];

  return (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-4 gap-5 w-full px-20 py-5'>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>24</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Nivel de Co2</h1>
                <h1 className=' text-gray-600 font-bold text-rm text-center'>Co2 del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>17</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Temperatura</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Temperatura del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>83%</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Humedad</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Humedad del ambiente</h1>
            </div>
        </div>
        <div className='bg-white rounded-xl shadow-lg p-5 py-3'>
            <div className='flex justify-center gap-12'>
                <span className=' text-black font-semibold text-7xl pt-2'>24</span>
                <RiSoundcloudLine className='h-24 w-24 text-[#406343]'/>
            </div>
            <div className='grid items-center justify-center'>
                <h1 className=' text-black font-bold text-3xl'>Temperatura</h1>
                <h1 className=' text-gray-600 font-bold text-rm'>Temperatura del agua</h1>
            </div>
        </div>
    </div>
    <div className=" grid grid-cols-1 rounded-xl shadow-lg">
        <div className='bg-white pt-5 rounded-lg mx-20 grid grid-cols-2 items-center justify-center'>
            <h1 className="text-4xl font-bold text-[#406343] text-center flex items-center justify-center pl-5 pb-5 col-span-2"> Resumen Diario</h1>
            <LineChart width={600}height={500}data={data}margin={{top: 5,right: 30,left: 20,bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ppm" stroke="#8884d8" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
            <LineChart width={600}height={500}data={data}margin={{top: 5,right: 30,left: 20,bottom: 5}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ppm" stroke="#8884d8" activeDot={{ r: 8 }}/>
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
        </div>
    </div>
    </>
  )
}

export default Inicio