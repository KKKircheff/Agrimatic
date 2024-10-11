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
        // <Stack direction='column' bgcolor='primary.50' minHeight='200px' mx='auto' my={2} width={{ xs: '90%', md: '96%', xl: '97%' }} borderRadius='md'>
        <SectionWrapper
            direction={{ xs: 'column', md: 'row' }}
            bgcolor='primary.50'
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
                >1138 Младост 4</Typography>
                <Typography
                    style={groupRow}
                    justifyContent={{ xs: 'left', md: 'flex-start' }}
                    pl={{ xs: 4, md: 0 }}
                    pb={2}
                >София, България</Typography>
                <Typography
                    style={groupRow}
                    ml={{ xs: 0, md: -4 }}

                    justifyContent={{ xs: 'left', md: 'flex-start' }}
                    startDecorator={<PlaceOutlinedIcon sx={{ color: 'primary.500' }} />}
                > 7513EG, Haaksbergerstraat 294a</Typography>
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
                    style={groupRow}
                    pb={2}
                    startDecorator={<LocalPostOfficeOutlinedIcon sx={{ color: 'primary.500' }} />}
                    justifyContent={{ xs: 'left', md: 'flex-end' }}
                >office@agrimatic.bg</Typography>
                <Typography
                    style={groupRow}
                    justifyContent={{ xs: 'left', md: 'flex-end' }}
                    startDecorator={<LocalPhoneOutlinedIcon sx={{ color: 'primary.500' }} />}
                >+359 555 555 555</Typography>
            </Stack>
        </SectionWrapper>
        // </Stack>

    )
}

export default Footer