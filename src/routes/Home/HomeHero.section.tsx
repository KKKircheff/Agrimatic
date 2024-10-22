import { Grid, Stack, Typography } from "@mui/joy"
import BlackButton from "../../components/buttons/BlackButton.component";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { scroller } from 'react-scroll'
import TextContent from '../../components/typography/TextContent.component';
import HeroTitle from '../../components/typography/HeroTitle.component';
import ImageCard from '../../components/cards/ImageCard.component';
import useScreenWidth from "../../hooks/useScreenWidth";
import { useNavigate } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
// import ImageWithMask from '../../components/ImageWithMask';

const scrollToContact = () => {
    scroller.scrollTo('information_section', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuint',
    });
}

const HomeHero = () => {
    const screenWidth = useScreenWidth();
    const navigate = useNavigate();

    return (
        <Stack
            direction={'column'}
            gap={{ xs: 6, md: 0 }}
        >
            <Stack
                direction='column'
                alignItems='center'
                justifyContent='center'
                bgcolor='neutral.100'
                borderRadius='md'
                px={2}
                pt={{ xs: 4, md: 8, lg: 10 }}
                pb={{ xs: 2, md: 24, lg: 34 }}
            >
                <HeroTitle
                    pb={{ xs: 4, md: 5, lg: 5, xl: 6 }}
                    textAlign='center'
                    maxWidth={900}
                >СЕРТИФИЦИРАНИ <HeroTitle textColor={'primary.400'}>СЕМЕНА ЗА КАРТОФИ </HeroTitle>ОТ НИДЕРЛАНДИЯ
                </HeroTitle>
                <TextContent
                    textAlign='center'
                    maxWidth={550}
                    pb={{ xs: 6, md: 7, lg: 8 }}
                >Директен вносител на широка гама висококачествени ранни, средно ранни и късни картофени семена, както със свободен така и с изключителен лизенз
                </TextContent>
                <Stack direction='row' gap={{ xs: 1, sm: 2 }}>
                    <BlackButton
                        size='lg'
                        color='neutral'
                        onClick={() => navigate('/varieties')}
                        endDecorator={<ArrowOutwardIcon sx={{ marginLeft: '-5px' }} />}>
                        <Typography textColor='inherit' fontSize='inherit'>Семена</Typography>
                    </BlackButton>
                    <BlackButton
                        size='lg'
                        onClick={scrollToContact}
                        endDecorator={<ArrowOutwardIcon sx={{ marginLeft: '-5px' }} />}>
                        <Typography textColor='inherit' fontSize='inherit'>Информация</Typography>
                    </BlackButton>
                </Stack>
            </Stack>

            <Grid
                container spacing={{ xs: 0, md: 3, lg: 4, xl: 6 }}
                mt={{ xs: 0, md: -18, lg: -26 }}
                width={{ xs: '100%', md: '96%' }}
                mx='auto'
            >
                <Grid xs={12} md={4} alignSelf='flex-end'>
                    {screenWidth >= 900 && <Zoom delay={0} duration={400} triggerOnce>
                        <Fade delay={100} duration={600} triggerOnce>
                            <ImageCard url='/images/hero-image-2.webp' aspect={1.2} />
                        </Fade>
                    </Zoom>}
                </Grid>
                <Grid xs={12} md={4} alignSelf='flex-end'>
                    {screenWidth >= 900
                        ? <Zoom delay={100} duration={400} triggerOnce>
                            <Fade delay={200} duration={600} triggerOnce>
                                <ImageCard url='/images/hero-image-1.webp' aspect={1.2} />
                            </Fade>
                        </Zoom>
                        : <ImageCard url='/images/hero-image-1-mobile.webp' aspect={1.2} />}
                </Grid>
                <Grid xs={12} md={4} alignSelf='flex-end'>
                    {screenWidth >= 900 && <Zoom delay={200} duration={400} triggerOnce>
                        <Fade delay={300} duration={600} triggerOnce>
                            <ImageCard url='/images/potatoes-crate.webp' aspect={1.2} />
                        </Fade>
                    </Zoom>}
                </Grid>
            </Grid>
            {/* <ImageWithMask width={'100%'} imgSrc={'/images/hero.webp'} maskSrc={'/images/home-hero-mask.png'} alt={'SVG image'} aspectRatio={1280 / 850} /> */}
        </Stack>
    )
}

export default HomeHero