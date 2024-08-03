import { useState , useEffect , useCallback , useRef } from 'react'

export default function ImageSwipe({images, className=""}: {images?: string[], className?: string}) {
    const [mouseHold, setMouseHold] = useState(false);
    const [mouseHoldInitialPosition, setMouseHoldInitialPosition] = useState({clientX: 0, clientY: 0});
    const containerRef = useRef<HTMLDivElement>(null);
    
    const handleMouseMove = useCallback((e: MouseEvent) => {
        let deltaX = e.clientX - mouseHoldInitialPosition.clientX;
        let deltaY = e.clientY - mouseHoldInitialPosition.clientY;
        
        if (!containerRef.current) return;
        const defaultBasePosition = {x: containerRef.current.clientWidth * 0.5, y: containerRef.current.clientHeight};
        const opposite = deltaX;
        const adjacent = defaultBasePosition.y - e.clientY;
        const angle = Math.atan(opposite / adjacent) * (180 / Math.PI);
        console.log(opposite, adjacent, angle);
        const pointer = document.getElementById('pointer');
        if (pointer) {
            pointer.style.transform = `rotate(${angle}deg)`;
        }

    }, [mouseHoldInitialPosition]);

    const handleMouseDown = (e: any) => {
        setMouseHold(true);
        setMouseHoldInitialPosition({clientX: e.clientX, clientY: e.clientY});
    }

    const handleMouseUp = (e: any) => {
        if (!containerRef.current) return;
        if (e.clientX < containerRef.current.clientWidth * 0.20) {
            console.log("left");
        } else if (e.clientX > containerRef.current.clientWidth * 0.80) {
            console.log("right");
        } else {
            console.log("center");
        }
        
        
        setMouseHold(false);
    }

    useEffect(() => {
        if (mouseHold) {
            window.addEventListener('mousemove', handleMouseMove, true);
        } else {
            window.removeEventListener('mousemove', handleMouseMove, true);
        }
    }, [mouseHold])

    return (
        <div className="w-screen h-screen bg-red-500 p-3 overflow-clip mb-[200px]">
            <div ref={containerRef} onMouseDown={(e) => handleMouseDown(e)} onMouseUp={(e) => handleMouseUp(e)} onMouseLeave={(e) => handleMouseUp(e)} className="w-full h-full border-primary-50 bg-primary-950 border-[1px] flex items-end justify-center overflow-x-hidden">
                <div id="pointer" className='overflow-hidden absolute w-full h-full bg-blue-500 origin-bottom pointer-events-none transition-transform'></div>
            </div>
        </div>
    )
}