import { Stack, Typography } from "@mui/joy"
import WhiteButton from "../../components/buttons/WhiteButton.component"
import { scroller } from 'react-scroll'

const handleScroll = () => {
    scroller.scrollTo('contact-form', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuint',
    });
}
const Navbar = () => {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            minHeight='160px'
            justifyContent='space-between'
            alignItems='center'
            py={8} gap={8}>
            <Stack direction='row' fontSize={{ xs: '10vw', md: 'xxxLargeTitle' }}>
                <Typography
                    fontSize='inherit'
                    fontWeight='200'
                    textColor='primary.400'
                >BUILDERS</Typography>
                <Typography
                    fontSize='inherit'
                >DEPOT</Typography>
            </Stack>
            <WhiteButton
                size='md'
                color='neutral'
                variant='outlined'
                sx={{ maxWidth: { xs: '100%', sm: '200px' } }}
                onClick={handleScroll}
            >Contact us</WhiteButton>
        </Stack>
    )
}

export default Navbar