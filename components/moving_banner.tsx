import { useRef, useEffect, useState } from 'react'

interface MovingBannerProps {
    children: string;
}

function MovingBanner({children}: MovingBannerProps) {
    const bannerContainerRef = useRef<HTMLDivElement>(null);
    const bannerContentRef = useRef<HTMLDivElement>(null);
    const bannerContentSecondRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bannerContainerRef.current || !bannerContentRef.current || !bannerContentSecondRef.current) return;
        const bannerContainer = bannerContainerRef.current;
        const bannerContent = bannerContentRef.current;
        const bannerContentSecond = bannerContentSecondRef.current;
        bannerContainer.style.width = `${bannerContent.offsetWidth}px`;
        bannerContainer.style.height = `${bannerContent.offsetHeight}px`;
        const bannerRotatingWords = [
            {transform: "translateX(0)"},
            {transform: "translateX(-100%)"},
        ]
        const bannerRotatingWordsTiming = {
            duration: 2000,
            iterations: Infinity,
            easing: "linear"
        }
        bannerContent.animate(bannerRotatingWords, bannerRotatingWordsTiming);
        bannerContentSecond.animate(bannerRotatingWords, bannerRotatingWordsTiming);
    }, [])


    return (
        <div ref={bannerContainerRef} className="relative w-[200px] h-[30px] overflow-clip shadow-md bg-inherit box-border">
            <div ref={bannerContentRef} className="absolute left-0 whitespace-nowrap">{children}</div>
            <div ref={bannerContentSecondRef} className="absolute left-full whitespace-nowrap">{children}</div>
        </div>
    )
}

interface MovingBannerResizeableProps {
    children: string;
    className?: string;
    length: number;
    count: number;
}

const ESTIMATED_TEXT_LENGTH = 107.267;

function MovingBannerResizeable(props: MovingBannerResizeableProps) {
    return (
        <div className={`${props.className} flex flex-row overflow-x-clip`}>
            {[...Array(props.count)].map((_, i) => (<MovingBanner key={`moving-banner-${i}`}>{props.children}</MovingBanner>))}
        </div>
    )
}

function MovingBannerFrame() {
    interface Size {
        width: number;
        height: number;
    }
    const [windowDimensions, setWindowDimensions] = useState<Size>({width: 0, height: 0});

    useEffect(() => {
        setWindowDimensions({width: window.innerWidth, height: window.innerHeight});
        window.addEventListener('resize', () => {
            if (window.scrollY > window.innerHeight) return;
            location.reload();
        })
    }, [])

    return (
        <div className="w-screen h-screen absolute top-0 left-0 overflow-clip leading-snug font-mono text-white">
            <MovingBannerResizeable className="absolute text-[9px] bg-black origin-bottom bottom-0" length={windowDimensions.width} count={Math.ceil(windowDimensions.width / ESTIMATED_TEXT_LENGTH)}>Hello, my name is Blake.</MovingBannerResizeable>
            <MovingBannerResizeable className="top-0 absolute text-[9px] bg-black origin-center rotate-180" length={windowDimensions.width} count={Math.ceil(windowDimensions.width / ESTIMATED_TEXT_LENGTH)}>Hello, my name is Blake.</MovingBannerResizeable>
            <MovingBannerResizeable className="absolute text-[9px] bg-black origin-bottom-left rotate-90 translate-y-[-16px]" length={windowDimensions.height} count={Math.ceil(windowDimensions.height / ESTIMATED_TEXT_LENGTH)}>Hello, my name is Blake.</MovingBannerResizeable>
            <MovingBannerResizeable className="right-0 absolute text-[9px] bg-black origin-top-right rotate-[-90deg] translate-x-[-12px]" length={windowDimensions.height} count={Math.ceil(windowDimensions.height / ESTIMATED_TEXT_LENGTH)}>Hello, my name is Blake.</MovingBannerResizeable>
            <div className="w-[calc(100%_-_24px)] h-[calc(100%_-_24px)] absolute left-[12px] top-[12px] border-[1px] border-white"></div>
        </div>
    )
}

export { MovingBannerFrame, MovingBannerResizeable };