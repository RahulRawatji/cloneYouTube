import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { VIDEOAPI } from '../utils/constant';
import VideoCard from './VideoCard';

const VideoContainer = () => {
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
    <div className='flex flex-wrap overflow-y-scroll scrollbar-hide justify-center' style={{ maxHeight: '610px' }} >
      {data.map(videoData => (
        <Link to= {`/watch?v=${videoData.id}`}>
          <VideoCard key={videoData.id} info={videoData} />
        </Link>
        ))}
    </div>
  )
}

export default VideoContainer