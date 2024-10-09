import { Box, Card, CardContent, CardCover, Typography, useTheme } from '@mui/joy';
// import cardImage from '/images/hero-image-1.webp'

type Props = {
    url: string;
    aspect?: number;
    text?: string;
}

const ImageCard = ({ aspect = 1, url, text }: Props) => {
    const theme = useTheme()
    return (
        <Card sx={{ aspectRatio: aspect, width: '100%', borderColor: 'transparent' }}>
            <CardCover>
                <img
                    src={url}
                    alt=""
                />
            </CardCover>
            {/* {text ?
                <CardCover
                sx={{
                    background:
                        `linear-gradient(to top,  rgba(${theme.vars.palette.primary.darkChannel} / 0.3),  rgba(${theme.vars.palette.primary.darkChannel} / 0) 100%), linear-gradient(to top,rgba(${theme.vars.palette.primary.darkChannel} / 0.5),rgba(${theme.vars.palette.primary.darkChannel} / 0.1) 50%)`,
                }}
                /> : <></>} */}
            {text
                ? <CardContent sx={{
                    justifyContent: 'flex-end',
                }}>
                    <Box
                        py={1}
                        px={{ xs: 1.7, sm: 2 }}
                        borderRadius='xl'
                        sx={{ width: 'fit-content', backgroundColor: `rgba(${theme.vars.palette.primary.darkChannel} / 0.6)` }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: "xs", sm: "sm" }
                            }}
                            textColor="neutral.50"
                        >
                            {text}
                        </Typography>
                    </Box>
                </CardContent>
                : <></>}
        </Card>
    );
}

export default ImageCard