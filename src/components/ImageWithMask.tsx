import { Box, BoxProps } from '@mui/joy';
import { useId } from 'react';

type Props = {
    imgSrc: string;
    width?: string
    path?: string
    aspectRatio?: number;
    alt?: string;
} & BoxProps

const ImageWithMask = ({
    imgSrc,
    width = '100%',
    aspectRatio = 16 / 9,
    path = "M0 0.0981033C0 0.0848512 0.00895431 0.0741082 0.02 0.0741082C0.02 0.0741082 0.474167 0.0749617 0.48625 0.0746081C0.498333 0.0742545 0.505729 0.0671096 0.507917 0.0566118C0.510104 0.046114 0.509583 0.0326167 0.512083 0.0151203C0.514583 -0.00237601 0.5275 0.000123432 0.5275 0.000123432H0.98C0.991046 0.000123432 1 0.0108664 1 0.0241185V0.576005C1 0.589257 0.991046 0.6 0.98 0.6H0.02C0.00895429 0.6 0 0.589257 0 0.576005V0.0981033Z",
    alt = 'masked image',
    ...otherProps
}: Props) => {

    const id = useId();
    return (
        <Box {...otherProps}>
            <svg style={{ width: 0, height: 0 }}>
                <defs>
                    <clipPath id={id} clipPathUnits='objectBoundingBox'>
                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            fill='black'
                            d={path}
                        />
                    </clipPath>
                </defs>
            </svg>

            <Box
                width={width}
                sx={{
                    overflow: 'hidden',
                    borderColor: 'transparent',
                    aspectRatio: aspectRatio
                }}
            >
                <Box
                    component="img"
                    src={imgSrc}
                    alt={alt}
                    width="100%"
                    style={{ objectFit: 'cover' }}
                    sx={{
                        aspectRatio: 1,
                        clipPath: `url(#${id})`
                    }}>

                </Box>
            </Box>
        </Box>
    );
};

export default ImageWithMask;