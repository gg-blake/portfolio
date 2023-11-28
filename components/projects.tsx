import { useEffect, useState, useRef, Dispatch, SetStateAction, createContext, useContext } from 'react';
import GlitchTitle from './glitch_text';

const EXAMPLEPROJECT = [
    {
        year: "2021",
        content: [
            {
                date: "June",
                title: "Minesweeper",
                desc: "Created a minesweeper clone using the Python GUI library Pygame. Implemented a recursive floodfill algorithm to reveal all adjacent tiles when a tile with no adjacent mines is clicked. Redesigned game assets in Photoshop to create a more modern look.",
                href: "https://github.com/gg-blake/snake-ml",
                location: "Home, Swampscott, MA",
                tags: [, "Python", "Pygame", "Game Development", "Algorithms", "Game Design"]
            },
            {
                date: "August",
                title: "Raspberry Pi Multipurpose Server",
                desc: "Set up a Rasperry Pi to run a multipurpose server. The server was used to host my old web portfolio. The server supported services for SSH, VPN, FTP, HTTP/S, and eventually Email.",
                href: "https://github.com/gg-blake/snake-ml",
                location: "Home, Swampscott, MA",
                tags: [, "Networking", "Python", "Linux", "Ubuntu", "PHP", "HTML", "CSS", "JavaScript"]
            }
        ]
    },
    {
        year: "2022",
        content: [
            {
                date: "June",
                title: "MBTA Train Tracker",
                desc: "Using the MBTA Rest API, create a website that displayed train information such as arrival times, delays, and station closures. Was also the first project where I used TypeScript. The project was a success and was used by many of my friends and family to track times.",
                href: "https://github.com/gg-blake/snake-ml",
                location: "Home, Swampscott, MA",
                tags: [, "TypeScript", "Firefox", "RESTful APIs", "React", "NextJS", "PyTorch"]
            },
            {
                date: "December",
                title: "Music Transfer Tool",
                desc: "Using React, a popular JavaScript framework for developing responsive, scaleable, user interfaces, I created a web tool for access music files from my home web server. This was the first time I had developed an application for my remote web server completely remotely, while I was at university. The application ran on a NodeJS server and used SFTP for secure file transfer and streaming.",
                href: "https://github.com/gg-blake/snake-ml",
                location: "UMass Boston, 240 William T. Morrissey Blvd.",
                tags: [, "TypeScript", "NextJS", "React", "SFTP", "NAS", "SSH", "NodeJS"]
            },
            {
                date: "December",
                title: "Minesweeper V2",
                desc: "To improve my skills in low-level languages, I recreated my earlier python Minesweeper clone in Rust. The game had a similar GUI to the original, but was much faster.",
                href: "https://github.com/gg-blake/snake-ml",
                location: "UMass Boston, 240 William T. Morrissey Blvd.",
                tags: [, "Rust", "Low-level Language", "Game Development", "Memory Management", "Game Design", "GTK"]
            },
            
        ]
    },
    {
        year: "2023",
        content: [
            {
                date: "February",
                title: "Snake AI",
                desc: "Created an PyTorch-like machine-learning library using Python. Used the library to implement input and control nodes for a snake game. Tested and refined a genetic-learning algorithm to improve the snakes performance generation after generation. Created functionality for saving checkpoints of generations and their brain-states for portability.",
                href: "https://github.com/gg-blake/snake-ml",
                location: "UMass Boston, 240 William T. Morrissey Blvd.",
                tags: [, "Python", "PyTorch", "Machine Learning", "Genetic Algorithm", "Python", "PyTorch", "Machine Learning", "Genetic Algorithm"]
            },
            {
                date: "May",
                title: "CSClub Website",
                desc: "",
                href: "https://github.com/gg-blake/snake-ml",
                location: "UMass Boston, 240 William T. Morrissey Blvd.",
                tags: [, "NextJS", "TypeScript", "React", "TailwindCSS", "HTMX", "Professionalism", "Portfolio", "Web Design"]
            },
            {
                date: "August",
                title: "Web Portfolio",
                desc: "This is it! What do you think? I created this website using NextJS, a React framework for server-side rendering. I used TypeScript to write the code, and TailwindCSS for styling. This website once it is completed will eventually be hosted on my server back home with a custom domain name.",
                href: "https://github.com/gg-blake/snake-ml",
                location: "Soka University, 1 Chome-236 Tangimachi, Hachioji, Tokyo 192-0003, JP",
                tags: [, "NextJS", "TypeScript", "React", "TailwindCSS", "HTMX", "Professionalism", "Portfolio", "Web Design"]
            },
        ]
    },
    
];

