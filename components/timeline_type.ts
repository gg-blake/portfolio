interface Program {
    "Program Name": string;
    "Location": string;
    "Organization": string;
    "Start": string;
    "End": string;
    "Program Description": string;
    "Events": Course[];
}

interface Course {
    "Course ID": string;
    "Course Name": string;
    "Program Name": string;
    "Start Date": string;
    "Description": string;
    "Professor": string;
    "Location": string;
}

export type {Program, Course};