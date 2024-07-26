
import { useEffect, useState } from "react"
import ColorBlendButton from "./colorblendbutton";

export default function NavBar({ids}: {ids: string[]}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        })
    }, [])

    return (
        <div id="navbar" style={{opacity: visible ? 1 : 0}} className="w-screen h-auto text-xs xs:text-base justify-between items-center sm:justify-start overflow-x-visible p-3 flex flex-row gap-3 z-[999] fixed top-0 border-b-[1px] border-white bg-black transition-opacity">
            <img className="relative w-[40px] h-[40px]" src="/profile-cropped.jpg" alt="profile-cropped.jpg" />
            {ids.map((id: string, i: number) => <ColorBlendButton key={`navbar-colorblendbutton-${i}`} className="relative translate-y-3" href={"#"+id}>{id}</ColorBlendButton>)}
        </div>
    )
}