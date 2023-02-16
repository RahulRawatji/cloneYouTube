import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import { BsBell, BsThreeDots } from 'react-icons/bs';
import{ BiLike } from 'react-icons/bi';
import {RiShareForwardLine, RiScissorsFill} from 'react-icons/ri';
import WatchPageSidebar from './WatchPageSidebar';
import CommentsContainer from './CommentsContainer';


const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const [info, setInfo] = useState();
    const [showAll, setShowAll] = useState(320);

    const videoId = searchParams.get("v");

    const VIDEO_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&maxResults=50&key=${import.meta.env.VITE_REACT_APP_API_KEY}`;

    useEffect(() => {
        fetchVideoInfo()
    }, []);

    const showMoreHandler = () =>{
        if(showAll != -1){
            setShowAll(-1);
        }else{
            setShowAll(320)
        }     
    }

    const fetchVideoInfo = async () => {
        const response = await fetch(VIDEO_SEARCH_API);
        const data = await response.json();
        setInfo(data.items[0].snippet);
    }

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className='flex'>
            <div className='mx-8 my-4 px-2 basis-3/4'>
                <iframe width="942" height="530" src={`https://www.youtube.com/embed/${videoId}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <h1 className='font-bold text-xl p-2'>{info?.localized?.title}</h1>
                <div className='my-3 flex justify-between px-3'>
                    <div className='flex items-center gap-3'>
                        <h1 className='px-2 py-1 font-bold'>{info?.channelTitle.toUpperCase()}</h1>
                        <div className='bg-black rounded-3xl px-3 py-2 flex gap-2 items-center cursor-pointer'>
                            <BsBell style={{color:'white'}} size={16} />
                            <span className='text-2xs text-white'>Subscribe</span>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='bg-gray-200 rounded-3xl px-3 py-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'>
                            <BiLike size={16} />
                            <span className='text-2xs'>Like</span>
                        </div>
                        <div className='bg-gray-200 rounded-3xl px-3 py-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'>
                            <RiShareForwardLine size={16} />
                            <span className='text-2xs'>Share</span>
                        </div>
                        <div className='bg-gray-200 rounded-3xl px-3 py-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'>
                            <RiScissorsFill size={16} />
                            <span className='text-2xs'>Clip</span>
                        </div>
                        <div className='bg-gray-200 rounded-3xl px-3 py-2 flex gap-2 items-center cursor-pointer hover:bg-gray-300'>
                            <BsThreeDots size={16} />
                        </div>
                    </div>
                </div>
                <div className='px-3 bg-slate-200 rounded py-5 px-3 text-slate-700'>
                    {info?.description.slice(0,showAll)}
                    <button className='font-bold text-sm px-2 drop-shadow-lg' onClick={showMoreHandler}>Show {showAll> -1 ? "More" : "Less"}</button>
                </div>
                <div>
                <CommentsContainer/>
                </div>
            </div>
            <div className='basis-2/4'>
                    {/* <ButtonList/> */}
                    <WatchPageSidebar/>
            </div>
        </div>
    )
}

export default WatchPage