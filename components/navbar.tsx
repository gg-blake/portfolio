import { useEffect, useState } from "react"
<<<<<<< Updated upstream
=======
import ColorBlendButton from "./colorblendbutton";
import { ColorPicker, ColorPickerCompact } from './colorpicker';
>>>>>>> Stashed changes

export default function NavBar({ids}: {ids: string[]}) {
    const [visible, setVisible] = useState(false);
    const [isCompact, setIsCompact] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        })
        if (window.innerWidth < 768) {
            setIsCompact(true);
        } else {
            setIsCompact(false);
        }
    }, [])

    return (
<<<<<<< Updated upstream
        <div id="navbar" style={{opacity: visible ? 1 : 0}} className="w-screen h-auto justify-between items-center sm:justify-start overflow-x-visible p-3 flex flex-row gap-3 z-[999] fixed top-0 border-b-[1px] border-white bg-black transition-opacity">
            <img className="w-[40px] h-[40px]" src="/profile-cropped.jpg" alt="profile-cropped.jpg" />
            {ids.map((id: string, i: number) => <a key={`navbar-item-${i}`} className="text-sm flex items-center justify-center text-white border-white border-[1px] bg-black no-underline p-3" href={`#${id}`}>{id}</a>)}
=======
        <div id="navbar" style={{visibility: visible ? "visible" : "hidden"}} className="w-screen h-auto text-xs xs:text-base justify-between sm:justify-start overflow-x-visible p-3 flex flex-row gap-3 z-[999] fixed top-0 border-b-[1px] border-primary-50 bg-primary-950 transition-opacity">
            {ids.map((id: string, i: number) => <ColorBlendButton key={`navbar-colorblendbutton-${i}`} className="relative translate-y-3" href={"#"+id}>{id}</ColorBlendButton>)}
            <div className="fixed bottom-3 right-3">
                {isCompact ? <ColorPicker className="bg-primary-950 shadow-md" /> : <ColorPicker className="bg-primary-950 shadow-md" />}
            </div>
>>>>>>> Stashed changes
        </div>
    )
}