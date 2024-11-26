import React from 'react'
import Day1 from "./Day1"
import Day2 from "./Day2"
import Day3 from "./Day3"
import HyperText from '../../components/magicui/hyper-text'

export default function page() {
  return (
    <div>
      <HyperText
        className="text-4xl text-white md:text-7xl mt-24 md:my-24 font-bold font-Nova uppercase"
        text="itinerary"
      />
      <Day1 />
      <Day2 />
      {/* <Day3 /> */}
    </div>
  )
}
