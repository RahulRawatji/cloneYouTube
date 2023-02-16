import React from 'react';
import { MdOutlineSubscriptions, MdHomeFilled } from 'react-icons/md';
import {FcFilmReel,FcBusinessman,FcMusic, FcNews, FcSportsMode,FcEnteringHeavenAlive} from 'react-icons/fc';
import {ImFire} from 'react-icons/im';
import {BiMovie} from 'react-icons/bi';
import {SiYoutubegaming} from 'react-icons/si';
import {AiOutlineBulb, AiOutlineLike, AiOutlineHistory, AiOutlinePlaySquare} from 'react-icons/ai';
import {BsClock} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <div className='pl-8 overflow-y-scroll scrollbar-hide' style={{maxHeight:'660px', minWidth:'230px',maxWidth:'230px'}}>
            <div className='flex flex-col gap-4'>
                <ul className='flex flex-col gap-2 border-b-2 pb-5'>
                <Link to={"/"}> <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><MdHomeFilled size={22}/>
                        Home</li></Link>
                    <li className='flex gap-3 hover:bg-gray-100 rounded p-2  cursor-pointer'><FcFilmReel size={22}/>Sorts</li>
                    <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><MdOutlineSubscriptions size={22} />Subscriptions</li>
                </ul>
                <div className='flex flex-col gap-3 border-b-2 pb-5'>
                    <ul className='flex flex-col gap-2'>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><AiOutlineHistory size={22}/>History</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><AiOutlineLike size={22}/>Liked Videos</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><BsClock size={22}/>Watch Later</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><AiOutlinePlaySquare size={22}/>Your Video</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-3 border-b-2 pb-5'>
                    <h2 className='font-bold'>Subsciptions</h2>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcBusinessman size={22}/>Dave Gary</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcBusinessman size={22}/>FreeCodeCamp</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcBusinessman size={22}/>Coder</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcBusinessman size={22}/>MixTune</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcBusinessman size={22}/>Hackit</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-5'>
                    <h2 className='font-bold'>Explore</h2>
                    <ul className='flex flex-col gap-3'>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><ImFire size={22}/>Trending</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcMusic size={22}/>Music</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><BiMovie size={22}/>Movies</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcEnteringHeavenAlive size={22}/>Live</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><SiYoutubegaming size={22}/>Gaming</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcNews size={22}/>News</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><FcSportsMode size={22}/>Sports</li>
                        <li className='flex gap-3 hover:bg-gray-100 rounded p-2 cursor-pointer'><AiOutlineBulb size={22}/>Learning</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar