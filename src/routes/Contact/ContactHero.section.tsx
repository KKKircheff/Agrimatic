import { AspectRatio, Grid, Stack, useTheme } from '@mui/joy'
import HeroImg from '/images/contact-hero.webp';
import TextContent from '../../components/typography/TextContent.component';
import SectionTitle from '../../components/typography/SectionTitle.component';
const ContactHero = () => {
    // const c = useTheme().palette;
    const r = useTheme().radius;
    return (
        <Grid
            container spacing={{ xs: 0, md: 4 }}
            sx={{ flexGrow: 1 }}
            py={2}
            justifyContent='space-between'
            alignItems='end'>
            <Grid xs={12} md={6} order={{ xs: 1, md: 0 }}>
                <Stack
                    direction='column'
                    justifyContent='center'
                    // borderLeft={{ md: `1.3px solid ${c.neutral[400]}` }}
                    my={{ xs: 6, md: 0 }}>
                    <SectionTitle
                        textColor="primary.500"
                        py={6}
                    >КОНТАКТ</SectionTitle>
                    <TextContent>Моля, попълнете формата за запитване по-долу. Ще се постараем да отговорим на запитването или да се свържем с вас в рамките на един работен ден.</TextContent>
                </Stack>
            </Grid>
            <Grid xs={12} md={6} lg={6} >
                <AspectRatio
                    ratio='1.68'
                    sx={{ borderRadius: r.xs }}
                >
                    <img src={HeroImg} style={{ width: '100%', height: '100%' }} loading='eager' alt='Home kitchen interior graphics' />
                </AspectRatio>
            </Grid>
        </Grid >
    )
}

export default ContactHero