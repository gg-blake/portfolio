import { useEffect, useState, useRef, Dispatch, SetStateAction } from 'react';

const EXAMPLEPROJECT = [
    {
        year: "2021",
        content: [
            {
                date: "9/22",
                title: "Snake AI",
                desc: "Created an PyTorch-like machine-learning library using Python. Used the library to implement input and control nodes for a snake game. Tested and refined a genetic-learning algorithm to improve the snakes performance generation after generation. Created functionality for saving checkpoints of generations and their brain-states for portability.",
                href: "https://github.com/gg-blake/snake-ml"
            },
            {
                date: "9/22",
                title: "Snake AI",
                desc: "Created an PyTorch-like machine-learning library using Python. Used the library to implement input and control nodes for a snake game. Tested and refined a genetic-learning algorithm to improve the snakes performance generation after generation. Created functionality for saving checkpoints of generations and their brain-states for portability.",
                href: "https://github.com/gg-blake/snake-ml"
            }
        ]
    },
    {
        year: "2022",
        content: [
            {
                date: "9/22",
                title: "Snake AI",
                desc: "Created an PyTorch-like machine-learning library using Python. Used the library to implement input and control nodes for a snake game. Tested and refined a genetic-learning algorithm to improve the snakes performance generation after generation. Created functionality for saving checkpoints of generations and their brain-states for portability.",
                href: "https://github.com/gg-blake/snake-ml"
            },
            {
                date: "9/22",
                title: "Snake AI",
                desc: "Created an PyTorch-like machine-learning library using Python. Used the library to implement input and control nodes for a snake game. Tested and refined a genetic-learning algorithm to improve the snakes performance generation after generation. Created functionality for saving checkpoints of generations and their brain-states for portability.",
                href: "https://github.com/gg-blake/snake-ml"
            },
            {
                date: "9/22",
                title: "Snake AI",
                desc: "Created an PyTorch-like machine-learning library using Python. Used the library to implement input and control nodes for a snake game. Tested and refined a genetic-learning algorithm to improve the snakes performance generation after generation. Created functionality for saving checkpoints of generations and their brain-states for portability.",
                href: "https://github.com/gg-blake/snake-ml"
            }
        ]
    },
    {
        year: "2023",
        content: [
            {
                date: "9/22",
                title: "Snake AI",
                desc: "Created an PyTorch-like machine-learning library using Python. Used the library to implement input and control nodes for a snake game. Tested and refined a genetic-learning algorithm to improve the snakes performance generation after generation. Created functionality for saving checkpoints of generations and their brain-states for portability.",
                href: "https://github.com/gg-blake/snake-ml"
            },
        ]
    },

];

interface ProjectEntry {
    date: string;
    title: string;
    desc: string;
    href: string;
}

function ProjectItem({ date, title, desc, href }: ProjectEntry) {

    return (
        <div className='w-[400px] overflow-y-scroll h-[400px] border-[1px] border-white p-3'>
            <h2 className="p-0 m-0 text-[40px] ">{title}</h2>
            <h3 className="p-0 m-0 text-[20px] opacity-50">{date}</h3>
            <div className="p-0 mt-3 text-[15px]">{desc}</div>
            <a className="w-auto h-auto py-2 px-2 bg-gradient-to-r from-violet-400 to-teal-400 text-white rounded-sm" href={href} target="_blank">View Project</a>
        </div>
    )
}

function YearContainer({ children, year, order, currentIndex }: {children?: any, year: string, order: number, currentIndex: [number, Dispatch<SetStateAction<number>>]}) {
    const thisRef = useRef<HTMLDivElement>(null);
    const [focus, setFocus] = useState(order == 0);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        if (!thisRef.current) return;
        if (!thisRef.current.parentElement) return;
        // height when minimized: 98px
        thisRef.current.parentElement.addEventListener('scroll', (e) => {
            if (Math.floor(scrollValue / 30) == order) {
                setFocus(true);
                thisRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});
            } else if (Math.floor(scrollValue / 30) > 3){
                scrollValue = 0;
            } else {
                setFocus(false);
            }
            
            
            console.log((scrollValue % 2000) / 2000);
        })
    }, [])

    

    return (
        <div style={{height: focus ? "500px" : "84px"}} onClick={(e) => {setFocus(!focus); scrollValue=order*30; thisRef.current!.scrollIntoView({behavior:'smooth', block:'start'})} } ref={thisRef} className="flex flex-col h-[84px] relative w-full border-[1px] overflow-y-clip border-white p-3 transition-[height] duration-500">
            <h1 className="p-0 m-0 text-[40px] h-auto font-semibold w-full">{year}</h1>
            <div className="flex flex-wrap relative h-full gap-3 mt-3">
                { children }
            </div>
        </div>
    )
}
var scrollValue = 0;
export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    var yearContainerList = [<div className="w-full h-[500px]"></div>];
    for (let i = 0; i < EXAMPLEPROJECT.length; i++) {
        const currentYear = EXAMPLEPROJECT[i];
        const projectItemList = [];
        for (let j = 0; j < currentYear.content.length; j++) {
            const currentProjectItem = currentYear.content[j];
            const element = <ProjectItem {...currentProjectItem} />;
            projectItemList.push(element);
        }
        const yearElement = <YearContainer year={currentYear.year} order={i} currentIndex={[currentIndex, setCurrentIndex]}>{projectItemList}</YearContainer>;
        yearContainerList.push(yearElement);
    }

    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.addEventListener('scroll', (e) => {
            containerRef.current.scrollTo({top: 0});
            scrollValue++;
        })
        window.addEventListener
    }, [])

    return (
        <div ref={containerRef} onMouseEnter={() => {scrollValue=0}} className="w-full h-[700px] overflow-y-scroll flex flex-col p-3 gap-3">
            { yearContainerList }
            
        </div>
    )
}