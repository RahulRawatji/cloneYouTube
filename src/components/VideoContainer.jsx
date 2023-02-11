import React, {useEffect, useState} from 'react';
import { VIDEOAPI } from '../utils/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
    const [data, setData] =  useState([]);
    useEffect(()=>{
        fetchData()
    },[]);

    const fetchData = async()=>{
        const response =  await fetch(VIDEOAPI);
        const data  =  await response.json();
        setData(data.items);
    }
    console.log(data);  

  return (
    <div className='flex flex-wrap overflow-y-scroll scrollbar-hide' style={{maxHeight:'610px'}} >
        {data.map(videoData=><VideoCard key={videoData.id} info={videoData}/>)}
    </div>
  )
}

export default VideoContainer