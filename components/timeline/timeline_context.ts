import { createContext } from "react";
import Color from "./timeline_color";

interface TimelineColorContextProps {
    primaryColor: Color;
    accentColor: Color;
}

const TimelineColorContext = createContext<TimelineColorContextProps>({
    primaryColor: "#737373",
    accentColor: "#4ade80"
});

export default TimelineColorContext;