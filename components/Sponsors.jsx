import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
];


const Sponsors = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  return (
    <div className="relative m-auto grid items-center">

      <div style={{width: "calc(250px * 11)"}} className="carousel11 flex">

        <div className="text-base text-white">
          1
        </div>

        <div className="text-base text-white">
          2
        </div>

        <div className="text-base text-white">
          3
        </div>

        <div className="text-base text-white">
          4
        </div>

        <div className="text-base text-white">
          5
        </div>

        <div className="text-base text-white">
          6
        </div>

        <div className="text-base text-white">
          7
        </div>

        <div className="text-base text-white">
          8
        </div>

        <div className="text-base text-white">
          9
        </div>

        <div className="text-base text-white">
          10
        </div>

        <div className="text-base text-white">
          11
        </div>
      </div>
    </div>


<AliceCarousel mouseTracking={true} items={items} />
  )
}

export default Sponsors
