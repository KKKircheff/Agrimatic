import { useState } from 'react';
import { Box, useTheme, Stack, List } from '@mui/joy';
import SectionWrapper from '../SectionWrapper.component';
import ListMenuItem from './ListMenuItem.component';
import SideDrawer from './SideDrawer.component';
import BurgerButton from './BurgerButton.component';
import Logo from './Logo.section';

const NavBar = () => {

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
                    py={{ xs: 2, md: 3 }} pr={{ md: 1 }}
                    direction='row'
                    justifyContent='space-between'
                    alignItems='center'
                    bgcolor='transparent'
                    // borderRadius={r.full}
                    sx={{ maxHeight: maxNavHeight }}
                >
                    <Logo />

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