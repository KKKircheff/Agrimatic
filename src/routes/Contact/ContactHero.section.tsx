import { Grid, Stack } from '@mui/joy'
import TextContent from '../../components/typography/TextContent.component';
import ImageCard from '../../components/cards/ImageCard.component';
import useScreenWidth from '../../hooks/useScreenWidth';
import HeroTitle from '../../components/typography/HeroTitle.component';

const ContactHero = () => {
    const screenWidth = useScreenWidth();
    return (
        <Grid container spacing={{ xs: 2, md: 2 }} py={{ xs: 3, md: 6 }} direction={{ xs: 'column', md: 'row' }} >
            <Grid xs={12} md={5} minHeight='100%' >
                <Stack spacing={{ xs: 4, md: 0, }} height='100%' justifyContent='space-between'>
                    <HeroTitle textColor={'primary.400'}>Контакт</HeroTitle>
                    <TextContent pb={{ xs: 4, md: 0 }}>Моля, попълнете формата за запитване по-долу. Ще се постараем да отговорим на запитването или да се свържем с вас в рамките на един работен ден.</TextContent>
                    {screenWidth >= 900 && <ImageCard url='/images/hero-image-2.webp' aspect={3} />}
                </Stack>
            </Grid>
            <Grid xs={12} md={7} height='100%'>
                <ImageCard url='/images/potatoes-crate.webp' aspect={1.7} />
            </Grid>
        </Grid>
    )
}

export default ContactHero