"use client";

import { cn } from "@/utils";
import React, { useEffect, useState } from 'react'

interface Props {
    src: string;
    alt: string;
    className?: string;
}

const BlurImage = ({ src, alt, className }: Props) => {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [url, setUrl] = useState<string>(src);

    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setIsLoading(false);
        const target = e.target as HTMLImageElement;
        if (target.naturalWidth <= 32 && target.naturalHeight <= 32) {
            setUrl(`https://github.com/shadcn.png`);
        }
    };

    useEffect(() => {
        setUrl(src);
    }, [src]);

    return (
        <img
            src={url}
            alt={alt}
            onLoad={handleLoad}
            className={cn(isLoading ? "filter blur-sm" : "blur-0", className)}
        />
    )
}

export default BlurImage
