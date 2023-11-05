import { useEffect, useState } from 'react';

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
        <div className='w-[400px] h-[400px] border-[1px] border-white p-3'>
            <h2 className="p-0 m-0 text-[40px]">{title}</h2>
            <h3 className="p-0 m-0 text-[20px] opacity-50">{date}</h3>
            <p className="p-0 mt-3 text-[15px]">{desc}</p>
            <a className="w-auto h-auto py-2 px-2 bg-gradient-to-r from-violet-400 to-teal-400 text-white rounded-sm" href={href} target="_blank">View Project</a>
        </div>
    )
}

function YearContainer({ children, year }: {children?: any, year: string}) {
    useEffect(() => {
        addEventListener('onscroll', (e) => {
            console.log(e);
        })
    }, [])

    return (
        <div className="flex flex-col w-full border-[1px] border-white p-3">
            <h1 className="p-0 m-0 text-[40px] font-semibold w-full flex-grow">{year}</h1>
            <div className="flex flex-row flex-wrap h-aut gap-3">
                { children }
            </div>
        </div>
    )
}

export default function Projects() {
    var yearContainerList = [];
    for (let i = 0; i < EXAMPLEPROJECT.length; i++) {
        const currentYear = EXAMPLEPROJECT[i];
        const projectItemList = [];
        for (let j = 0; j < currentYear.content.length; j++) {
            const currentProjectItem = currentYear.content[j];
            const element = <ProjectItem {...currentProjectItem} />;
            projectItemList.push(element);
        }
        const yearElement = <YearContainer year={currentYear.year}>{projectItemList}</YearContainer>;
        yearContainerList.push(yearElement);
    }

    return (
        <div className="w-full h-[424px] overflow-y-scroll flex flex-col p-3 gap-3">
            { yearContainerList }
        </div>
    )
}