import { FC } from "react";

interface OverviewCardProps {
    title: string;
    description: string;
}

const OverviewCard: FC<OverviewCardProps> = ({title, description}) => {
    return (
        <div className="p-[30px] w-[35vw] h-[35vw] border-[1px] border-white flex flex-col justify-center items-start">
            <h1 className="text-sm font-normal text-neutral-500">{title}</h1>
            <h2 className="text-2xl font-semibold text-neutral-200">{description}</h2>
        </div>
    )
}

export default OverviewCard;