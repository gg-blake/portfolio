import React, { FC, useContext, useRef, useState, useEffect } from "react";
import Color from "./timeline_color";
import TimelineColorContext from "./timeline_context";


interface TimelineNodeProps {
    children?: React.ReactNode;
}

const TimelineNode: FC<TimelineNodeProps> = ({children}) => {
    const thisElementRef = useRef<HTMLDivElement>(null);
    const [inFocus, setInFocus] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (!thisElementRef.current) return;
            const element = thisElementRef.current;
            const elementTop = element.getBoundingClientRect().top;
            // Set inFocus to true if the element is in the viewport
            if (elementTop < window.innerHeight) {
                setInFocus(true);
            } else {
                setInFocus(false);
            }
        });
    });

    return (
        <div ref={thisElementRef} className="w-full flex-grow transition-all flex flex-row-reverse">
            { children }
        </div>
    )
}

const TimelineNodeComplete: FC<TimelineNodeProps> = ({children}) => {
    const { primaryColor, accentColor } = useContext(TimelineColorContext);

    return (
        <TimelineNode>
            <div className="w-full h-auto flex-grow flex flex-col text-base font-normal pb-[100px]">{children}</div>
            <div className="w-[40px] h-full flex flex-col">
                <div className="w-[40px] h-[40px] flex flex-col justify-center items-center p-[5px]">
                    <div style={{backgroundColor: accentColor}} className={`w-full flex-grow rounded-full flex justify-center items-center`}>
                        <svg style={{fill: "#000"}} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" className={` w-[70%] h-auto`}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                    </div>
                </div>
                <div className="w-[40px] flex-grow flex flex-col justify-center items-center px-[18px] py-[5px]">
                    <div  style={{backgroundColor: accentColor}} className={`w-full flex-grow rounded-full`} />
                </div>
          </div>
        </TimelineNode>
    )
}

const TimelineNodeFirst: FC<TimelineNodeProps> = ({children}) => {
    const { primaryColor, accentColor } = useContext(TimelineColorContext);

    return (
        <TimelineNode>
            <div className="w-full h-auto flex-grow flex flex-col text-base font-normal py-[5px] pb-[100px]">{children}</div>
            <div className="w-[40px] h-full flex flex-col">
                <div className="w-[40px] h-[40px] flex flex-col justify-center items-center p-[5px]">
                    <div style={{backgroundColor: accentColor}} className={`w-full flex-grow rounded-full flex justify-center items-center`}>
                        <svg style={{fill: "#000"}} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" className={`w-[70%] h-auto`}><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                    </div>
                </div>
                <div className="w-[40px] flex-grow flex flex-col justify-center items-center px-[18px] pt-[5px]">
                    <div  style={{backgroundColor: accentColor}} className={`w-full flex-grow rounded-full`} />
                </div>
                <div className="w-[40px] h-[40px] flex flex-col justify-center items-center px-[12px] py-[12px]">
                    <div  style={{backgroundColor: accentColor}} className={`w-full flex-grow rounded-full`} />
                </div>
                
            </div>
        </TimelineNode>
    )
}

const TimelineNodeIncomplete: FC<TimelineNodeProps> = ({children}) => {
    const { primaryColor, accentColor } = useContext(TimelineColorContext);

    return (
        <TimelineNode>
            <div className="w-full h-auto flex-grow flex flex-col text-base font-normal py-[5px] pb-[100px]">{children}</div>
            <div className="w-[40px] h-full flex flex-col">
                <div className="w-[40px] h-[40px] flex flex-col justify-center items-center p-[5px]">
                    <div style={{borderColor: primaryColor}} className="w-full flex-grow rounded-full border-[1.5px] flex justify-center items-center">
                        <svg style={{fill: primaryColor}} xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 0 24 24" width="48px" className='fill-white w-[70%] h-auto'><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                    </div>
                </div>
                <div className="w-[40px] flex-grow flex flex-col justify-center items-center px-[18px] py-[5px]">
                    <div style={{borderColor: primaryColor}} className="w-full flex-grow rounded-t-full border-[1.5px] border-b-0" />
                    <div style={{backgroundColor: accentColor}} className="w-full flex-grow rounded-b-full" />
                </div>
            </div>
        </TimelineNode>
    )
}

const TimelineNodeEnd: FC<TimelineNodeProps> = () => {
    const { primaryColor, accentColor } = useContext(TimelineColorContext);

    return (
        <div className="w-full h-[15vh] flex">
          <div className="w-[40px] h-full flex flex-col">
            <div className="w-[40px] flex-grow flex flex-col justify-center items-center px-[18px] py-[5px]">
              <div style={{borderColor: primaryColor}} className="w-full flex-grow rounded-full border-[1.5px]"></div>
            </div>
            
          </div>
        </div>
    )
}

export { TimelineNodeComplete, TimelineNodeFirst, TimelineNodeIncomplete, TimelineNodeEnd };