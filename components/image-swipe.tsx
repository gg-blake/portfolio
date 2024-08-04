import { useState , useEffect , useCallback , useRef, MouseEvent , TouchEvent } from 'react'

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
        const pointer = document.getElementById('pointer');
        if (pointer) {
            pointer.style.transform = `rotate(${angle}deg)`;
        }

    }, [mouseHoldInitialPosition]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        let deltaX = e.touches[0].clientX - mouseHoldInitialPosition.clientX;
        let deltaY = e.touches[0].clientY - mouseHoldInitialPosition.clientY;
        
        if (!containerRef.current) return;
        const defaultBasePosition = {x: containerRef.current.clientWidth * 0.5, y: containerRef.current.clientHeight};
        const opposite = deltaX;
        const adjacent = defaultBasePosition.y - e.touches[0].clientY;
        const angle = Math.atan(opposite / adjacent) * (180 / Math.PI);
        const pointer = document.getElementById('pointer');
        if (pointer) {
            pointer.style.transform = `rotate(${angle}deg)`;
        }

    }, [mouseHoldInitialPosition]);

    const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        setMouseHold(true);
        setMouseHoldInitialPosition({clientX: e.clientX, clientY: e.clientY});
    }

    const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
        setMouseHold(true);
        setMouseHoldInitialPosition({clientX: e.touches[0].clientX, clientY: e.touches[0].clientY});
    }

    const handleMouseUp = (e: MouseEvent<HTMLDivElement>) => {
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

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        if (e.touches[0].clientX < containerRef.current.clientWidth * 0.20) {
            console.log("left");
        } else if (e.touches[0].clientX > containerRef.current.clientWidth * 0.80) {
            console.log("right");
        } else {
            console.log("center");
        }

        setMouseHold(false);
    }

    useEffect(() => {
        if (mouseHold) {
            // @ts-ignore
            window.addEventListener('mousemove', handleMouseMove, true);
            // @ts-ignore
            window.addEventListener('touchmove', handleTouchMove, true);
        } else {
            // @ts-ignore
            window.removeEventListener('mousemove', handleMouseMove, true);
            // @ts-ignore
            window.addEventListener('touchmove', handleTouchMove, true);
        }
    }, [mouseHold])

    return (
        <div className="w-screen h-screen p-3 overflow-clip mb-[200px]">
            <div ref={containerRef} onMouseDown={(e) => handleMouseDown(e)} onMouseUp={(e) => handleMouseUp(e)} onMouseLeave={(e) => handleMouseUp(e)} onTouchStart={(e) => handleTouchStart((e))} onTouchEnd={(e) => handleTouchEnd(e)} className="w-[calc(100%_-_24px)] h-[calc(100%_-_24px)] overflow-visible border-primary-50 bg-primary-950 border-[1px] flex items-end justify-center overflow-x-hidden absolute">
                <div id="pointer" className='overflow-hidden absolute w-full h-full border-[1px] border-primary-50 origin-bottom pointer-events-none transition-transform'></div>
            </div>
        </div>
    )
}