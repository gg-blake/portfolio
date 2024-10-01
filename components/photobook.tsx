//@ts-nocheck
"use client"
import { useEffect, useState, use } from "react";
import EXIF from "exif-js";
import GlitchTitle from "./glitch_text";
import { ImageResponse } from "next/server";
import ImageFetcher from "./image-fetcher";
import Image from 'next/image';


const fetchImages = new Promise(async (resolve, reject) => {
    const image = fetch("/api/files/images")
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err))
})

export default function Photobook() {
    const images = use(fetchImages);
    // {images.map((image: ImageResponse) => <Image src={`https://www.moody.mx/api/files/images/${image.id}`} width={300} height={300} />)}

    return (
        <div id="photos" className="flex flex-col gap-3 p-3">
            <div className="sticky top-[calc(70px+.75rem)] p-3 border-primary-50 border-[1px] box-border z-[900] bg-primary-950">
                <GlitchTitle>Photos</GlitchTitle>
            </div>
            <div className="w-full grid grid-cols-3 gap-6">
            {images.map((image: ImageResponse) => <Image key={`/api/files/images/${image.id}`} src={`/api/files/images/${image.id}`} width={300} height={300} />)}
            </div>
        </div>
    )
}