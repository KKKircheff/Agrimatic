import { Stack, Typography } from "@mui/joy"
import logo from '/images/agrimatic_logo.webp'
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    return (
        <Stack
            role='button'
            direction='row' alignItems='center' gap={1}
            bgcolor='transparent'
            sx={{ cursor: 'pointer' }}
            aria-label="Logo button Home page"
            onClick={() => navigate('/')}>
            <img src={logo} style={{ width: '25px', height: '25px' }} loading='eager' alt='Agrimatic logo' />
            <Typography
                level='h2'
                fontWeight={500}
                letterSpacing={1}
                textColor='neutral.700'
                fontSize={{ xs: 'lg', md: 'xl', lg: 'xl' }}>
                АгриМатик
            </Typography>
        </Stack>
    )
}

export default Logo