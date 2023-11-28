import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import plusJakartaSans from '../styles/fonts'
import ExternalHyperlink from '../components/external_hyperlink'
import Profile from '../components/profile'
import OverviewCard from '../components/overview_card'
import Timeline from '../components/timeline/timeline';
import Photobook from '../components/photobook'
import Projects from '../components/projects'
import TimelineNew from '../components/timeline_new'
import NavBar from '../components/navbar'
import Flow from '../components/timeline_flow'
import Contact from '../components/contact'


export default function Home() {

  return (
    <div className="w-screen overflow-visible" className={plusJakartaSans.className}>
      <NavBar ids={["timeline", "projects", "photos", "contact"]} />
      <Profile />
      <TimelineNew />
      
      <Projects />
      <Photobook />
      <Contact />
      <div className="w-full h-[400px]"></div>
    </div>
  )
}
