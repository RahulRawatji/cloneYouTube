import React, {useEffect, useState} from 'react';

import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const Body = () => {
   
  return (
    <div className='overflow-hidden'> 
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default Body