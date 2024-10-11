import { Grid, Stack } from '@mui/joy'
import HeroTitle from '../../components/typography/HeroTitle.component'
import TextContent from '../../components/typography/TextContent.component'
import ImageCard from '../../components/cards/ImageCard.component'
import useScreenWidth from '../../hooks/useScreenWidth'

export const VaraietiesHero = () => {
    const screenWidth = useScreenWidth();
    return (
        <Stack direction='column' width='100%' justifyContent='center'>
            <Stack
                spacing={{ xs: 4, md: 0, }}
                width='100%'
                alignItems='center'
                textAlign='center'
            >
                <HeroTitle pb={{ xs: 4, md: 5, lg: 5, xl: 8 }} maxWidth={850}
                >Богато разнообразие на<HeroTitle textColor={'primary.400'}> сортове за разсад  </HeroTitle>от Агриматик
                </HeroTitle>
                <TextContent pb={{ xs: 1, md: 1, lg: 1 }} maxWidth={{ xs: '100%', md: '44%' }}
                >Ранни, средно ранни и късни картофени семена. Разгледайте нашата гама и не се колебайте за контакт с нас. Ние от Агриматик сме винаги готови да съдействаме със съвет или информация.
                </TextContent>
            </Stack>

            <Grid
                container direction={{ xs: 'column', md: 'row' }}
                spacing={{ xs: 1, md: 1 }} py={{ xs: 3, md: 6 }} mt={{ xs: 0, md: '-150px' }}
                alignItems='flex-end'>
                <Grid xs={12} md={3} height='100%'>
                    {screenWidth >= 900 && <ImageCard url='/images/variety_1.webp' aspect={1} />}
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
