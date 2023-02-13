import React, {useEffect, useState} from 'react';

import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const Body = () => {
   
  return (
    <div className='overflow-hidden mx-5'> 
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default Body