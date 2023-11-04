import { FC, useLayoutEffect } from 'react'
import styles from '../styles/MovingBanner.module.css'

interface MovingWordProps {
    className: string;
    value: string;
}

const MovingWord: FC<MovingWordProps> = ({className, value}) => {
    return (
        <p style={{width: "auto", height: "auto"}} className={`${styles.movingword} ${className}`}>{value}</p>
    )
}

interface MovingBannerProps {
    className: string;
    words: string;
}

const MovingBanner: FC<MovingBannerProps> = ({className, words}) => {
    const wordsArray = words.split(' ').map(word => <MovingWord className={className} value={word} />);


    return (
        <div className={`${className}`}>
            {wordsArray}
        </div>
    )
}

export default MovingBanner;