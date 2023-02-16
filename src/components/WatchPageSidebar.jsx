import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VIDEOAPI } from '../utils/constant';

const WatchPageSidebar = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    const response = await fetch(VIDEOAPI);
    const data = await response.json();
    setData(data.items);
  }

  return (
    <div className='flex flex-wrap gap-4'>
      {data.slice(0,10).map(videoData => {
         const {snippet} = videoData;
         const {thumbnails, title, channelTitle} = snippet;
       return (
        <Link to= {`/watch?v=${videoData.id}`}>
         <div className='my-1 cursor-pointer flex ' style={{ maxHeight:'8rem'}}>
             <img className="hover:scale-110 duration-300 rounded-lg" style={{maxHeight:'100px'}} src={thumbnails.medium.url}/>
             <div className='px-6'>
             <h2 className='py-2 font-bold' style={{fontSize:'.7rem', fontFamily:'sans-serif'}}>{title}</h2>
             <h4 className='text-xs text-gray-700'>{channelTitle}</h4>
             </div>      
         </div>
         </Link>
        )
    })}
    </div>
  )
}

export default WatchPageSidebar