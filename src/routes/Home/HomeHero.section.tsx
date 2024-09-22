import HeroImg from '/images/1.webp';
import { AspectRatio, Grid, Stack, Typography, useTheme } from "@mui/joy"
import BlackButton from "../../components/buttons/BlackButton.component";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { scroller } from 'react-scroll'


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
    const c = useTheme().palette;

    return (
        <Grid container spacing={2} sx={{ flexGrow: 1 }} justifyContent='space-between' alignItems='center'>
            <Grid xs={12} md={6} order={{ xs: 1, md: 0 }}>
                <Stack
                    direction='column'
                    justifyContent='center'
                    borderLeft={{ md: `1.3px solid ${c.neutral[400]}` }}
                    pl={{ xs: 0, md: 5 }} my={{ xs: 6, md: 0 }}>
                    <Typography
                        level='h2' fontWeight='400'
                        pb={{ xs: 2, md: 3, lg: 4 }}
                    >Manufacturing and distribution of components for furniture and construction
                    </Typography>
                    <Typography
                        fontSize='smallTitle'
                        pb={{ xs: 8, md: 6, lg: 12 }}
                    >High quality manufacturing at unbeatable wholsale prices
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
                        <BlackButton
                            size='lg'
                            color='neutral'
                            onClick={scrollToCatalogues}
                            endDecorator={<ArrowOutwardIcon />}>
                            <Typography textColor='inherit' fontSize='inherit'>Catalogues</Typography>
                        </BlackButton>
                        <BlackButton
                            size='lg'
                            onClick={scrollToContact}
                            endDecorator={<ArrowOutwardIcon />}>
                            <Typography textColor='inherit' fontSize='inherit'>Request samples</Typography>
                        </BlackButton>
                    </Stack>
                </Stack>
            </Grid>
            <Grid xs={12} md={6} lg={5}>
                <AspectRatio ratio='1' sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 20% 100%, 0 74%)' }}>
                    <img src={HeroImg} style={{ width: '100%', height: '100%' }} loading='eager' alt='Home kitchen interior graphics' />
                </AspectRatio>
            </Grid>
        </Grid>
    )
}

export default HomeHero