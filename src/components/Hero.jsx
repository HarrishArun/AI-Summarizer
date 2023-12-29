import React from 'react'
import{logo} from'../assets';

const Hero = () => {
  return (
 <header className='w-full flex justify-center items-center flex-col'>

    <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='logo' className='w-28 object-contain'/>
    </nav>
    <h1 className='head_text'>Summarize Articles With <br className='max-md:hidden'/><span className='orange_gradient'>Open AI</span></h1>
    <h2 className='desc'>Simpliy your reading using Summize</h2>
 </header>
  )
}

export default Hero