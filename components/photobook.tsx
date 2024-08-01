//@ts-nocheck
import { useEffect, useState } from "react";
import EXIF from "exif-js";
import GlitchTitle from "./glitch_text";

const photos = [
    {
        id: "",
        date: "",
        location: ""
    }
]

const photosList = ["4792", "4819", "4865", "4886", "4891", "5008", "5010", "5054", "5092", "5147", "5149", "5153", "5235", "5189", "5197", "5202", "5206", "5211", "5212", "5215", "5216", "5227"]
    .map((id) => `/IMG_${id}.JPG`);

function Photo({ src }: { src: string} ) {
    const [metaData, setMetaData] = useState({});

    useEffect(() => {
        const photo = document.getElementById(`this-photo-${src}`) as HTMLImageElement;
        
        EXIF.getData(photo, function() {
            const img = new Image();
            img.src = src;
            var allMetaData = EXIF.getAllTags(this);
            allMetaData["width"] = img.width;
            allMetaData["height"] = img.height;
            setMetaData(allMetaData);
        });
    }, [])

    return (
        <div className="flex flex-col gap-3">
            <img id={`this-photo-${src}`} className="w-full h-auto rounded-lg" src={src} />
            <span className="flex flex-wrap w-full h-auto text-[.6rem] font-normal gap-3">
                <svg className="fill-white inline-block" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15"><path d="M480-275.386q68.846 0 116.73-47.884T644.614-440q0-68.846-47.884-116.73T480-604.614q-68.846 0-116.73 47.884T315.386-440q0 68.846 47.884 116.73T480-275.386Zm0-59.998q-44.308 0-74.462-30.154-30.154-30.154-30.154-74.462 0-44.308 30.154-74.462 30.154-30.154 74.462-30.154 44.308 0 74.462 30.154 30.154 30.154 30.154 74.462 0 44.308-30.154 74.462-30.154 30.154-74.462 30.154ZM172.309-140.001q-30.308 0-51.308-21t-21-51.308v-455.382q0-30.308 21-51.308t51.308-21h122.153l74-80h223.076l74 80h122.153q30.308 0 51.308 21t21 51.308v455.382q0 30.308-21 51.308t-51.308 21H172.309Z"/></svg>
                {metaData && metaData.Model}
                <svg className="fill-white inline-block" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15"><path d="M212.309-140.001q-30.308 0-51.308-21t-21-51.308V-360H200v147.691q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846H360v59.999H212.309Zm387.691 0V-200h147.691q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V-360h59.999v147.691q0 30.308-21 51.308t-51.308 21H600ZM140.001-600v-147.691q0-30.308 21-51.308t51.308-21H360V-760H212.309q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463V-600h-59.999ZM760-600v-147.691q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H600v-59.999h147.691q30.308 0 51.308 21t21 51.308V-600H760Z"/></svg>
                {metaData && `${metaData.width} x ${metaData.height}`}
                <span className="flex flex-wrap gap-3 items-center">
                    <svg className="fill-white inline-block" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 -960 960 960" width="15"><path d="M447.615-613.845 582.23-845.768q86 22.462 154 84.923t98.846 147H447.615Zm-101.384 96.538L213.463-750.384q52.461-51.461 120.691-80.538Q402.385-859.999 480-859.999q14.154 0 32.5 1.693 18.346 1.692 30.423 3.692L346.231-517.307ZM112.232-385.385q-6-24.769-9.115-48.038-3.116-23.27-3.116-46.577 0-67.154 22.231-127.846 22.231-60.692 63.846-112.307l192.769 334.768H112.232Zm268.076 271.922q-88.307-23.231-157.384-86.077-69.077-62.846-98.384-147.769h389.537L380.308-113.463ZM480-100.001q-15 0-31.462-2-16.461-2-28.923-4l195.692-334.384 131.615 230.384q-52.077 51.461-120.692 80.73-68.615 29.27-146.23 29.27Zm293.922-139.846L581.153-575.384h266.615q5.615 23.615 8.923 47.653 3.308 24.039 3.308 47.731 0 67.307-22.962 128.23-22.961 60.923-63.115 111.923Z"/></svg>
                    {metaData && `${metaData.ExposureTime?.numerator}/${metaData.ExposureTime?.denominator}s`}
                    <div className="w-[4px] h-[4px] rounded-full bg-white" />
                    <span>
                        <span className="font-serif italic inline-block font-thin pt-0">f&nbsp;</span>
                        {metaData && `${metaData.FNumber}`}
                    </span>
                    <div className="w-[4px] h-[4px] rounded-full bg-white" />
                    <span>{metaData && `${metaData.FocalLength}mm`}</span>
                    <div className="w-[4px] h-[4px] rounded-full bg-white" />
                    <span>{metaData && `ISO${metaData.ISOSpeedRatings}`}</span>
                    
                </span>
            </span>
        </div>
    )
}

export default function Photobook() {
    const [columns, setColumns] = useState(3);
    var imgLists = [];
    for (let i = 0; i < columns; i++) {
        imgLists.push([]);
    }
    for (let i = 0; i < photosList.length; i++) {
        const src = photosList[i];
        imgLists[i % columns].push(src);
    }

    return (
        <div id="photos" className="flex flex-col gap-3 p-3">
            <div className="sticky top-[calc(70px+.75rem)] p-3 border-primary-50 border-[1px] box-border z-[900] bg-primary-950">
                <GlitchTitle>Photos</GlitchTitle>
            </div>
            <div className="w-full grid grid-cols-3 gap-6">
                {imgLists.map((photos: string[], i: number) => (
                    <div key={`photo-column-${i}`} className="flex flex-col w-full gap-3">
                        {
                            photos.map((photo: string, j: number) => (
                                <Photo key={`photo-${i}-${j}`} src={photo} />
                            ))
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}