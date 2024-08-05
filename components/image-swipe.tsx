import { useState , useEffect , useCallback , useRef, MouseEvent , TouchEvent } from 'react'
import { gapi } from 'gapi-script';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY!;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID!;

export default function ImageSwipe({className=""}: {images?: string[], className?: string}) {
    const [mouseHold, setMouseHold] = useState(false);
    const [mouseHoldInitialPosition, setMouseHoldInitialPosition] = useState({clientX: 0, clientY: 0});
    const [images, setImages] = useState<string[]>(['5197', '5235', '5153', '5416', '5836', '5874', '5917', '6391', '6411', '6596', '4792']);
    const [images2, setImages2] = useState<string[]>(['5197', '5235', '5153', '5416', '5836', '5874', '5917', '6391', '6411', '6596', '4792']);
    const containerRef = useRef<HTMLDivElement>(null);

    /*useEffect(() => {
        const handleClientLoad = () => {
            gapi.load('client', initClient);
        }

        const initClient = () => {
            console.log(API_KEY, CLIENT_ID);
            gapi.client.init({
                clientId: CLIENT_ID,
                discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
                scope: 'https://www.googleapis.com/auth/drive'
            }).then(() => {
                gapi.client.setApiKey(API_KEY);
                listFiles();//https://drive.google.com/file/d/1OELYVLIaluE0KgAJHkINb1_49eMboStx/view?usp=drive_link
                
              })

            const listFiles = () => {
            gapi.client.request({
                'path': 'https://www.googleapis.com/drive/v3/files/1OELYVLIaluE0KgAJHkINb1_49eMboStx',
                'method': 'GET',
                
            }).then((response: any) => {
                console.log(response.result.files);
                let files = response.result.files;
                let imageFiles = files.filter((file: any) => file.mimeType.includes('image'));
                let imageLinks = imageFiles.map((file: any) => file.webContentLink);
                setImages(imageLinks);
            })
            };
        }

        handleClientLoad();
    }, [])*/
    
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
            let renderedAngle = Number(pointer.style.transform.split('(')[1].split('deg')[0]);
            console.log(renderedAngle);
            
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
            if (angle > 45) {
                pointer.style.transition = `transform 0.3s ease-in-out`;
                pointer.style.transform = `rotate(45deg)`;
                
            }
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

    const handleMouseUp = (e: any) => {
        if (!containerRef.current) return;
        let pointer = document.getElementById('pointer');
        if (pointer) {
            pointer.style.transition = `opacity 0.2s ease-in-out`;
            pointer.style.opacity = `0`;
            setImages([...images.slice(1), images[0]]);
            setTimeout(() => {
                pointer.style.transition = `transform 0s ease-in-out`;
                pointer.style.transform = `rotate(0deg)`;
                console.log("reset");
                pointer.style.opacity = `1`;
            }, 300)
        }

        setMouseHold(false);
    }

    useEffect(() => {
        setTimeout(() => {
            setImages2([...images2.slice(1), images2[0]]);
        }, 200)
        
    }, [images])

    const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        
        let pointer = document.getElementById('pointer');
        if (pointer) {
            pointer.style.transition = `opacity 0.2s ease-in-out`;
            pointer.style.opacity = `0`;
            
            setTimeout(() => {
                pointer.style.transition = `transform 0s ease-in-out`;
                pointer.style.transform = `rotate(0deg)`;
                console.log("reset");
                pointer.style.opacity = `1`;
            }, 200)
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
        <div className="relative w-screen h-screen p-3 overflow-clip mb-[200px]">
            <div ref={containerRef} onMouseDown={(e) => handleMouseDown(e)} onMouseUp={(e) => handleMouseUp(e)} onMouseLeave={(e) => handleMouseUp(e)} onTouchStart={(e) => handleTouchStart((e))} onTouchEnd={(e) => handleMouseUp(e)} className="w-[calc(100%_-_24px)] h-[calc(100%_-_24px)] overflow-visible border-primary-50 bg-primary-950 border-[1px] flex items-end justify-center overflow-x-visible absolute">
            <img id="back-picture" src={`/photography/IMG_${images2[0]}.JPG`} alt="IMG_5092" className='w-full h-full object-cover pointer-events-none' />
                <div id="pointer" className='absolute overflow-hidden w-full h-full border-[1px] top-0 border-primary-50 origin-bottom pointer-events-none'>
                    <img src={`/photography/IMG_${images[0]}.JPG`} alt="IMG_5092" className='w-full h-full object-cover pointer-events-none' />
                </div>
            </div>
        </div>
    )
}