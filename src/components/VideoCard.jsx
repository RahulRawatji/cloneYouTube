import React from 'react'

const VideoCard = ({info}) => {
    console.log(info);
    const {snippet} = info;
    const {thumbnails, title, channelTitle} = snippet;
  return (
    <div className='m-5' style={{maxWidth:'270px'}}>
        <img src={thumbnails.medium.url} className="rounded-lg"/>
        <h2>{title}</h2>
        <h4 className='text-xs text-gray-700'>{channelTitle}</h4>
    </div>
  )
}

export default VideoCard