import { Stack, Typography } from '@mui/joy'
import SectionWrapper from '../../components/SectionWrapper.component'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { TypographyStyle } from '@mui/material';
import Logo from '../../components/navbar/Logo.section';

const groupTitle: TypographyStyle = {
    fontWeight: 500,
    pb: 2,
}

const groupRow: TypographyStyle = {
    fontWeight: 300,
}


const Footer = () => {
    return (
        <Stack direction='row' bgcolor='neutral.100' minHeight='200px' alignItems='center' py={5}>
            <SectionWrapper
                direction={{ xs: 'column', md: 'row' }}
                justifyContent='space-between'
                spacing={4}
                py={4}>
                <Stack
                    direction='column'
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    pr={{ xs: 4, md: 0 }}
                >
                    <Logo />
                </Stack>
                <Stack direction='column' textAlign={{ xs: 'center', md: 'left' }} pt={.5}>
                    <Typography
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        sx={groupTitle}
                    >АДРЕС</Typography>
                    <Typography
                        style={groupRow}
                        ml={-4}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        startDecorator={<PlaceOutlinedIcon sx={{ color: 'primary.500' }} />}
                    >1138 Младост 4</Typography>
                    <Typography
                        style={groupRow}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        pb={2}
                    >София, България</Typography>
                    <Typography
                        style={groupRow}
                        ml={-4}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                        startDecorator={<PlaceOutlinedIcon sx={{ color: 'primary.500' }} />}
                    > 7513EG, Haaksbergerstraat 294a</Typography>
                    <Typography
                        style={groupRow}
                        justifyContent={{ xs: 'center', md: 'flex-start' }}
                    >Enschede, Nederland</Typography>
                </Stack>
                <Stack direction='column' textAlign={{ xs: 'center', md: 'right' }} pt={.5}>
                    <Typography
                        sx={groupTitle}
                    >КОНТАКТ</Typography>
                    <Typography
                        style={groupRow}
                        justifyContent={{ xs: 'center', md: 'flex-end' }}
                        pb={2}
                        startDecorator={<LocalPhoneOutlinedIcon sx={{ color: 'primary.500' }} />}
                    >+359 555 555 555</Typography>
                    <Typography
                        style={groupRow}
                        startDecorator={<LocalPostOfficeOutlinedIcon sx={{ color: 'primary.500' }} />}
                        justifyContent={{ xs: 'center', md: 'flex-end' }}
                    >office@agrimatic.bg</Typography>
                </Stack>
            </SectionWrapper>
        </Stack>

    )
}

export default Footer