import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdOutlineCelebration, MdOutlineEmojiEvents, MdEmojiEvents} from 'react-icons/md'
import {BiLaugh} from 'react-icons/bi'
import {SiLionair} from 'react-icons/si'
import {VscSymbolEvent} from 'react-icons/vsc'
const Itenary = () => {
    return (
        <div className="bg-[url('/123STARS.jpg')] bg-cover bg-center bg-scroll 2xl:mx-auto">
          <div className="bg-background/90 w-screen">
            <h1 className="ttext-2xl lg:text-5xl font-bold text-white ease-in duration-200 bg-pink p-5 pl-10">
              Itenary
            </h1>

            {/*======================= day 1 ==================== */}
            <div className="place-items-center px-12 md:gap-2">

                <h1 className="text-6xl font-bold text-white pl-16 pt-8">
                    Day 1
                </h1>
                <h1 className="text-2xl font-bold text-white pl-16 ">
                4th February 2023
                </h1>

            <VerticalTimeline className="mx-auto">
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: '#8B2097', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #fff' }}
    date="10:30-12:00"
    iconStyle={{ background: '#8B2097', color: '#fff' }}
    icon={<MdOutlineCelebration />}
  >
    <h3 className="vertical-timeline-element-title">Inauguration-LDS Panel 1</h3>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: '#8B2097', color: '#fff' }}
    contentStyle={{ background: '#8B2097', color: '#fff' }}
    icon={<SiLionair />}
  >
    <h3 className="vertical-timeline-element-title">LDS Panel-2</h3>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#8B2097', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #fff' }}
    date="2008 - 2010"
    iconStyle={{ background: '#8B2097', color: '#8B2097'}}
    icon={<SiLionair />}
  >
    <h3 className="vertical-timeline-element-title ">Start-up Social</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#8B2097', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #fff' }}
    date="2006 - 2008"
    iconStyle={{ background: '#8B2097', color: '#8B2097' }}
    icon={<SiLionair />}
  >
    <h3 className="vertical-timeline-element-title">Lecture Series</h3>
   
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#8B2097', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #fff' }}
    date="April 2013"
    iconStyle={{ background: '#8B2097', color: '#fff' }}
    // icon={}
  >
    <h3 className="vertical-timeline-element-title">Society Events / Content Creator</h3>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: '#8B2097', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #fff' }}
    date="November 2012"
    iconStyle={{ background: '#8B2097', color: '#fff' }}
    icon={<BiLaugh />}
  >
    <h3 className="vertical-timeline-element-title">Comedy Evening</h3>
    
  </VerticalTimelineElement>
</VerticalTimeline>
            </div>

           {/*======================= day 2 ==================== */}
            <div className="place-items-center px-12 md:gap-2">

<h1 className="text-6xl font-bold text-white pl-16 pt-8">
    Day 2
</h1>
<h1 className="text-2xl font-bold text-white pl-16 ">
5th February 2023
</h1>

<VerticalTimeline className="mx-auto">
<VerticalTimelineElement
className="vertical-timeline-element--work "
contentStyle={{ background: '#8B2097', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid #fff' }}
date="10:30-12:00"
iconStyle={{ background: '#8B2097', color: '#fff' }}
icon={<MdOutlineEmojiEvents />}
>
<h3 className="vertical-timeline-element-title"> Investors Clique - 2</h3>

</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
date="2010 - 2011"
iconStyle={{ background: '#8B2097', color: '#fff' }}
contentStyle={{ background: '#8B2097', color: '#fff' }}
icon={<MdEmojiEvents />}
>
<h3 className="vertical-timeline-element-title">B-Plan</h3>
</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: '#8B2097', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid #fff' }}
date="2008 - 2010"
iconStyle={{ background: '#8B2097', color: '#8B2097'}}
icon={<MdOutlineEmojiEvents />}
>
<h3 className="vertical-timeline-element-title ">Case Study</h3>

</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--work"
contentStyle={{ background: '#8B2097', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid #fff' }}
date="2006 - 2008"
iconStyle={{ background: '#8B2097', color: '#8B2097' }}
icon={<VscSymbolEvent/>}
>
<h3 className="vertical-timeline-element-title">Market Competition</h3>

</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"
contentStyle={{ background: '#8B2097', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid #fff' }}
date="April 2013"
iconStyle={{ background: '#8B2097', color: '#fff' }}
// icon={<SchoolIcon />}
>
<h3 className="vertical-timeline-element-title">Lecture Series</h3>

</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"
contentStyle={{ background: '#8B2097', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid #fff' }}
date="November 2012"
iconStyle={{ background: '#8B2097', color: '#fff' }}
// icon={<SchoolIcon />}
>
<h3 className="vertical-timeline-element-title">Content Creator</h3>

</VerticalTimelineElement>
<VerticalTimelineElement
className="vertical-timeline-element--education"
contentStyle={{ background: '#8B2097', color: '#fff' }}
contentArrowStyle={{ borderRight: '7px solid #fff' }}
date="2002 - 2006"
iconStyle={{ background: '#8B2097', color: '#8B2097' }}
// icon={<SchoolIcon />}
>
<h3 className="vertical-timeline-element-title">Comedy Evening</h3>

</VerticalTimelineElement>
</VerticalTimeline>
</div>


          </div>
        </div>
      );
}

export default Itenary
