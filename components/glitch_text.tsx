import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function GlitchTitle(props: {children: string, className?: string, auraText?: string}) {
    const [particles, setParticles] = useState([]);

    return (
        <span id={`${props.children.split(' ').join('-').toLowerCase()}`} className={`relative  font-medium text-5xl sm:text-8xl  flex justify-start ${props.className}`}>
            <h1 className={`${styles.title} z-40 whitespace-nowrap`}>{props.children}</h1>
            <h1 className={`${styles.afterimage1} absolute bottom-0 z-0 whitespace-nowrap`}>{props.children}</h1>
            <h1 className={`${styles.afterimage2} absolute bottom-0 z-0 whitespace-nowrap`}>{props.children}</h1>
            <h1 className={`${styles.afterimage3} absolute bottom-0 z-0 whitespace-nowrap`}>{props.children}</h1>
        </span>
    )
}