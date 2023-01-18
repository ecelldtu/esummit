import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
function TimeLineElement({
  icon,
  title,
  date,
}: {
  icon: any;
  title: string;
  date: string;
}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work text-white "
      contentStyle={{ background: "#8B2097", color: "white" }}
      contentArrowStyle={{ borderRight: "7px solid white" }}
      date={date}
      iconStyle={{ background: "#8B2097", color: "#fff" }}
      icon={icon}
    >
      <h3 className=" text-white">{title}</h3>
    </VerticalTimelineElement>
  );
}

export default TimeLineElement;
