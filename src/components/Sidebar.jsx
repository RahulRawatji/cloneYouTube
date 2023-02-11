import React from 'react';
import { MdOutlineSubscriptions, MdHomeFilled } from 'react-icons/md';
import {FcFilmReel,FcBusinessman,FcMusic, FcNews, FcSportsMode,FcEnteringHeavenAlive} from 'react-icons/fc';
import {ImFire} from 'react-icons/im';
import {BiMovie} from 'react-icons/bi';
import {SiYoutubegaming} from 'react-icons/si';
import {AiOutlineBulb} from 'react-icons/ai';

const Sidebar = () => {

    return (
        <div className='pl-8 overflow-y-scroll scrollbar-hide' style={{maxHeight:'660px', minWidth:'250px',maxWidth:'250px'}}>
            <div className='flex flex-col gap-3'>
                <ul className='gap-2 flex flex-col gap-3 border-b-2 pb-5'>
                    <li className='flex gap-5'><MdHomeFilled size={22}/>
                        Home</li>
                    <li className='flex gap-5'><FcFilmReel size={22}/>Sorts</li>
                    <li className='flex gap-5 items-center'><MdOutlineSubscriptions size={22} />Subscriptions</li>
                </ul>
                <div className='flex flex-col gap-3 border-b-2 pb-5'>
                    <h2 className='font-bold'>Subsciptions</h2>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-5'><FcBusinessman size={22}/>Dave Gary</li>
                        <li className='flex gap-5'><FcBusinessman size={22}/>FreeCodeCamp</li>
                        <li className='flex gap-5'><FcBusinessman size={22}/>Coder</li>
                        <li className='flex gap-5'><FcBusinessman size={22}/>MixTune</li>
                        <li className='flex gap-5'><FcBusinessman size={22}/>Hackit</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 border-b-2 pb-5'>
                    <h2 className='font-bold'>Subsciptions</h2>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-5'><FcBusinessman size={22}/>Dave Gary</li>
                        <li className='flex gap-5'><FcBusinessman size={22}/>FreeCodeCamp</li>
                        <li className='flex gap-5'><FcBusinessman size={22}/>Coder</li>
                        <li className='flex gap-5'><FcBusinessman size={22}/>MixTune</li>
                        <li className='flex gap-5'><FcBusinessman size={22}/>Hackit</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-bold'>Explore</h2>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-5'><ImFire size={22}/>Trending</li>
                        <li className='flex gap-5'><FcMusic size={22}/>Music</li>
                        <li className='flex gap-5'><BiMovie size={22}/>Movies</li>
                        <li className='flex gap-5'><FcEnteringHeavenAlive size={22}/>Live</li>
                        <li className='flex gap-5'><SiYoutubegaming size={22}/>Gaming</li>
                        <li className='flex gap-5'><FcNews size={22}/>News</li>
                        <li className='flex gap-5'><FcSportsMode size={22}/>Sports</li>
                        <li className='flex gap-5'><AiOutlineBulb size={22}/>Learning</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar