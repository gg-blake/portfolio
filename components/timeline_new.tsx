import { useEffect, useRef, useState, useCallback } from "react";
import bg from "../public/meter-thin.png";
import GlitchTitle from "./glitch_text";
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
    useReactFlow
  } from 'reactflow';
  
  import 'reactflow/dist/style.css';
import { on } from "events";


const EXAMPLETIMELINE: TimelineEntry[] = [
    {
        "title": "BS in Computer Science",
        "subtitle": "University of Massachusetts Boston",
        "location": "Boston, MA",
        "startDate": "2021-09-06",
        "endDate": "2025-05-01",
        "description": "Currently pursuing a BS in Computer Science at UMass Boston.",
        "events": [
            {
                "title": "CS110",
                "subtitle": "Introduction to Computing",
                "date": "2021-09-06",
                "description": "Introduction to Computing",
                "tags": ["Python", "Object-Oriented Programming", "Scripting"]
            },
            {
                "title": "CS210",
                "subtitle": "Intermediate to Computing and Data Structures",
                "date": "2022-09-06",
                "description": "Intermediate to Computing and Data Structures",
                "tags": ["Algorithms", "Java", "Data Structures"]
            },
            {
                "title": "CS240",
                "subtitle": "Programming in C",
                "date": "2022-09-06",
                "description": "Programming in C",
                "tags": ["C", "Low-level Programming", "Memory Management"]
            },
            {
                "title": "CS285L",
                "subtitle": "Social Issues and Ethics in Computing",
                "date": "2024-01-22",
                "description": "Social Issues and Ethics in Computing",
                "tags": ["Writing", "Research", "Ethics", "Critical Thinking"]
            },
            {
                "title": "CS341",
                "subtitle": "Computer Architecture and Organization",
                "date": "2024-01-22",
                "description": "Computer Architecture and Organization",
                "tags": ["C", "Low-level Programming", "Team Projects", "Assembly"]
            },
        ]
    },
    {
        "title": "Minor in Japanese",
        "subtitle": "University of Massachusetts Boston",
        "location": "Boston, MA",
        "startDate": "2021-09-06",
        "endDate": "2024-12-01",
        "description": "Currently pursuing a Minor in Japanese at UMass Boston.",
        "events": [
            {
                "title": "JAPAN101",
                "subtitle": "Elementary Japanese I",
                "date": "2021-09-06",
                "description": "Elementary Japanese I",
                "tags": ["Japanese", "Language", "Writing", "Speaking"]
            },
            {
                "title": "JAPAN102",
                "subtitle": "Elementary Japanese II",
                "date": "2022-01-22",
                "description": "Elementary Japanese II",
                "tags": ["Japanese", "Language", "Writing", "Speaking"]
            },
            {
                "title": "JAPAN201",
                "subtitle": "Intermediate Japanese I",
                "date": "2022-09-06",
                "description": "Intermediate Japanese I",
                "tags": ["Japanese", "Language", "Writing", "Speaking"]
            },
            {
                "title": "JAPAN202",
                "subtitle": "Intermediate Japanese II",
                "date": "2023-01-22",
                "description": "ntermediate Japanese II",
                "tags": ["Japanese", "Language", "Writing", "Speaking"]
            },
            {
                "title": "JAPAN302",
                "subtitle": "Advanced Intermediate Japanese II",
                "date": "2022-01-22",
                "description": "Advanced Intermediate Japanese II",
                "tags": ["Japanese", "Language", "Writing", "Speaking"]
            },
        ]
    },
    {
        "title": "Japanese Language Exchange Program",
        "subtitle": "Soka University",
        "location": "Hachioji, Tokyo, Japan",
        "startDate": "2023-08-29",
        "endDate": "2024-01-22",
        "description": "Participated in a Japanese Language Exchange Program at Soka University in Tokyo, Japan.",
        "events": [
            {
                "title": "GJLC113",
                "subtitle": "General Japanese I",
                "date": "2023-08-29",
                "description": "General Japanese I",
                "tags": ["Japanese", "Grammar", "Vocab", "Reading"]
            },
            {
                "title": "GJLC116",
                "subtitle": "Japanese Practice I",
                "date": "2023-08-29",
                "description": "Japanese Practice I",
                "tags": ["Japanese", "Writing"]
            },
            {
                "title": "GJLC241",
                "subtitle": "Japanese Communication I",
                "date": "2023-08-29",
                "description": "Japanese Communication I",
                "tags": ["Japanese", "Conversation", "Speaking", "Presentation", "Listening"]
            },
            {
                "title": "GJLC117",
                "subtitle": "Kanji (Elementary)",
                "date": "2023-08-29",
                "description": "Kanji (Elementary)",
                "tags": ["Japanese", "Kanji", "Writing", "Reading"]
            },
            {
                "title": "GJLC162",
                "subtitle": "Japanese Writing I",
                "date": "2023-08-29",
                "description": "Japanese Writing I",
                "tags": ["Japanese", "Essay", "Writing", "Reading", "Grammar"]
            },
            {
                "title": "GJLC152",
                "subtitle": "Japanese Listening I",
                "date": "2023-08-29",
                "description": "Japanese Listening I",
                "tags": ["Japanese", "Listening", "Writing"]
            },
            {
                "title": "GJLC118",
                "subtitle": "Japanese Traditional Culture",
                "date": "2023-08-29",
                "description": "Japanese Traditional Culture",
                "tags": ["Japanese", "Cultrue", "History", "Elective", "Listening"]
            },
        ]
    },
    {
        "title": "UMass Boston IT Help Desk",
        "subtitle": "University of Massachusetts Boston",
        "location": "Boston, MA",
        "startDate": "2021-09-30",
        "endDate": "2025-05-01",
        "description": "Worked at the UMass Boston IT Help Desk.",
        "events": []
    }
]

