import { Stack, Typography } from "@mui/joy"
import logo from '/images/logo.webp'
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    return (
        <Stack
            role='logo'
            direction='row' alignItems='center' gap={1}
            bgcolor='transparent'
            sx={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}>
            <img src={logo} style={{ width: '40px', height: '40px' }} loading='eager' alt='Agrimatic logo' />
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