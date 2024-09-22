import {
    Box,
    Card,
    CardContent,
    CardCover,
    Stack,
    Typography,
} from '@mui/joy'

import res1 from '/images/ctg1.jpg'
import res2 from '/images/ctg2.jpg'
import res3 from '/images/ctg3.jpg'
import res4 from '/images/ctg4.jpg'
import res5 from '/images/ctg5.jpg'
import res6 from '/images/ctg3.jpg'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, Suspense, lazy } from 'react'
import SlickPreviousArrow from './SlickPreviousArrow'
import SlickNextArrow from './SlickNextArrow'
const PdfModal = lazy(() => import('../modals/PdfModal.component'));

const TemplateCarousel = () => {

    const slidesToShow = 5;
    const mdBreakPoint = 900
    const isSmallScreen = window.innerWidth < mdBreakPoint
    const [isOpen, setIsOpen] = useState(false);

    const settings = {
        // swipable: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isSmallScreen ? 1 : slidesToShow,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        prevArrow: <SlickPreviousArrow />,
        nextArrow: <SlickNextArrow />,
        //@ts-ignore
        beforeChange: (current, next: number) => setIndexes(next),
    };

    const slides = [res1, res2, res3, res4, res5, res6]
    const totalSlides = slides.length

    const [centerImageIndex, setCenterImageIndex] = useState(0)
    const [prevImageIndex, setPrevImageIndex] = useState(1)
    const [nextImageIndex, setNextImageIndex] = useState(totalSlides - 1)
    const [lastImageIndex, setLastImageIndex] = useState(totalSlides - 1)
    const [firstImageIndex, setFirstImageIndex] = useState(0)

    const setIndexes = (next: number) => {
        const previousIndex = next === 0 ? (totalSlides - 1) : next - 1
        const nextIndex = next === (totalSlides - 1) ? 0 : next + 1
        const lastIndex = nextIndex === (totalSlides - 1) ? 0 : nextIndex + 1
        const firstIndex = previousIndex === (0) ? (totalSlides - 1) : previousIndex - 1

        setCenterImageIndex(next);
        setNextImageIndex(nextIndex)
        setPrevImageIndex(previousIndex)
        setLastImageIndex(lastIndex)
        setFirstImageIndex(firstIndex)
    }

    return (
        <Stack direction='column'>
            <Box width='100%'>

                <Slider {...settings}>
                    {slides.map((slider, index) => {
                        return (
                            <Box
                                key={index}
                                pt={isSmallScreen ? '18vw' : '12vw'}
                                width={isSmallScreen ? '100vw' : '100%'}
                                height={isSmallScreen ? '130vw' : '53vw'}
                            >
                                <Card
                                    sx={{
                                        transform: index == centerImageIndex ? 'scale(1.35)'
                                            : index === prevImageIndex ? 'scale(1.2)'
                                                : index === nextImageIndex ? 'scale(1.2)'
                                                    : index === lastImageIndex ? 'scale(1.1)'
                                                        : index === firstImageIndex ? 'scale(1.1)'
                                                            : 'scale(1)',

                                        zIndex: index == centerImageIndex ? 4
                                            : index === prevImageIndex ? 3
                                                : index === nextImageIndex ? 3
                                                    : index === lastImageIndex ? 2
                                                        : index === firstImageIndex ? 2
                                                            : 1,

                                        // borderRadius: { xs: 'sm', md: 'lg' },
                                        borderRadius: 4,
                                        width: isSmallScreen ? '66vw' : '24vw',
                                        aspectRatio: { xs: '1/1.35', md: '1/1.2' },
                                        marginX: isSmallScreen ? 'auto' : '-3vw',
                                        border: '0px solid transparent',
                                        boxShadow: 'sm',
                                        transition: 'all .3s ease-in',
                                        overflow: 'hidden'
                                    }}>

                                    <CardCover>
                                        <img
                                            src={slider}
                                            alt="hero image" style={{ objectFit: 'fill', borderRadius: '0' }} />
                                    </CardCover>

                                    {/* {index == centerImageIndex && */}
                                    <CardContent sx={{
                                        maxHeight: '2rem',
                                        width: '100px',
                                        marginLeft: 'auto',
                                        marginTop: 'auto'
                                    }}>
                                        <Typography
                                            fontSize={'.8rem'}
                                            textAlign={'center'}
                                            bgcolor='primary.500'
                                            textColor='neutral.50'
                                            borderRadius='25px'
                                            border='1.5px solid'
                                            borderColor='neutral.100'
                                            p={isSmallScreen ? .8 : 1}
                                            sx={{
                                                '&:hover': {
                                                    borderColor: 'primary.500',
                                                    bgcolor: 'neutral.50',
                                                    color: 'primary.500',
                                                    transition: 'all .1s'
                                                }
                                            }}
                                            onClick={() => {
                                                // setCenterImageIndex(index);
                                                setIsOpen(true);
                                            }}
                                        >Open</Typography>
                                    </CardContent>
                                    {/* } */}
                                </Card>
                            </Box>
                        )
                    })
                    }
                </Slider >
            </Box>
            {isOpen &&
                <Suspense>
                    <PdfModal isOpen={isOpen} setIsOpen={setIsOpen} index={centerImageIndex} />
                </Suspense>
            }
        </Stack>
    )
}

export default TemplateCarousel

