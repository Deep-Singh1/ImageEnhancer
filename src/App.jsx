import React from 'react'
import Home from './Components/Home'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4 '> 
       <div className='text-center mb-4'>
        <h1 className='font-bold text-5xl text-gray-800'>AI Image Enhancer</h1>
       </div>

       <div className='text-lg text-gray-500 mb-5'>
        Upload your Image and let AI enhance it in seconds!
       </div>
     
     <Home />       
     <p className='mt-4 text-sm text-gray-600'>Powered By @AI</p> 
    </div>
  )
}

export default App