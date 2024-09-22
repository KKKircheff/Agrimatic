import { Stack, Typography } from '@mui/joy'
import SectionWrapper from '../../components/SectionWrapper.component'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { TypographyStyle } from '@mui/material';

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
                <Stack direction='column' textAlign={{ xs: 'center', md: 'left' }}>
                    <Typography
                        sx={groupTitle}
                    >COMPANY</Typography>
                    <Typography
                        style={groupRow}
                    >Builders Depot ltd.</Typography>
                    <Typography
                        style={groupRow}
                    >Bulgaria</Typography>
                </Stack>
                <Stack direction='column' textAlign='center'>
                    <Typography
                        sx={groupTitle}
                    >ADDRESS</Typography>
                    <Typography
                        style={groupRow}
                        ml={-3}
                        justifyContent={'center'}
                        startDecorator={<PlaceOutlinedIcon sx={{ color: 'primary.500' }} />}
                    > 8800, Sliven</Typography>
                    <Typography
                        style={groupRow}
                    >Bulgaria</Typography>
                    <Typography
                        style={groupRow}
                        ml={-3}
                        justifyContent={'center'}
                        startDecorator={<PlaceOutlinedIcon sx={{ color: 'primary.500' }} />}
                    > 7511, Enschede</Typography>
                    <Typography
                        style={groupRow}
                    >Nederland</Typography>
                </Stack>
                <Stack direction='column' textAlign={{ xs: 'center', md: 'right' }}>
                    <Typography
                        sx={groupTitle}
                    >CONTACT</Typography>
                    <Typography
                        style={groupRow}
                        justifyContent={{ xs: 'center', md: 'flex-end' }}
                        startDecorator={<LocalPhoneOutlinedIcon sx={{ color: 'primary.500' }} />}
                    >+359 555 555 555</Typography>
                    <Typography
                        style={groupRow}
                        startDecorator={<LocalPostOfficeOutlinedIcon sx={{ color: 'primary.500' }} />}
                        justifyContent={{ xs: 'center', md: 'flex-end' }}
                    >contact@buildersdepot.eu</Typography>
                </Stack>
            </SectionWrapper>
        </Stack>

    )
}

export default Footer