// @ts-nocheck
import "../styles/globals.css";
import { useState , useEffect } from "react";

const defaultColors = [
    0, 50, 90, 180
]

function ColorPickerButton(props: {hue: number, isDark?: boolean | undefined}) {
    const changeColor = (hue: number) => {
        const root = document.querySelector(':root');
        if (!root) return;
        console.log("Set color: " + hue);
        root?.style.setProperty('--color-primary-50',  `${hue}, 70%, 68%`);
        root?.style.setProperty('--color-primary-100', `${hue}, 70%, 66%`);
        root?.style.setProperty('--color-primary-200', `${hue}, 70%, 60%`);
        root?.style.setProperty('--color-primary-300', `${hue}, 70%, 53%`);
        root?.style.setProperty('--color-primary-400', `${hue}, 70%, 34%`);
        root?.style.setProperty('--color-primary-500', `${hue}, 70%, 15%`);
        root?.style.setProperty('--color-primary-600', `${hue}, 70%, 15%`);
        root?.style.setProperty('--color-primary-700', `${hue}, 70%, 15%`);
        root?.style.setProperty('--color-primary-800', `${hue}, 70%, 15%`);
        root?.style.setProperty('--color-primary-900', `${hue}, 70%, 15%`);
        root?.style.setProperty('--color-primary-950', `${hue}, 50%, 5%`);
    }

    const setDark = () => {
        const root = document.querySelector(':root');
        if (!root) return;
        console.log("Set color: dark");
        root?.style.setProperty('--color-primary-50',  `0deg, 0%, 98%`);
        root?.style.setProperty('--color-primary-100', `0deg, 0%, 96%`);
        root?.style.setProperty('--color-primary-200', `0deg, 0%, 90%`);
        root?.style.setProperty('--color-primary-300', `0deg, 0%, 83%`);
        root?.style.setProperty('--color-primary-400', `0deg, 0%, 64%`);
        root?.style.setProperty('--color-primary-500', `0deg, 0%, 45%`);
        root?.style.setProperty('--color-primary-600', `0deg, 0%, 32%`);
        root?.style.setProperty('--color-primary-700', `0deg, 0%, 25%`);
        root?.style.setProperty('--color-primary-800', `0deg, 0%, 15%`);
        root?.style.setProperty('--color-primary-900', `0deg, 0%, 9%`);
        root?.style.setProperty('--color-primary-950', `0deg, 0%, 4%`);
    }

    const setLight = () => {
        const root = document.querySelector(':root');
        if (!root) return;
        console.log("Set color: light");
        root?.style.setProperty('--color-primary-950',  `0deg, 0%, 98%`);
        root?.style.setProperty('--color-primary-900', `0deg, 0%, 96%`);
        root?.style.setProperty('--color-primary-800', `0deg, 0%, 90%`);
        root?.style.setProperty('--color-primary-700', `0deg, 0%, 83%`);
        root?.style.setProperty('--color-primary-600', `0deg, 0%, 64%`);
        root?.style.setProperty('--color-primary-500', `0deg, 0%, 45%`);
        root?.style.setProperty('--color-primary-400', `0deg, 0%, 32%`);
        root?.style.setProperty('--color-primary-300', `0deg, 0%, 25%`);
        root?.style.setProperty('--color-primary-200', `0deg, 0%, 15%`);
        root?.style.setProperty('--color-primary-100', `0deg, 0%, 9%`);
        root?.style.setProperty('--color-primary-50', `0deg, 0%, 4%`);
    }

    useEffect(() => {
        setDark();
    }, [])

    return (
        <div onClick={() => props.isDark == undefined ? changeColor(props.hue) : props.isDark == false ? setLight() : setDark()} style={{borderColor: `hsl(${props.hue}, ${props.isDark == false ? "0%" : "100%"}, ${props.isDark == true ? "0%" : "85%"})`}} className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-transparent p-[2px] flex justify-center items-center">
            <div style={{backgroundColor: `hsl(${props.hue}, ${props.isDark == false ? "0%" : "100%"}, ${props.isDark == true ? "0%" : "85%"})`}} className="w-full h-full rounded-full transition-all" />
        </div>
    )
}

function ColorPicker({ className } : { className?: string }) {
    return (
        <div className={`md:relative md:right-0 right-3 absolute flex flex-col md:flex-row gap-3 border-primary-50 border-[1px] p-[4px] ${className}`}>
            <ColorPickerButton key={`color-${0}`} hue={0} isDark={true} />
            <ColorPickerButton key={`color-${1}`} hue={0} isDark={false} />
            {defaultColors.map((color, i) => (
                <ColorPickerButton key={`color-${i+2}`} hue={color} />
            ))}
        </div>
    )
}

function ColorPickerCompact() {
    const [ visible, setVisible ] = useState(true);

    return (
        <div className="relative w-[30px] h-[30px] bg-red-500 flex justify-center">
            <div style={{paddingBottom: visible ? "5px" : "0px"}} className="flex flex-col absolute bottom-0 border-[1px] border-primary-50 bg-primary-950 px-[3px] gap-[5px] items-center">
                <div onClick={() => setVisible(!visible)} className="w-[30px] h-[30px] flex items-center justify-center m-[1px]">
                    <svg style={{transform: visible ? "rotate(-90deg)" : "rotate(90deg)"}} className="fill-primary-50 transition-all" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                </div>
                { visible && <>
                <ColorPickerButton key={`color-${0}`} hue={0} isDark={true} />
                <ColorPickerButton key={`color-${1}`} hue={0} isDark={false} />
                {defaultColors.map((color, i) => (
                    <ColorPickerButton key={`color-${i+2}`} hue={color} />
                ))}
                </>}
            </div>
        </div>
    )
}

export { ColorPicker , ColorPickerCompact };