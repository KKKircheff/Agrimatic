import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Stack from '@mui/joy/Stack';
import List from '@mui/joy/List';
import Typography from '@mui/joy/Typography';
import { Box, useTheme } from '@mui/joy';

import logo from '/images/logo.webp'

import ListMenuItem from './ListMenuItem.component';
import SideDrawer from './SideDrawer.component';
import BurgerButton from './BurgerButton.component';
import SectionWrapper from '../SectionWrapper.component';

const NavBar = () => {
    const navigate = useNavigate();

    const bgColor = '#ffffffc0'
    // const c = useTheme().palette;
    // const r = useTheme().radius;
    const s = useTheme().shadow;

    const maxNavHeight = '80px'

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const items = [
        {
            name: 'Начало',
            path: '/',
            icon: ''
        },
        {
            name: 'Сортове',
            path: '/varieties',
            icon: ''
        },
        {
            name: 'Контакт',
            path: '/contact',
            icon: ''
        },
    ]

    return (
        <Box
            position='fixed'
            top={{ xs: '0px', md: '0px' }}
            left={0} zIndex='1999'
            sx={{ backdropFilter: 'blur(5px)', maxHeight: maxNavHeight }}
            boxShadow={s.xs}
            bgcolor={bgColor}
            width={'100%'}>
            <SectionWrapper >
                <Stack
                    component="nav" aria-label="My site"
                    width='100%'
                    mx={0} py={{ xs: 2, md: 3 }} pr={{ md: 1 }}
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    bgcolor='transparent'
                    // borderRadius={r.full}
                    sx={{ maxHeight: maxNavHeight }}

                >
                    <Stack
                        role='logo'
                        direction='row' alignItems='center' gap={1}
                        bgcolor='transparent'
                        sx={{ cursor: 'pointer' }}
                        onClick={() => navigate('/')}>
                        <img src={logo} style={{ width: '40px', height: '40px' }} loading='eager' alt='Agrimatic logo' />
                        <Typography
                            level='h2'
                            fontWeight={400}
                            letterSpacing={1}
                            textColor='primary.500'
                            fontSize={{ xs: 'lg', md: 'xl', lg: 'mediumTitle' }}>
                            АГРИМАТИК
                        </Typography>
                    </Stack>

                    <List
                        role="menubar"
                        orientation="horizontal"
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                            padding: 0,
                            paddingTop: .3,
                        }}>
                        {items.map((item) => <ListMenuItem
                            key={item.name}
                            item={item}
                            setIsDrawerOpen={setIsDrawerOpen}
                        />)}
                    </List>

                    <Stack role="button" display={{ xs: 'block', md: 'none' }}>
                        <BurgerButton isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
                    </Stack>
                </Stack>
            </SectionWrapper>

            <SideDrawer
                items={items}
                isDrawerOpen={isDrawerOpen}
                setIsDrawerOpen={setIsDrawerOpen}
                bgColor={bgColor}
            />
        </Box>
    )
}

export default NavBar