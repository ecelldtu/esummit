'use client';
import styles from './page.module.css'
import { useState } from 'react';
import Project from '../../components/event';
import Modal from '../../components/modal';

const projects = [
  {
    title: "Shark Tank",
    src: "extra.png",
    color: "#000000"
  },
  {
    title: "Execute Hackathon",
    src: "extra.png",
    color: "#000000"
  },
  {
    title: "Design-A-Thon",
    src: "extra.png",
    color: "#000000"
  },
  {
    title: "B-Plan",
    src: "extra.png",
    color: "#000000"
  },
  {
    title: "Marketing Maverick",
    src: "extra.png",
    color: "#000000"
  },
  {
    title: "E-Cell Conclave",
    src: "extra.png",
    color: "#000000"
  },
]

export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })

  return (
    <div>
      <h2 className="max-w-7xl text-white pl-4 mx-auto text-4xl mt-36 md:mt-48 md:mb-32 md:text-7xl font-bold font-Nova">
        Competitions
      </h2>
      <event className={styles.event}>
        <div className={styles.body}>
          {
            projects.map((project, index) => {
              return <Project index={index} title={project.title} setModal={setModal} key={index} />
            })
          }
        </div>
        <Modal modal={modal} projects={projects} />
      </event>
    </div>

  )
}
