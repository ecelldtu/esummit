import React from 'react'

export default function Map() {
    return (
        <div className='bg-black'>
            <h1 className='text-center text-5xl w-full text-white bg-violet-900/80 py-4 font-CyberGraph'>MAP</h1>
            <iframe src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Delhi%20Technological%20University+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="screen"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-80 m-auto"
            ></iframe>
        </div>
    )
}
