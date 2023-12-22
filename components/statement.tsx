import styles from '../styles/Home.module.css';

export default function Statement(props: {children: any}) {
    return (
        <div className="w-full h-auto p-6 text-4xl lg:text-6xl flex">
            
            <span className="inline-block "><span className="inline-block font-mono translate-y-[-10%]">{">"}</span>{props.children}<span className={`${styles.cursorblink} inline-block font-mono translate-y-[-20%] font-black`}>_</span></span>
            
        </div>
    )
}