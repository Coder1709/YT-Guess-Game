import React, { useEffect, useState } from 'react'
import { useAuth } from '../auth/auth';
import useSWR from 'swr'
import axios from 'axios';
// import youtube from '../api/youtube';
// import fetcher from '../lib/fetcher';




const Songs = () => {
    const { score, setScore } = useAuth();
    const [ytSongs, setYtSongs] = useState(null)


    const incrementScore = () => {
        setScore(score + 1);

    };

    useEffect(() => {
        const apiUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=trending%20hindi%20songs%20&key=AIzaSyBfhQInmH1wqUmBGpQEKsBfPRDYQxBtajA';

        // if you wanna use fetch
        //fetch(apiUrl).then(res => res.json()).then(res => { console.log(res) }).catch(console.log)

        axios.get(apiUrl).then(res => {
            console.log(res)
            setYtSongs(res.data.items);
        }).catch(err => {
            console.log(err)
        })
    }, [])
    const [activeVideo, setActiveVideo] = useState(null);

    const handleVideoHover = (videoId) => {
        setActiveVideo(videoId);
    };

    const handleVideoLeave = () => {
        setActiveVideo(null);
    };



    return (
        <div className='p-3.5  '>
            <h1 className="text-center text-shadow-lg text-4xl rounded-2xl px-3.5 py-3.5 font-bold text-red-500 ">Your Score is {score}</h1>



            <div className="grid grid-cols-2 gap-0 p-20">
                {Array.isArray(ytSongs) && ytSongs.map(e => {
                    return <div className="w-1/2 h-120 p-2 m-3 b-3 items-center bg-green-100" onMouseEnter={() => handleVideoHover(e.id.videoId)} onMouseLeave={handleVideoLeave}>

                        <iframe width="800" height="600"
                            src={`https://www.youtube.com/embed/${e.id.videoId}?autoplay=1`}>
                        </iframe>

                        <button onClick={incrementScore}>{e.snippet.title}</button>
                    </div>
                })}

            </div>
        </div>

    )
}

export default Songs
