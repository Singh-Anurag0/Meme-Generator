import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useGif from '../hooks/useGif';
import Spinner from './Spinner';
const API_KEY= process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
 
  const{gif, loading, fetchData} = useGif();

  function clickHandler(){

    fetchData();

  }
  return (
    <div className='w-1/2  bg-green-400 rounded-lg border border-black
    flex flex-col items-center mt-[15px] gap-y-5'>
      
      <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'> A Random Gif</h1>
      {
        loading ? (<Spinner/>):(<img src={gif} width="450"/>)
      }
      

      <button onClick={clickHandler}
      className=' w-10/12 bg-yellow-200 text-l py-2 rounded-lg mb-[20px] '>
        Generate
      </button>
      
    </div>
  )
}

export default Random