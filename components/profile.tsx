import styles from '../styles/Home.module.css'
import FlowFieldBG from './flow_field';
import GlitchTitle from './glitch_text';
import {MovingBannerFrame} from './moving_banner';
import Spline from '@splinetool/react-spline';
import PROFILE_BG from '../public/profile-cropped.jpg';

import { useEffect } from 'react'
import ColorBlendButton from './colorblendbutton';



export default function Profile() {
    const animationDuration = 20;
    let windowPerimeterLength = 0;
    useEffect(() => {
        windowPerimeterLength = window.innerWidth * 2 + window.innerHeight * 2;
        const wordMovementSpeed = windowPerimeterLength / animationDuration;
    }, [])
    const screenbanner = "This website was meticulously designed and developed by me. To learn more about the technologies and programs used in the project, take a minute to check out my Github.".split(" ");
    return (
        <div className={`w-screen h-screen flex items-center p-3 justify-center overflow-clip`}>
            <FlowFieldBG />
            <MovingBannerFrame/>
            
            <div className="w-full h-full flex flex-col items-center justify-center z-10">
                <div style={{backgroundImage: `url('${PROFILE_BG.src}')`}} className="relative w-[calc(min(50vw,_50vh))] h-[calc(min(50vw,_50vh))] bg-[#444444] flex flex-col items-center justify-center bg-[length:400px_400px] bg-center rounded-full">
                    <GlitchTitle className='font-semibold text-5xl sm:text-8xl mix-blend-exclusion'>Blake Moody</GlitchTitle>
                    <img className={`absolute w-full h-full origin-center scale-[104%] ${styles.circularbanner}`} src="/circular-banner.svg" />
                </div>
                
                <div className="absolute bottom-3 grid grid-cols-2 grid-rows-2 w-[250px] h-auto text-sm gap-3">
                    <ColorBlendButton className="relative">Instagram</ColorBlendButton>
                    <ColorBlendButton className="relative">Github</ColorBlendButton>
                    <ColorBlendButton className="relative">LinkedIn</ColorBlendButton>
                    <ColorBlendButton className="relative">Email</ColorBlendButton>
                </div>
            </div>
            
      </div>
    )
}