interface ProjectEntry {
    date: string;
    title: string;
    desc: string;
    href: string;
    location: string;
    tags: string[];
}

function ProjectItem({ date, title, desc, href, location, tags }: ProjectEntry) {

    return (
        <div className='w-[400px] overflow-y-auto h-[380px] border-[1px] box-border relative border-white'>
            <div className="w-full h-[10px] bg-white"></div>
            <div className='p-3'>
                <h2 className="p-0 m-0 text-[40px] leading-none">{title}</h2>
                <span className="text-[.7rem] flex flex-row flex-wrap gap-3 mt-3">
                    <span className="flex flex-row flex-wrap gap-3 items-center">
                        <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12"><path d="M212.309-100.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h55.385v-84.615h61.537v84.615h303.076v-84.615h59.999v84.615h55.385q30.308 0 51.308 21t21 51.308v535.382q0 30.308-21 51.308t-51.308 21H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-375.382H200v375.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Z"/></svg>
                        
                        <h3 className="p-0 m-0">{date}</h3>
                        <span className="flex flex-row items-center gap-3"><svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12"><path d="M480.068-485.385q29.855 0 51.047-21.26 21.192-21.26 21.192-51.115t-21.26-51.047q-21.26-21.192-51.115-21.192t-51.047 21.26q-21.192 21.26-21.192 51.115t21.26 51.047q21.26 21.192 51.115 21.192ZM480-179.461q117.384-105.076 179.654-201.577 62.269-96.5 62.269-169.039 0-109.384-69.5-179.846T480-800.385q-102.923 0-172.423 70.462t-69.5 179.846q0 72.539 62.269 169.039Q362.616-284.537 480-179.461Zm0 79.844Q329.001-230.463 253.539-343.154q-75.461-112.692-75.461-206.923 0-138.46 89.577-224.191Q357.231-859.999 480-859.999t212.345 85.731q89.577 85.731 89.577 224.191 0 94.231-75.461 206.923Q630.999-230.463 480-99.617Zm0-458.075Z"/></svg>
                        <h3 className="p-0 m-0">{location}</h3></span>
                    </span>
                    <span className='flex flex-wrap text-[.6rem] gap-1'>{
                        tags.map((tag) => <span className="border-[1px] border-[white] rounded-sm px-[3px] leading-none py-[2px]">{tag}</span>)
                    }</span>
                </span>
                <div className="p-0 mt-3 text-[15px]">{desc}</div>
                <a className="w-auto h-auto py-2 px-2 inline-block absolute bottom-3 border-[1px] mt-3 border-white hover:bg-white hover:text-black hover:border-[0px] text-white underline hover:no-underline active:bg-black active:border-[1px] active:text-blue-400 rounded-sm" href={href} target="_blank">View Project</a>
            </div>
        </div>
    )
}



