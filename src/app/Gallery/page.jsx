import React from 'react'
import Footer from "../../components/Footer"
import Image from "next/image"
import HyperText from '../../components/magicui/hyper-text'

const images = [
    { id: 1, src: '/images/gallery1.JPG', alt: 'Photo 1' },
    { id: 2, src: '/images/gallery2.JPG', alt: 'Photo 2' },
    { id: 3, src: '/images/gallery3.JPG', alt: 'Photo 3' },
    { id: 4, src: '/images/gallery4.JPG', alt: 'Photo 4' },
    { id: 5, src: '/images/g5.JPG', alt: 'Photo 5' },
    { id: 6, src: '/images/g8.JPG', alt: 'Photo 6' },
    { id: 7, src: '/images/g9.JPG', alt: 'Photo 7' },
    { id: 8, src: '/images/g10.JPG', alt: 'Photo 8' },
    { id: 9, src: '/images/g11.JPG', alt: 'Photo 9' },
    { id: 10, src: '/images/g12.JPG', alt: 'Photo 10' },
    { id: 11, src: '/images/g13.JPG', alt: 'Photo 11' },
    { id: 12, src: '/images/g14.JPG', alt: 'Photo 12' },
    { id: 13, src: '/images/g15.JPG', alt: 'Photo 13' },
    { id: 14, src: '/images/g16.JPG', alt: 'Photo 14' },
    { id: 15, src: '/images/g17.JPG', alt: 'Photo 15' },
    { id: 16, src: '/images/g18.JPG', alt: 'Photo 16' },
    { id: 17, src: '/images/g19.JPG', alt: 'Photo 18' },
    { id: 18, src: '/images/g20.JPG', alt: 'Photo 18' },
    { id: 19, src: '/images/g21.JPG', alt: 'Photo 18' },
    { id: 20, src: '/images/g22.JPG', alt: 'Photo 18' },
    { id: 21, src: '/images/g23.JPG', alt: 'Photo 18' },
    { id: 22, src: '/images/g24.JPG', alt: 'Photo 18' },
    { id: 23, src: '/images/g25.JPG', alt: 'Photo 18' },
    { id: 24, src: '/images/g26.JPG', alt: 'Photo 18' },
    { id: 25, src: '/images/g27.JPG', alt: 'Photo 18' },
    { id: 26, src: '/images/g28.JPG', alt: 'Photo 26' },
    { id: 27, src: '/images/g29.JPG', alt: 'Photo 27' },
    { id: 28, src: '/images/g30.JPG', alt: 'Photo 28' },
    { id: 29, src: '/images/g31.JPG', alt: 'Photo 29' },
    { id: 30, src: '/images/g32.JPG', alt: 'Photo 30' },
    { id: 31, src: '/images/g33.JPG', alt: 'Photo 31' },
    { id: 32, src: '/images/g34.JPG', alt: 'Photo 32' },
    { id: 33, src: '/images/g35.JPG', alt: 'Photo 33' },
    { id: 34, src: '/images/g36.JPG', alt: 'Photo 34' },
    { id: 35, src: '/images/g37.JPG', alt: 'Photo 35' },
    { id: 36, src: '/images/g38.JPG', alt: 'Photo 36' },
    { id: 37, src: '/images/g39.JPG', alt: 'Photo 37' },
    { id: 38, src: '/images/g40.JPG', alt: 'Photo 38' },
    { id: 39, src: '/images/g41.JPG', alt: 'Photo 39' },
    { id: 40, src: '/images/g42.JPG', alt: 'Photo 40' },
    { id: 41, src: '/images/g43.JPG', alt: 'Photo 41' },
    { id: 42, src: '/images/g44.JPG', alt: 'Photo 42' },
    { id: 43, src: '/images/g45.JPG', alt: 'Photo 43' },
    { id: 44, src: '/images/g46.JPG', alt: 'Photo 44' },
    { id: 45, src: '/images/g47.JPG', alt: 'Photo 45' },
    { id: 46, src: '/images/g48.JPG', alt: 'Photo 46' },
    { id: 47, src: '/images/g49.JPG', alt: 'Photo 47' },
    { id: 48, src: '/images/g50.JPG', alt: 'Photo 48' },
    { id: 49, src: '/images/g51.JPG', alt: 'Photo 49' },
    { id: 50, src: '/images/g58.JPG', alt: 'Photo 50' },
    { id: 51, src: '/images/g53.JPG', alt: 'Photo 51' },
    { id: 52, src: '/images/g54.JPG', alt: 'Photo 52' },
    { id: 53, src: '/images/g55.JPG', alt: 'Photo 53' },
    { id: 54, src: '/images/g56.JPG', alt: 'Photo 54' },
    { id: 55, src: '/images/g57.JPG', alt: 'Photo 55' },
    { id: 56, src: '/images/g58.JPG', alt: 'Photo 56' },
    { id: 57, src: '/images/g59.JPG', alt: 'Photo 57' },
    { id: 58, src: '/images/g60.JPG', alt: 'Photo 58' },
    { id: 59, src: '/images/g61.JPG', alt: 'Photo 59' },
    { id: 60, src: '/images/g62.JPG', alt: 'Photo 60' },
    { id: 61, src: '/images/g63.JPG', alt: 'Photo 61' },
    { id: 62, src: '/images/g64.JPG', alt: 'Photo 62' },
    { id: 63, src: '/images/g65.JPG', alt: 'Photo 63' },
    { id: 64, src: '/images/g66.JPG', alt: 'Photo 64' },
    { id: 65, src: '/images/g67.JPG', alt: 'Photo 65' },
    { id: 66, src: '/images/g68.JPG', alt: 'Photo 66' },
    { id: 67, src: '/images/g69.JPG', alt: 'Photo 67' },
    { id: 68, src: '/images/g70.JPG', alt: 'Photo 68' },
    { id: 69, src: '/images/g71.JPG', alt: 'Photo 69' },
    { id: 70, src: '/images/g72.JPG', alt: 'Photo 70' }
];

export default function Photos() {
    return (
        <div>
            <HyperText
            className="text-4xl text-white md:text-7xl my-24 font-bold font-Nova uppercase"
                text="GALLERY"
            />
            <div id="gallery" className="columns-3 columns-[33%] p-[1vw] mt-[10px] ">
                {images.map((image) => (
                    <div key={image.id} className='py-[12px] cursor-pointer hover:transition-all hover:ease-out rounded-xl'>
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className='w-[100%] rounded-xl'
                            loading="lazy"
                            width={400}
                            height={120}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
