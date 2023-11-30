import { useState } from 'react'
import pix from "../../src/assets/man.png"
import Notify from '../Notify'
 
const Component = () => {
  const [state] = useState<number>(1)

  const randColor = () => {
    return (
      "#" + 
      Math.floor(Math.random() * 16777215).toString(16)
    )
  }
  return (
    <div>
      
      <div className= {
        `min-h-[400px] rounded-sm `
      }
      
      style = {{
        //  backgroundColor: `${randColor()}`,
        borderRadius : "5px",
        color: "black"
      }}>
      <div className='flex flex-col'>
        <div className='w-full h-[300px] relative'>
          <div>
          <div className='absolute top-[50%] bg-white p-3 rounded-[50%]'><a /></div>
          </div>
          
        <img  src= {pix}
        className='w-full h-[300px] object-cover rounded-[15px]' />
          <div className='absolute top-[50%] left-1 bg[rgba(225, 225, 225, 0.8)]  bg-white p-3 rounded-[50%] rotate'><a /></div>
        
        </div>
        <div className='flex justify-between mt-2'>
          <h2 className='font-bold capitalize text-[17px]'>name</h2>
          <p className='text-gray-500'> 3 Friends</p>
        </div>
        <span>Profile</span>
       <div className='w-full'>
       <button className='mt-4 py-2 px-4 text-[15px]
       text-white bg-purple-600 rounded-sm' >Add friend</button>
       </div>
      </div>
      </div></div>
  )
}


const Home = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-4 gap-6 '>
      <div className='fixed ml-4 z-10'>
        <Notify />
      </div>
      <Component />

      <Component />
      <Component />
      <Component />
      <Component />

    </div>
  )
}

export default Home;