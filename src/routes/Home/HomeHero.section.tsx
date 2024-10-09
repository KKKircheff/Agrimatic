import { Grid, Stack, Typography } from "@mui/joy"
import BlackButton from "../../components/buttons/BlackButton.component";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { scroller } from 'react-scroll'
import TextContent from '../../components/typography/TextContent.component';
import HeroTitle from '../../components/typography/HeroTitle.component';
import ImageCard from '../../components/cards/ImageCard.component';
import useScreenWidth from "../../hooks/useScreenWidth";
// import ImageWithMask from '../../components/ImageWithMask';

const scrollToCatalogues = () => {
    scroller.scrollTo('catalogues', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuint',
    });
}
const scrollToContact = () => {
    scroller.scrollTo('contact-form', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuint',
    });
}

const HomeHero = () => {
    // const r = useTheme().radius;
    const screenWidth = useScreenWidth();

    return (
        <Stack direction={'column'} gap={{ xs: 6, md: 8, lg: 10, xl: 12 }}>
            <Stack
                direction='column'
                alignItems='center'
                justifyContent='center'
            >
                <HeroTitle
                    pt={{ xs: 0, md: 5, lg: 9, xl: 12 }}
                    pb={{ xs: 4, md: 5, lg: 5, xl: 6 }}
                    textAlign='center'
                    maxWidth={1000}
                >Сертифицирани семена за картофи от Нидерландия
                </HeroTitle>
                <TextContent
                    textAlign='center'
                    pb={{ xs: 2, md: 2, lg: 2 }}
                >Лицензиран вносител на седем ранни, средно ранни и късни картофени семена
                </TextContent>
                <TextContent
                    textAlign='center'
                    pb={{ xs: 4, md: 6, lg: 8 }}
                >Вносител на висококачествени картофени семена със свободен лиценз
                </TextContent>
                <Stack direction='row' gap={2}>
                    <BlackButton
                        size='lg'
                        color='neutral'
                        onClick={scrollToCatalogues}
                        endDecorator={<ArrowOutwardIcon />}>
                        <Typography textColor='inherit' fontSize='inherit'>Семена</Typography>
                    </BlackButton>
                    <BlackButton
                        size='lg'
                        onClick={scrollToContact}
                        endDecorator={<ArrowOutwardIcon />}>
                        <Typography textColor='inherit' fontSize='inherit'>Контакт</Typography>
                    </BlackButton>
                </Stack>
            </Stack>
            <Grid container spacing={{ xs: 2, md: 2 }}>
                <Grid xs={12} md={7}>
                    <ImageCard url='/images/hero-image-1.webp' aspect={1.5} />
                </Grid>
                <Grid xs={12} md={5}>
                    <Stack spacing={2} direction={screenWidth < 900 ? 'column-reverse' : 'column'}>
                        <ImageCard url='/images/hero-image-2.webp' aspect={1.5} />
                        <ImageCard url='/images/gadget-green-1.webp' aspect={screenWidth >= 900 ? 4 : 2.5} text='Получавате качеството, което поръчате!' />
                    </Stack>
                </Grid>
            </Grid>
            {/* <ImageWithMask width={'100%'} imgSrc={'/images/hero.webp'} maskSrc={'/images/home-hero-mask.png'} alt={'SVG image'} aspectRatio={1280 / 850} /> */}
        </Stack>
    )
}

export default HomeHero