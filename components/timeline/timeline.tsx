import { FC, createContext } from "react";
import { TimelineNodeComplete, TimelineNodeFirst, TimelineNodeIncomplete, TimelineNodeEnd } from "./timeline_node";
import TimelineColorContext from "./timeline_context";

interface TimelineProps {
    children: React.ReactNode[];
}

const Timeline: FC<TimelineProps> = ({children}) => {
    return (
        <TimelineColorContext.Provider value={{primaryColor: "#737373", accentColor: "#4ade80"}}>
            <div className="w-full grid grid-cols-1">
                <TimelineNodeEnd />
                <TimelineNodeIncomplete>{children[0]}</TimelineNodeIncomplete>
                { children.slice(1, -1).map(child => <TimelineNodeComplete>{child}</TimelineNodeComplete>) }
                <TimelineNodeFirst>{children[children.length - 1]}</TimelineNodeFirst>
            </div>
        </TimelineColorContext.Provider>
        
    )
}



export default Timeline;