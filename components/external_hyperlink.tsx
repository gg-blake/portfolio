import { FC, useState } from 'react';

interface ExternalHyperlinkProps {
    children: React.ReactNode;
    className: string;
    normal: string;
    hover: string;
}

const ExternalHyperlink: FC<ExternalHyperlinkProps> = ({children, className, normal, hover}) => {
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <>
        {children}
        <p onMouseEnter={() => setMouseOver(true)} onMouseLeave={() => setMouseOver(false)}  className={className}>{!mouseOver ? normal : hover}</p>
        </>
    )
}

export default ExternalHyperlink;