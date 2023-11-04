import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import poppins from '../styles/fonts'
import ExternalHyperlink from '../components/external_hyperlink'
import Profile from '../components/profile'
import OverviewCard from '../components/overview_card'
import Timeline from '../components/timeline/timeline';
import Photobook from '../components/photobook'


export default function Home() {

  return (
    <div className={poppins.className}>
      <Profile />
      <Timeline>
        <div className='w-full h-auto flex flex-col relative'>
          <div className="flex flex-col absolute w-full h-full items-center justify-between">
          
          
          </div>
          <div className="flex flex-col items-start py-[6px] pl-1">
            <h2 className="text-[10px] font-normal text-neutral-400 flex-grow leading-none">May, 2025</h2>
            <h2 className="text-[10px] font-normal text-amber-300 flex-grow leading-none">In Progess</h2>
          </div>
          <span className="flex flex-col pt-4 pb-1">
            <svg className="fill-neutral-400 h-[20px] w-auto inline-block hidden" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="250 0 1166.2 886.1"><path d="M307.4,73.6v448h86.4c-15.8-7.6-26.5-24.7-26.5-41.5c0.3-82.3,202.2-242,201.8-293c0-16.5-18.6-21.6-38.9-21.6c-42,0.1-159.5,54.3-159.7,133.6c0.1,29,17.1,44.8,50.2,52.8l2.4,0.5l-2.1,1.3c-8.4,4.8-17.9,7.3-27.6,7.2c-27.4,0-54.8-19.2-54.8-51.6c0.1-31.3,64.3-158,208-158.3c7.4,0,14.8,0.6,22.2,1.7l-68.9-79.1L307.4,73.6L307.4,73.6z M662.1,73.6l-73.4,84.3c23.4,9.2,32.5,25.7,32.6,39.3c-0.3,58.7-206.1,243.1-205.7,293c0.2,10.8,4.3,12.4,16,12.6c93.6,0.3,264-228.9,313.4-295c19.7-3.4,19.5-0.8,40.3-3l2.5-0.3l-1.6,1.9c-48.9,64.4-126,209.5-126,264.9c0,14.1,2.8,25.5,9.3,32.6c4.2,5.9,11.6,9,21.4,9c29.7-0.1,70.1-49.2,70.2-106.5v-2l1.5,1.2c10.6,8.1,16.8,20.8,16.7,34.2c0,35.4-27,67.3-61.1,81.7h136.5V73.5L662.1,73.6L662.1,73.6z M715.6,567.5c-20.9,0-41.6,11.2-41.6,34.4c-0.1,13.8,8.6,26.1,21.7,30.5c4.9,1.7,10,3,15.1,3.9c5.9,1.2,18.6,3,18.6,11.4c0,8-10.3,10-16.6,10c-6.7,0-13.8-1.8-19.1-6.1c-2.8-2.2-4.2-4.7-6-7.7L669.5,658c9.3,15.3,28.4,20.3,45.3,20.3c22.2,0,42.9-11.2,42.9-35.8c0-15.5-8.8-26.2-23.3-30.8c-5-1.5-10.1-2.8-15.3-3.8c-5.6-1.3-17.8-3.1-17.8-10.8c0-7.1,9-9.1,14.6-9.1c9,0,14.6,3.4,20.2,10.3l17.2-14C743.5,571.9,730.8,567.5,715.6,567.5L715.6,567.5z M816.9,567.5c-20.9,0-41.6,11.2-41.6,34.4c-0.1,13.8,8.6,26.1,21.7,30.5c4.9,1.7,10,3,15.1,3.9c6,1.2,18.7,3,18.7,11.4c0,8-10.3,10-16.5,10c-6.7,0-13.8-1.8-19.1-6.1c-2.8-2.2-4.2-4.7-6-7.7L770.7,658c9.3,15.3,28.4,20.3,45.3,20.3c22.2,0,42.9-11.2,42.9-35.8c0-15.5-8.9-26.2-23.3-30.8c-5-1.6-10.1-2.8-15.2-3.9c-5.6-1.3-17.8-3.1-17.8-10.8c0-7.1,9-9.1,14.6-9.1c9,0,14.6,3.4,20.3,10.3l17.2-14C844.8,571.9,832.1,567.5,816.9,567.5L816.9,567.5z M308.1,569.2v67.5c0,9.7,0.3,17.3,5.9,25.5c8.2,12.1,22.5,16.1,36.3,16.1c13.4,0,28-3.6,36.6-14.5c7.1-8.8,7.7-16.2,7.7-27.1v-67.5h-23.1V632c0,8,0.2,17.1-7.7,21.6c-2.9,1.6-6.1,2.5-9.5,2.6c-5.5,0-11.2-2.4-14.1-7.2c-2.9-5-2.7-11.4-2.7-16.9v-62.8H308.1z M423.1,569.2v107.1h23.1v-77.1l23.6,77.1h17.4l24.1-77.1v77.1h29.5V569.2h-42.1l-17.2,53.2l-15.9-53.2L423.1,569.2z M593.2,569.2l-33.8,107.1h24.3l5.9-21.2h33.7l6.1,21.2h30.4l-33.3-107.1H593.2z M606.7,596.7l10.5,36h-20.9L606.7,596.7z M444.1,716.4c-15.3,0-30.2,8-36.8,22.2c-3.6,7.9-5,17.3-5,25.9c0,17.6,5,34.4,21.5,43c6.3,3.3,13.3,5,20.3,5c27,0,41.7-21,41.7-46.5c0-18.2-4.3-35.4-21.5-44.6C458.1,718.1,451.1,716.4,444.1,716.4z M539.7,716.4c-18.1,0-36.1,9.8-36.1,29.8c-0.1,11.9,7.5,22.6,18.8,26.5c4.3,1.4,8.6,2.5,13.1,3.3c5.2,1.1,16.2,2.6,16.2,9.9c0,7-8.9,8.6-14.4,8.6c-5.8,0-12-1.5-16.6-5.3c-2.1-1.9-3.9-4.1-5.2-6.7L499.7,795c8.1,13.2,24.7,17.5,39.3,17.5c19.2,0,37.2-9.7,37.2-31c0-13.4-7.6-22.7-20.2-26.7c-4.4-1.3-8.8-2.5-13.2-3.4c-4.9-1.1-15.5-2.7-15.5-9.3c0-6.2,7.8-8,12.7-8c7.8,0,12.7,3,17.5,8.9l14.9-12.1C563.9,720.3,552.9,716.4,539.7,716.4L539.7,716.4z M718.3,716.4c-15.3,0-30.2,8-36.8,22.2c-3.6,7.9-5,17.3-5,25.9c0,17.6,5,34.4,21.5,43c6.3,3.3,13.2,5,20.3,5c27,0,41.7-21,41.7-46.5c0-18.2-4.3-35.4-21.5-44.6C732.3,718.1,725.3,716.4,718.3,716.4L718.3,716.4z M307.3,718v92.9h43.3c6,0,12.3-0.1,18.1-1.7c11.4-2.8,18.1-11.3,18.1-23.1c0-13.9-8.2-19.3-20.2-23.2c3.9-1.4,7.1-2.6,10.3-5.3c4.9-3.9,7.8-9.8,7.9-16.2c0-17.3-16.4-23.6-31.2-23.6L307.3,718z M588.4,718v19.5h25.2v73.4h25.5v-73.4h25.2V718H588.4z M778.6,718v92.9h20.1v-52.7l36.3,52.7h19.9V718h-19.9v47.2L802,718H778.6z M444.1,735c13.5,0,14.9,18.1,14.9,27.9c0,10.3-0.3,31-14.9,31c-14.2,0-15-19.2-15-29.4S429.8,735,444.1,735z M718.3,735c13.5,0,14.9,18.1,14.9,27.9c0,10.3-0.3,31-14.9,31c-14.2,0-15-19.2-15-29.4S704,735,718.3,735L718.3,735z M332.9,735.7h13.4c6.4,0,12.7,1.6,12.7,9.2c0,8.4-5.6,9.8-12.6,9.8h-13.6L332.9,735.7z M332.9,772.7h10.6c7.7,0,16.6,1.1,16.6,10.7c0,10.2-9.8,9.7-17.1,9.7h-10.1L332.9,772.7z"/></svg>
            <h1 className="text-2xl font-semibold text-neutral-200 leading-none w-auto inline-block">UMass Boston</h1>
            <svg className="fill-neutral-600 inline-block hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="6 0 16 24" width="20px" ><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>
            <h1 className="text-2xl font-semibold text-neutral-600 leading-none inline-block">Dorchester, Massachusetts</h1>
          </span>
          <span className=" pb-2 leading-snug">
            <h2 className="text-sm font-medium text-neutral-200 leading-none inline-block">Bachelor of Science, Computer Science<br />Japanese Language (Minor)</h2>
            
          </span>
          <div className="flex flex-col items-start gap-y-1 pb-2">
            <svg style={{animationDelay: "0s", animationDuration: "4s"}} className="rotate-180 fill-neutral-400 animate-pulse" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
            <svg style={{animationDelay: ".4s", animationDuration: "4s"}} className="rotate-180 fill-neutral-400 animate-pulse" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
            <svg style={{animationDelay: ".8s", animationDuration: "4s"}} className="rotate-180 fill-neutral-400 animate-pulse" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg>
          </div>
          <div className="flex flex-col items-start py-[6px] pl-1">
            <h2 className="text-[10px] font-normal text-neutral-500 flex-grow leading-none">September, 2023</h2>
            <h2 className="text-[10px] font-normal text-amber-600 flex-grow leading-none">Upcoming</h2>
          </div>
          <span className="flex flex-col pt-4">
            <img className="h-[20px] w-auto hidden" src="/soka_logo.png" alt="Soka University Logo" />
            <h1 className="text-2xl font-semibold text-neutral-200 leading-none w-auto inline-block">Soka University</h1>
            <svg className="fill-neutral-600 inline-block hidden" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="6 0 16 24" width="20px" ><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>
            <h1 className="text-2xl font-semibold text-neutral-600 leading-none inline-block">Tokyo, Japan</h1>
          </span>
        </div>
        <div className='w-full h-auto flex flex-col relative'>
          <div className="flex flex-col absolute w-full h-full items-center justify-between">
          
          
          </div>
          <div className="flex flex-col items-start py-[6px] pl-1">
            <h2 className="text-[10px] font-normal text-neutral-400 flex-grow leading-none">June, 2021</h2>
            <h2 className="text-[10px] font-normal text-green-300 flex-grow leading-none">Completed</h2>
          </div>


          <span className="grid grid-cols-[auto_1fr] pt-4 pb-1">
            <svg className="fill-neutral-400 h-[20px] w-auto inline-block" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="250 0 1166.2 886.1"><path d="M307.4,73.6v448h86.4c-15.8-7.6-26.5-24.7-26.5-41.5c0.3-82.3,202.2-242,201.8-293c0-16.5-18.6-21.6-38.9-21.6c-42,0.1-159.5,54.3-159.7,133.6c0.1,29,17.1,44.8,50.2,52.8l2.4,0.5l-2.1,1.3c-8.4,4.8-17.9,7.3-27.6,7.2c-27.4,0-54.8-19.2-54.8-51.6c0.1-31.3,64.3-158,208-158.3c7.4,0,14.8,0.6,22.2,1.7l-68.9-79.1L307.4,73.6L307.4,73.6z M662.1,73.6l-73.4,84.3c23.4,9.2,32.5,25.7,32.6,39.3c-0.3,58.7-206.1,243.1-205.7,293c0.2,10.8,4.3,12.4,16,12.6c93.6,0.3,264-228.9,313.4-295c19.7-3.4,19.5-0.8,40.3-3l2.5-0.3l-1.6,1.9c-48.9,64.4-126,209.5-126,264.9c0,14.1,2.8,25.5,9.3,32.6c4.2,5.9,11.6,9,21.4,9c29.7-0.1,70.1-49.2,70.2-106.5v-2l1.5,1.2c10.6,8.1,16.8,20.8,16.7,34.2c0,35.4-27,67.3-61.1,81.7h136.5V73.5L662.1,73.6L662.1,73.6z M715.6,567.5c-20.9,0-41.6,11.2-41.6,34.4c-0.1,13.8,8.6,26.1,21.7,30.5c4.9,1.7,10,3,15.1,3.9c5.9,1.2,18.6,3,18.6,11.4c0,8-10.3,10-16.6,10c-6.7,0-13.8-1.8-19.1-6.1c-2.8-2.2-4.2-4.7-6-7.7L669.5,658c9.3,15.3,28.4,20.3,45.3,20.3c22.2,0,42.9-11.2,42.9-35.8c0-15.5-8.8-26.2-23.3-30.8c-5-1.5-10.1-2.8-15.3-3.8c-5.6-1.3-17.8-3.1-17.8-10.8c0-7.1,9-9.1,14.6-9.1c9,0,14.6,3.4,20.2,10.3l17.2-14C743.5,571.9,730.8,567.5,715.6,567.5L715.6,567.5z M816.9,567.5c-20.9,0-41.6,11.2-41.6,34.4c-0.1,13.8,8.6,26.1,21.7,30.5c4.9,1.7,10,3,15.1,3.9c6,1.2,18.7,3,18.7,11.4c0,8-10.3,10-16.5,10c-6.7,0-13.8-1.8-19.1-6.1c-2.8-2.2-4.2-4.7-6-7.7L770.7,658c9.3,15.3,28.4,20.3,45.3,20.3c22.2,0,42.9-11.2,42.9-35.8c0-15.5-8.9-26.2-23.3-30.8c-5-1.6-10.1-2.8-15.2-3.9c-5.6-1.3-17.8-3.1-17.8-10.8c0-7.1,9-9.1,14.6-9.1c9,0,14.6,3.4,20.3,10.3l17.2-14C844.8,571.9,832.1,567.5,816.9,567.5L816.9,567.5z M308.1,569.2v67.5c0,9.7,0.3,17.3,5.9,25.5c8.2,12.1,22.5,16.1,36.3,16.1c13.4,0,28-3.6,36.6-14.5c7.1-8.8,7.7-16.2,7.7-27.1v-67.5h-23.1V632c0,8,0.2,17.1-7.7,21.6c-2.9,1.6-6.1,2.5-9.5,2.6c-5.5,0-11.2-2.4-14.1-7.2c-2.9-5-2.7-11.4-2.7-16.9v-62.8H308.1z M423.1,569.2v107.1h23.1v-77.1l23.6,77.1h17.4l24.1-77.1v77.1h29.5V569.2h-42.1l-17.2,53.2l-15.9-53.2L423.1,569.2z M593.2,569.2l-33.8,107.1h24.3l5.9-21.2h33.7l6.1,21.2h30.4l-33.3-107.1H593.2z M606.7,596.7l10.5,36h-20.9L606.7,596.7z M444.1,716.4c-15.3,0-30.2,8-36.8,22.2c-3.6,7.9-5,17.3-5,25.9c0,17.6,5,34.4,21.5,43c6.3,3.3,13.3,5,20.3,5c27,0,41.7-21,41.7-46.5c0-18.2-4.3-35.4-21.5-44.6C458.1,718.1,451.1,716.4,444.1,716.4z M539.7,716.4c-18.1,0-36.1,9.8-36.1,29.8c-0.1,11.9,7.5,22.6,18.8,26.5c4.3,1.4,8.6,2.5,13.1,3.3c5.2,1.1,16.2,2.6,16.2,9.9c0,7-8.9,8.6-14.4,8.6c-5.8,0-12-1.5-16.6-5.3c-2.1-1.9-3.9-4.1-5.2-6.7L499.7,795c8.1,13.2,24.7,17.5,39.3,17.5c19.2,0,37.2-9.7,37.2-31c0-13.4-7.6-22.7-20.2-26.7c-4.4-1.3-8.8-2.5-13.2-3.4c-4.9-1.1-15.5-2.7-15.5-9.3c0-6.2,7.8-8,12.7-8c7.8,0,12.7,3,17.5,8.9l14.9-12.1C563.9,720.3,552.9,716.4,539.7,716.4L539.7,716.4z M718.3,716.4c-15.3,0-30.2,8-36.8,22.2c-3.6,7.9-5,17.3-5,25.9c0,17.6,5,34.4,21.5,43c6.3,3.3,13.2,5,20.3,5c27,0,41.7-21,41.7-46.5c0-18.2-4.3-35.4-21.5-44.6C732.3,718.1,725.3,716.4,718.3,716.4L718.3,716.4z M307.3,718v92.9h43.3c6,0,12.3-0.1,18.1-1.7c11.4-2.8,18.1-11.3,18.1-23.1c0-13.9-8.2-19.3-20.2-23.2c3.9-1.4,7.1-2.6,10.3-5.3c4.9-3.9,7.8-9.8,7.9-16.2c0-17.3-16.4-23.6-31.2-23.6L307.3,718z M588.4,718v19.5h25.2v73.4h25.5v-73.4h25.2V718H588.4z M778.6,718v92.9h20.1v-52.7l36.3,52.7h19.9V718h-19.9v47.2L802,718H778.6z M444.1,735c13.5,0,14.9,18.1,14.9,27.9c0,10.3-0.3,31-14.9,31c-14.2,0-15-19.2-15-29.4S429.8,735,444.1,735z M718.3,735c13.5,0,14.9,18.1,14.9,27.9c0,10.3-0.3,31-14.9,31c-14.2,0-15-19.2-15-29.4S704,735,718.3,735L718.3,735z M332.9,735.7h13.4c6.4,0,12.7,1.6,12.7,9.2c0,8.4-5.6,9.8-12.6,9.8h-13.6L332.9,735.7z M332.9,772.7h10.6c7.7,0,16.6,1.1,16.6,10.7c0,10.2-9.8,9.7-17.1,9.7h-10.1L332.9,772.7z"/></svg>
            <h1 className="text-2xl font-semibold text-neutral-200 leading-none w-auto inline-block">Essex North Shore Agricultural and Technical School</h1>
            <svg className="fill-neutral-600 inline-block" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="6 0 16 24" width="20px" ><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z"/></svg>
            <h1 className="text-2xl font-semibold text-neutral-600 leading-none inline-block">Hawthorne, Massachusetts</h1>
          </span>
          <h2 className="text-sm font-normal text-neutral-200 leading-none inline-block">High School, Information Technology Services</h2>
          
          
        </div>
      </Timeline>
      <Photobook />
    </div>
  )
}
