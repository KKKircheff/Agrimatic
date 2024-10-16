import { Stack, Typography } from '@mui/joy'
import SectionWrapper from '../../components/SectionWrapper.component'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TypographyStyle } from '@mui/material';
import Logo from '../../components/navbar/Logo.section';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect'

const groupTitle: TypographyStyle = {
    fontWeight: 500,
    pb: 2,
}

const groupRow: TypographyStyle = {
    fontWeight: 300,
    textDecoration: 'none'
}


const Footer = () => {
    return (
        <SectionWrapper
            direction={{ xs: 'column', md: 'row' }}
            bgcolor='primary.100'
            justifyContent='space-between'
            spacing={4}
            borderRadius='md'
            py={4}
            pl={3}
            pr={{ xs: 2, md: 4, lg: 5 }}
            my={2}
        >
            <Stack
                direction='column'
                alignItems={{ xs: 'left', md: 'flex-start' }}
            >
                <Logo />
            </Stack>
            <Stack direction='column' textAlign={{ xs: 'left', md: 'left' }} pt={.5}>
                <Typography
                    justifyContent={{ xs: 'left', md: 'flex-start' }}
                    sx={groupTitle}
                >АДРЕС</Typography>
                <Typography
                    style={groupRow}
                    ml={{ xs: 0, md: -4 }}
                    justifyContent={{ xs: 'left', md: 'flex-start' }}
                    startDecorator={<PlaceOutlinedIcon sx={{ color: 'primary.500' }} />}
                >1138, Младост 4</Typography>
                <Typography
                    sx={groupRow}
                    justifyContent={{ xs: 'left', md: 'flex-start' }}
                    pl={{ xs: 4, md: 0 }}
                    pb={2}
                >София, България</Typography>
                <Typography
                    sx={groupRow}
                    ml={{ xs: 0, md: -4 }}

                    justifyContent={{ xs: 'left', md: 'flex-start' }}
                    startDecorator={<PlaceOutlinedIcon sx={{ color: 'primary.500' }} />}
                > 7513EG, Haaksbergerstraat</Typography>
                <Typography
                    style={groupRow}
                    justifyContent={{ xs: 'left', md: 'flex-start' }}
                    pl={{ xs: 4, md: 0 }}
                >Enschede, Nederland</Typography>
            </Stack>
            <Stack direction='column' textAlign={{ xs: 'left', md: 'right' }} pt={.5}>
                <Typography
                    sx={groupTitle}
                >КОНТАКТ</Typography>
                <Typography
                    sx={groupRow}
                    pb={2}
                    startDecorator={<LocalPostOfficeOutlinedIcon sx={{ color: 'primary.500' }} />}
                    justifyContent={{ xs: 'left', md: 'flex-end' }}
                >office@agrimatic.bg</Typography>
                {isMobile ? <Link to='tel:+359876962484' style={{ textDecoration: 'none' }}>
                    <Typography
                        sx={groupRow}
                        justifyContent={{ xs: 'left', md: 'flex-end' }}
                        startDecorator={<LocalPhoneOutlinedIcon sx={{ color: 'primary.500' }} />}
                    >+359 876 962 484</Typography>
                </Link>
                    : <Typography
                        sx={groupRow}
                        pb={2}
                        justifyContent={{ xs: 'left', md: 'flex-end' }}
                        startDecorator={<LocalPhoneOutlinedIcon sx={{ color: 'primary.500' }} />}
                    >+359 876 962 484</Typography>
                }
                <Link to='https://www.facebook.com/profile.php?id=61562013416233' style={{ textDecoration: 'none' }}>
                    <Typography
                        sx={groupRow}
                        justifyContent={{ xs: 'left', md: 'flex-end' }}
                        startDecorator={<FacebookIcon sx={{ color: 'secondary.500', mt: -.5 }} />}
                    >FACEBOOK</Typography>
                </Link>
            </Stack>
        </SectionWrapper>
    )
}

export default Footer