const initialEdges: any[] = [];
const initialNodes: any[] = [];
EXAMPLETIMELINE.map((entry, i) => {
    initialEdges.push({ 
        id: `e${i+1}-${i+2}`, 
        source: `${i+1}`, 
        target: `${i+2}` 
    });
    initialNodes.push({ 
        id: `${i+1}`,
        style: { border: "1px solid white", backgroundColor: 'black', borderRadius: '0px', padding: '0px'}, 
        position: { x: i%2*200, y: i*200 }, 
        data: { label: <TimelineEvent {...entry} />} 
    });
})


function DateNode({ date  }: { date: string }) {
    const nth = (d: number) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    };

    const formatDate = (date: string) => {
        const d = new Date(date);
        const month = d.toLocaleString('default', { month: 'short' });
        const day = d.getDate();
        const year = d.getFullYear();
        return `${month} ${day}${nth(day)}, ${year}`;
    }

    return (
        <span className="flex flex-row px-3 py-[1px] items-center justify-start gap-1">
            <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" height="12" viewBox="0 -960 960 960" width="12"><path d="M212.309-100.001q-30.308 0-51.308-21t-21-51.308v-535.382q0-30.308 21-51.308t51.308-21h55.385v-84.615h61.537v84.615h303.076v-84.615h59.999v84.615h55.385q30.308 0 51.308 21t21 51.308v535.382q0 30.308-21 51.308t-51.308 21H212.309Zm0-59.999h535.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-375.382H200v375.382q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Z"/></svg>
            {formatDate(date)}
        </span>
    )
}

