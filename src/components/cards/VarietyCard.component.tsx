import { Card, CardContent, Grid, Stack } from "@mui/joy"
import ImageCard from "./ImageCard.component"
import CardTitle from "../typography/CardTitle.component"
import CardTextContent from "../typography/CardTextContent.componet"
import { Variety } from "../../routes/Varieties/varaties"

type Props = {
    variety: Variety
}

export const VarietyCard = ({ variety }: Props) => {
    // const cookingType = variety.cookingType?.match(/\(([^)]+)\)/)?.[1];
    return (
        <Card
            variant="outlined"
            sx={{
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "primary.100",
                borderColor: "primary.200",
                padding: 1.5,
                borderRadius: 'md'
            }}
        >
            <Grid container direction={{ xs: 'column', md: 'row' }} spacing={3}>
                <Grid xs={12} md={4} lg={3} xl={2.5} height='100%' >
                    <ImageCard
                        url={variety.skin === 'Жълт' ? '/images/potato_yellow.webp' : variety.skin === 'Светло жълт' ? '/images/potato_light_yellow.webp' : '/images/potato_red.webp'}
                        aspect={1} />
                </Grid>

                <Grid xs={12} md={8} lg={9} xl={9.5} minHeight='100%' gap={2}>
                    <CardContent sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                    }}>
                        <Stack direction="row" justifyContent="space-between" alignItems='center'>
                            <CardTitle>{variety.name}</CardTitle>
                            <CardTextContent
                                bgcolor='primary.200' textColor='primary.700'
                                px={1.3} py={0.2} borderRadius='md'
                            >{variety.cookingType}</CardTextContent>
                        </Stack>
                        <Stack direction={{ xs: 'column', md: 'row' }} mt='auto'>
                            <Stack minWidth='220px' py={{ xs: 2, md: 0 }}>
                                <CardTextContent textColor='primary.500'>Сорт: <CardTextContent>{variety.maturity}</CardTextContent></CardTextContent>
                                <CardTextContent textColor='primary.500'>Форма: <CardTextContent>{variety.shape}</CardTextContent></CardTextContent>
                                <CardTextContent textColor='primary.500'>Размер: <CardTextContent>{variety.size}</CardTextContent></CardTextContent>
                                <CardTextContent textColor='primary.500'>Цвят кора: <CardTextContent>{variety.skin}</CardTextContent></CardTextContent>
                                <CardTextContent textColor='primary.500'>Сърцевина: <CardTextContent>{variety.flesh}</CardTextContent></CardTextContent>
                                <CardTextContent textColor='primary.500'>Био-органик: <CardTextContent>{variety.organic ? 'Да' : 'Не'}</CardTextContent></CardTextContent>
                                <CardTextContent textColor='primary.500'>Лиценз: <CardTextContent>{variety.licensed ? 'Да' : 'Не'}</CardTextContent></CardTextContent>
                            </Stack>
                            <Stack direction='column' alignSelf='flex-end'>
                                <CardTextContent textColor='primary.500' pb={'0rem'}>Описание: </CardTextContent>
                                <CardTextContent flexGrow={1}> {variety.description}</CardTextContent>
                            </Stack>
                        </Stack>
                    </CardContent>
                </Grid>
            </Grid>
        </Card >
    )
}
