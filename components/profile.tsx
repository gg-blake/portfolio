import styles from '../styles/Home.module.css'
import FlowFieldBG from './flow_field';
import GlitchTitle from './glitch_text';
import {MovingBannerFrame} from './moving_banner';
import PROFILE_BG from '../public/profile-cropped.jpg';
import { ColorPicker , ColorPickerCompact } from './colorpicker';
import "../styles/globals.css";

import { useEffect , useState } from 'react'
import ColorBlendButton from './colorblendbutton';



export default function Profile() {
    const [isCompact, setIsCompact] = useState(false);

    const animationDuration = 20;
    let windowPerimeterLength = 0;
    useEffect(() => {
        windowPerimeterLength = window.innerWidth * 2 + window.innerHeight * 2;
        const wordMovementSpeed = windowPerimeterLength / animationDuration;

        if (window.innerWidth < 768) {
            setIsCompact(true);
        } else {
            setIsCompact(false);
        }
    }, [])
    const screenbanner = "This website was meticulously designed and developed by me. To learn more about the technologies and programs used in the project, take a minute to check out my Github.".split(" ");
    return (
        <div className={`w-screen h-screen flex items-center p-3 justify-center overflow-clip`}>
            <FlowFieldBG />
            <MovingBannerFrame/>
            
            <div className="w-full h-full flex flex-col items-center justify-center z-10">

                <div className="w-full font-bold h-auto text-5xl sm:text-[200px] flex justify-center absolute text-primary-50">
                    <div className="w-auto h-auto font-bold">
                    
                    <GlitchTitle className='font-semibold text-5xl sm:text-[200px] mix-blend-exclusion'>blake</GlitchTitle>
                    <h1 className='opacity-20 font-bold'>moody.mx</h1>
                    </div>
                </div>
                
                <div className="absolute bottom-3 grid grid-cols-2 grid-rows-2 w-[250px] h-auto text-sm gap-3">
                    <ColorBlendButton className="relative" target="_blank" rel="noreferrer">Instagram</ColorBlendButton>
                    <ColorBlendButton className="relative" target="_blank" rel="noreferrer">Github</ColorBlendButton>
                    <ColorBlendButton className="relative" target="_blank" rel="noreferrer">LinkedIn</ColorBlendButton>
                    <ColorBlendButton className="relative" target="_blank" rel="noreferrer">Email</ColorBlendButton>

                </div>
                <div className='absolute top-6 right-6'>
                <ColorPicker className="bg-primary-950 shadow-md" />
                </div>
            </div>
            
      </div>
    )
}