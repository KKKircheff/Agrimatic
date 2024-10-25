import { AspectRatio } from '@mui/joy';
import React from 'react';

interface CurvedImageMaskProps {
    imgSrc: string;
    maskSrc: string;
    alt?: string;
    width?: number | string;
    height?: number | string; // Optional to maintain flexibility
    aspectRatio?: number; // New prop for aspect ratio
}

const ImageWithMaskImg: React.FC<CurvedImageMaskProps> = ({
    imgSrc,
    maskSrc,
    alt,
    width = '100%',
    height = 'auto',
    aspectRatio = 16 / 9
}) => {
    return (
        <AspectRatio
            ratio={aspectRatio}
            variant='plain'
            sx={{
                width: typeof width === 'number' ? `${width}px` : width,
                height: height === 'auto' ? 'auto' : height,
                position: 'relative',
                overflow: 'hidden',
                borderColor: 'transparent'
            }}
        >
            <img
                src={imgSrc}
                alt={alt}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    maskImage: `url(${maskSrc})`,
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                }}
            />
        </AspectRatio>
    );
};

export default ImageWithMaskImg;