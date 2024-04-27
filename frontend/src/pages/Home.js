import React from 'react';
// import Select from 'react-select';
import YouTubePlayer from './YouTubePlayer';
import Navbar from './Navbar';
import Map from './Map';

export default function Home() {
    const normalVideoId = '6LQ8mvxLPMI';

    return <>
        <div className='mixPage'>
            <Navbar />
            <Map />
            <div className='livePage'>
                <div className='centeredPlayer'>
                    <YouTubePlayer videoId={normalVideoId} />
                </div>
            </div>


        </div>
    </>
}
