import HeroImg from '/images/hero.webp';
import { AspectRatio, Grid, Stack, Typography, useTheme } from "@mui/joy"
import BlackButton from "../../components/buttons/BlackButton.component";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { scroller } from 'react-scroll'
import TextContent from '../../components/typography/TextContent.component';
import HeroTitle from '../../components/typography/HeroTitle.component';


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
    const r = useTheme().radius;

    return (
        <Grid
            container spacing={{ xs: 0, md: 6 }}
            pt={{ xs: 0, md: 2 }}
            sx={{ flexGrow: 1 }}
            justifyContent='space-between'
            alignItems='center'>
            <Grid xs={12} md={7} order={{ xs: 1, md: 0 }} py={6}>
                <Stack
                    direction='column'
                    justifyContent='center'
                // borderLeft={{ md: `1.3px solid ${c.neutral[400]}` }}
                // pl={{ xs: 0, md: 5 }}
                >
                    <HeroTitle
                        pb={{ xs: 5, md: 4, lg: 4 }}
                    >Сертифицирани семена за картофи от Нидерландия
                    </HeroTitle>
                    <TextContent
                        pb={{ xs: 2, md: 2, lg: 2 }}
                    >Лицензиран вносител на седем ранни, средно ранни и късни картофени семена
                    </TextContent>
                    <TextContent
                        pb={{ xs: 8, md: 6, lg: 8 }}
                    >Вносител на висококачествени картофени семена със свободен лиценз
                    </TextContent>
                    <Stack direction={{ xs: 'column', sm: 'row' }} gap={2}>
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
            </Grid>
            <Grid xs={12} md={5} lg={5} >
                <AspectRatio
                    ratio='1.3'
                    sx={{ borderRadius: r.md }}
                >
                    <img src={HeroImg} style={{ width: '100%', height: '100%' }} loading='eager' alt='Home kitchen interior graphics' />
                </AspectRatio>
            </Grid>
        </Grid>
    )
}

export default HomeHero