function Flow({ startDate, endDate, height, width }: {startDate: string, endDate: string, height: number, width: number}) {
    const nodeStyle = { border: "1px solid white", backgroundColor: 'black', borderRadius: '3px', padding: '0px', fontFamily: "Poppins", fontSize: "10px", color: "white", textAlign: "left", width: "auto" };
    const nth = (d) => {
        if (d > 3 && d < 21) return 'th';
        switch (d % 10) {
            case 1:  return "st";
            case 2:  return "nd";
            case 3:  return "rd";
            default: return "th";
        }
    };

    const formatDate = (date: string) => {
        const d = new Date(date);
        const month = d.toLocaleString('default', { month: 'short' });
        const day = d.getDate();
        const year = d.getFullYear();
        return `${month} ${day}${nth(day)}, ${year}`;
    }
    
    const initialNodes = [
        {
            id: '1',
            style: nodeStyle,
            position: {x: 0, y: 0},
            type: 'input',
            sourcePosition: 'right',
            targetPosition: 'left',
            className: "nodrag",
            data: { label: <DateNode date={startDate} /> }
        },
        {
            id: '2',
            style: nodeStyle,
            position: {x: width*2, y: 0},
            sourcePosition: 'right',
            type: 'output',
            targetPosition: 'left',
            className: "nodrag",
            data: { label: <DateNode date={endDate} /> }
        }
    ]
    const initialEdges = [
        { id: 'e1-2', source: '1', target: '2', animated: true }
    ]
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const flowRef = useRef(null);

    
  
    const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    useEffect(() => {
        const watermark = document.getElementsByClassName("react-flow__panel react-flow__attribution bottom right");
        if (!watermark) return;
        Object.values(watermark).map((el: any) => el.style.display = "none");
    }, [])
  
    return (
      <ReactFlow  ref={flowRef}
        nodes={nodes}
        edges={edges}
        style={{width: "100%", height: "auto"}}
        onConnect={onConnect}
        panOnDrag={false}
        zoomOnScroll={false}
        panOnScroll={false}
      >
        
      </ReactFlow>
    );
  }

interface TimelineEntryEvent {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    tags: string[];
}

interface TimelineEntry {
    title: string;
    subtitle: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
    events: TimelineEntryEvent[];
}

function EventCounter({count, bubbleSize, maxItems=3, spacingX=10, spacingY=0}: {count: number, bubbleSize: number, maxItems: number, spacingX: number, spacingY: number, }) {
    const bubbleList = [];
    for (let i = 0; i < Math.min(count, maxItems); i++) {
        let currentBubble = <div style={{width: `${bubbleSize}px`, height: `${bubbleSize}px`, left: `${i * spacingX}px`, top: `${i * spacingY}px`}} className={`absolute bg-black border-white border-[1px] box-border rounded-full shadow-md`}></div>;
        if (count > maxItems && i === maxItems - 1) {
            currentBubble = <div style={{width: `${bubbleSize}px`, height: `${bubbleSize}px`, left: `${i * spacingX}px`, top: `${i * spacingY}px`}} className={`absolute bg-black border-white border-[1px] box-border rounded-full flex flex-row items-center justify-center shadow-md`}>+{count - maxItems + 1}</div>;
        }
        bubbleList.push(currentBubble);
    }

    return (
        <div className={`relative w-full h-[${bubbleSize}px] text-[.7rem]`}>
            {bubbleList}
        </div>
    )
}

function EventContents({events}: {events: TimelineEntryEvent[]}) {
    function EventItem({event}: {event: TimelineEntryEvent}) {
        return (
            <div className="flex flex-col border-white border-[1px] min-w-[calc(min(100%,400px))] mt-3">
                <div className="w-full h-[10px] bg-white"></div>
                <div className="p-3 w-full">
                <h2 className="text-base font-medium leading-tight">{event.title}</h2>
                <h3 className="text-base font-normal leading-tight">{event.subtitle}</h3>
                <div className="mt-2 flex flex-wrap text-[.6rem] gap-1">{event.tags.map((tag) => <span className="border-[1px] border-[white] rounded-sm px-[3px] leading-none py-[2px]">{tag}</span>)}</div>
                <div className="mt-2 text-sm leading-none font-medium underline">Description</div>
                <div className="text-sm leading-tight">{event.description}</div>
                </div>
            </div>
        )
    }

    const [toggle, setToggle] = useState(false);


    return (
        <div>
            <div onClick={() => setToggle(!toggle)} className="flex flex-row flex-wrap gap-x-3">
                {toggle && events.map((event: TimelineEntryEvent) => <EventItem event={event} />)}
            </div>
            <div onClick={() => setToggle(!toggle)} className="mt-3"><div className="inline-block justify-center items-center p-3 text-xl border-[1px] border-white hover:underline no-underline">{toggle ? "Show Less" : "Show More"}</div></div>
        </div>
    )
}