function YearContainer({ children, year, order, length }: {children?: any, year: string, order: number, length: number }) {
    const [focus, setFocus] = useState(false);
    const thisRef = useRef(null);

    useEffect(() => {
        if (!thisRef.current) return;
        const projectContainerRef = thisRef.current.parentElement;
        if (!projectContainerRef) return;
        projectContainerRef.addEventListener("scroll", () => {
            if (!thisRef.current) return;
            if (!thisRef.current.previousSibling) return;
            setFocus(inViewCount.length - 1 == order);
            
            if (projectContainerRef.scrollTop == 0 && order == 0) console.log("top");
            const inView = thisRef.current.getBoundingClientRect().top - thisRef.current.previousSibling.getBoundingClientRect().top <= 500;
            if (!inView) {
                inViewCount = inViewCount.filter((value) => value != order);
            } else {
                if (inViewCount.includes(order)) return;
                inViewCount.push(order);
            }
        });
    }, [])

    useEffect(() => {
        //console.log(focus)
    }, [focus])

    const scrollIntoView = () => {
        if (!thisRef.current) return;
        if (!thisRef.current.parentElement) return;
        const projectContainerRef = thisRef.current.parentElement;
        projectContainerRef.scroll({top: thisRef.current.getBoundingClientRect().top - 88 - 37.5, behavior: "smooth"});
    }

    return (
        <>
        <div id={`project-year-${year}`} ref={thisRef} style={{top: `${(order)*(84-37.5)}px`}} className="flex flex-col h-[500px] bg-black sticky box-border w-full border-[1px] overflow-y-clip border-white p-3 transition-[height] duration-500">
            <h1 onClick={() => scrollIntoView()} className="p-0 m-0 hover:underline active:no-underline text-[15px] h-auto font-semibold w-full">{year}</h1>
            <div className="flex flex-wrap relative h-full gap-3 my-3 overflow-y-scroll">
                { children }
            </div>
        </div>
        </>
    )
}

var inViewCount: number[] = [0];

export default function Projects() {
    const containerRef = useRef(null);
    const [inView, setInView] = useState<any>([]);

    useEffect(() => {
        if (!containerRef.current) return;
        containerRef.current.addEventListener("scroll", () => {
            const negative = EXAMPLEPROJECT.filter((value, index) => !inViewCount.includes(index));
            setInView(negative);
            
        })
        containerRef.current.addEventListener("mouseover", (e) => {
            e.preventDefault();
            
        }, {passive: false})
        window.addEventListener("scroll", (e) => {
            if (!containerRef.current) return;
            const containerTopStatic = -(document.getElementById("project-container")?.getBoundingClientRect().top) / document.getElementById("project-container").clientHeight;
            containerRef.current.scroll({top: containerTopStatic * containerRef.current.scrollHeight, behavior: "smooth"});
            
        }, {passive: false})
    }, [])

    

    function HiddenProjectItem({ year }: { year: string }) {
        
        const scrollToById = (id: string) => {
            
            if (!containerRef.current) return;
            const element = document.getElementById(id);
            if (!element) return;
            containerRef.current.scroll({top: element.getBoundingClientRect().top - 50, behavior: "smooth"});
        }

        return (
            <div onClick={() => scrollToById(`project-year-${year}`)} className="h-[50px] w-full border-white border-[1px] border-b-0 text-[15px] bg-black p-3 font-semibold hover:underline active:no-underline">{year}</div>
        )
    }
    
    return (
        <div style={{height: EXAMPLEPROJECT.length * 500 + 300}} id="project-container" className="w-full h-[2000px] flex flex-col p-3 mt-12">
            <div className='flex flex-col sticky top-[calc(70px_+_.75rem)]'>
                <div className="sticky top-[calc(70px+.75rem)] p-3 border-white border-[1px] box-border mb-3 z-[900] bg-black">
                    <GlitchTitle>Projects</GlitchTitle>
                </div>
                <div style={{height: `${(EXAMPLEPROJECT.length - 1) * (88 - 37.5) + 486}px`}} ref={containerRef} className="w-full h-[752px] overflow-y-scroll grid grid-cols-1 gap-3 relative pointer-events-none">
                    
                    
                    { EXAMPLEPROJECT.map((currentYear, i) => {
                        return (
                            <YearContainer year={currentYear.year} order={i} length={EXAMPLEPROJECT.length}>{
                                currentYear.content.map((currentProjectItem, j) => <ProjectItem {...currentProjectItem} />)
                            }</YearContainer>
                        )
                    }) }
                    
                    
                </div>
                
            </div>
        </div>
    )
}