import { Grid, Stack } from '@mui/joy'
import TextContent from '../../components/typography/TextContent.component';
import ImageCard from '../../components/cards/ImageCard.component';
import useScreenWidth from '../../hooks/useScreenWidth';
import HeroTitle from '../../components/typography/HeroTitle.component';

const ContactHero = () => {
    const screenWidth = useScreenWidth();
    return (
        <Grid
            container
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 0, sm: 1 }}
            bgcolor='neutral.100'
            borderRadius='md'
            p={1}
            pt={{ xs: 0, md: 1 }}
        >
            <Grid xs={12} md={5} minHeight='100%' >
                <Stack spacing={{ xs: 2, sm: 4, }} height='100%' justifyContent='space-between'>
                    <HeroTitle textColor={'primary.400'} px={1} pt={2}>КОНТАКТ</HeroTitle>
                    <TextContent pb={{ xs: 4, md: 0 }} px={1} >Моля, попълнете формата за запитване по-долу. Ще се постараем да отговорим на запитването или да се свържем с вас в рамките на един работен ден.</TextContent>
                    {screenWidth >= 900 &&
                        <ImageCard
                            url='/images/hero-image-2.webp'
                            aspect={1.7}
                        />}
                </Stack>
            </Grid>
            <Grid xs={12} md={7} height='100%'>
                <ImageCard url='/images/potatoes-crate.webp' aspect={1} />
            </Grid>
        </Grid>
    )
}

export default ContactHero