function TimelineEvent(props: TimelineEntry) {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const start = parseDate(props.startDate).getTime();
            const end = parseDate(props.endDate).getTime();
            if (timelinePosition >= start && timelinePosition <= end) {
                setToggle(true);
            } else {
                setToggle(false);
            }
        })
    }, [])

    return (
        <div className="w-full h-auto p-3 box-border border-[1px] border-white">
            <div className="h-[21px] w-full mb-3">
                <Flow startDate={props.startDate} endDate={props.endDate} height={10} width={100} />
            </div>
            <h1 className="text-white text-4xl leading-tight">{props.title}</h1>
            <h2 className="text-white text-sm leading-none">{props.subtitle}</h2>
            
            <div className="text-sm leading-tight font-semibold underline mt-3">Description</div>
            <div className="text-sm leading-tight">{props.description}</div>
            
            {props.events.length > 0 && <div className="mt-3"><EventCounter count={props.events.length} bubbleSize={30} maxItems={3} spacingX={15} spacingY={0} /></div>}
            {props.events.length > 0 && <EventContents events={props.events} />}
        </div>
    )
}


function parseDate(date: string) {
    return new Date(date);
}

function getTimelineSpanMs() {
    const start = parseDate(EXAMPLETIMELINE[0].startDate);
    const end = parseDate(EXAMPLETIMELINE[0].endDate);
    const diff = end.getTime() - start.getTime();
    return diff;
}

function getTimelineSpanYrs() {
    const start = parseDate(EXAMPLETIMELINE[0].startDate);
    const end = parseDate(EXAMPLETIMELINE[0].endDate);
    const diff = end.getFullYear() - start.getFullYear();
    return diff;
}

function getTimelineStartMs() {
    const start = parseDate(EXAMPLETIMELINE[0].startDate);
    return start.getTime();
}

function getTimelineStartYr() {
    const start = parseDate(EXAMPLETIMELINE[0].startDate);
    return start.getFullYear();
}

var timelinePosition = 0;

function TimelineScroll() {
    const [toggle, setToggle] = useState(false);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (!timelineRef.current) return;
            const containerTopStatic = -(document.getElementById("scroll-container")?.getBoundingClientRect().top) / document.getElementById("scroll-container").clientHeight;
            timelinePosition = containerTopStatic * getTimelineSpanMs() + getTimelineStartMs();
            console.log(containerTopStatic * getTimelineSpanMs() + getTimelineStartMs());
            timelineRef.current.scroll({top: containerTopStatic * timelineRef.current.scrollHeight, behavior: "smooth"});
        })
    }, [])

    useEffect(() => {
        const el = document.getElementById("scroll");
        if (!el) return;
        console.log(window.innerHeight);
        el.style.height = `${window.innerHeight * (getTimelineSpanYrs() + 1)}px`;
    }, [])

    return (
        <div ref={timelineRef} style={{backgroundImage: `url(${bg.src})`, backgroundSize: `20px ${toggle ? "100%" : "20px"}`}} className="no-scrollbar h-full max-h-[min(500px,_70vh)] grid grid-cols-[20px_max-content] w-auto gap-3 justify-end box-content bg-[length:20px_20px] bg-repeat-y bg-local overflow-y-scroll transition-all">
            <div id="scroll" className={`w-[20px] flex flex-col overflow-x-visible relative`}>
                
            </div>
            <div className="h-full w-auto flex flex-col">
                {
                    [...Array(getTimelineSpanYrs() + 1)].map((_, i) => {
                        return (
                            <div className="sticky top-0 flex-grow w-auto overflow-x-visible">
                                <div className="w-auto border-[1px] box-border border-white text-[.7rem] shadow-md bg-black p-1">{getTimelineStartYr() + i}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default function TimelineNew() {

    return (
        <div id="scroll-container" className="w-screen h-auto p-3 mt-12 flex flex-col gap-3">
            <div className="sticky top-[calc(70px+.75rem)] p-3 border-white border-[1px] box-border z-[900] bg-black">
                <GlitchTitle>Timeline</GlitchTitle>
            </div>
            { EXAMPLETIMELINE.map((entry: TimelineEntry, i: number) => <TimelineEvent {...entry} /> )}
            
        </div>
    )
}