import React from 'react'

const VideoCard = ({info}) => {
    const {snippet} = info;
    const {thumbnails, title, channelTitle} = snippet;
  return (
    <div className='m-5 cursor-pointer' style={{maxWidth:'16rem'}}>
        <img className="hover:scale-110 duration-300 rounded-lg" src={thumbnails.medium.url}/>
        <h2 className='py-2 font-bold' style={{fontSize:'.9rem', fontFamily:'sans-serif'}}>{title}</h2>
        <h4 className='text-xs text-gray-700'>{channelTitle}</h4>
    </div>
  )
}

export default VideoCard