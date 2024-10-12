import { Grid, Stack } from '@mui/joy'
import HeroTitle from '../../components/typography/HeroTitle.component'
import TextContent from '../../components/typography/TextContent.component'
import ImageCard from '../../components/cards/ImageCard.component'
import useScreenWidth from '../../hooks/useScreenWidth'

export const VaraietiesHero = () => {
    const screenWidth = useScreenWidth();
    return (
        <Stack direction='column' width='100%' justifyContent='center'
            gap={{ xs: 5, md: 0 }}>
            <Stack
                direction='column'
                alignItems='center'
                justifyContent='center'
                bgcolor='neutral.100'
                borderRadius='md'
                px={4}
                pt={{ xs: 4, md: 8, xl: 10 }}
                pb={{ xs: 6, md: 18, lg: 20, xl: 30 }}
            >
                <HeroTitle
                    pb={{ xs: 4, md: 5, lg: 5, xl: 6 }}
                    textAlign='center'
                    maxWidth={{ xs: 700, lg: 850 }}
                >ШИРОКА ГАМА <HeroTitle textColor={'primary.400'}>СОРТОВЕ ЗА РАЗСАД  </HeroTitle>ОТ АГРИМАТИК
                </HeroTitle>
                <TextContent pb={{ xs: 1, md: 1, lg: 1 }} maxWidth={{ xs: '100%', md: '44%' }}
                >Ранни, средно ранни и късни картофени семена. Разгледайте нашата гама и не се колебайте за контакт с нас. Ние от Агриматик сме винаги готови да съдействаме със съвет или информация.
                </TextContent>
            </Stack>

            <Grid
                container spacing={{ xs: 0, md: 1, lg: 1, xl: 2 }}
                mt={{ xs: 0, md: -28, lg: -32, xl: -42 }}
                width={{ xs: '100%', md: '96%' }}
                mx='auto'
                alignItems='flex-end'
            >
                <Grid xs={12} md={3} height='100%'>
                    {screenWidth >= 900 && <ImageCard url='/images/potatoes-crate.webp' aspect={1} />}
                </Grid>
                <Grid xs={12} md={3} minHeight='100%' alignSelf='flex-end'>
                    <ImageCard url='/images/variety_2.webp' aspect={screenWidth >= 900 ? 2 : 1} />
                </Grid>
                <Grid xs={12} md={3} minHeight='100%' alignSelf='flex-end'>
                    {screenWidth >= 900 && <ImageCard url='/images/variety_3.webp' aspect={1.5} />}
                </Grid>
                <Grid xs={12} md={3} height='100%'>
                    {screenWidth >= 900 && <ImageCard url='/images/variety_4.webp' aspect={.8} />}
                </Grid>
            </Grid>
        </Stack >
    )
}
