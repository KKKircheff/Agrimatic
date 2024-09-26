import {
    List,
    ModalClose,
    Stack,
    Drawer,
    Typography,
} from '@mui/joy';

import ListMenuItem from './ListMenuItem.component';
import { styleVariables } from '../../styles/styleVariables';

type Item = {
    name: string,
    path: string,
    icon: string
}

type Props = {
    items: Item[],
    isDrawerOpen: boolean,
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>,
    bgColor: string,
}

const SideDrawer = ({ items, isDrawerOpen, setIsDrawerOpen, bgColor }: Props) => {
    // const { xs, md, lg } = styleVariables.layoutPadding;

    return (
        <Drawer
            size='lg' variant="plain"
            open={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
            slotProps={{
                content: {
                    sx: {
                        width: '100%',
                        bgcolor: 'transparent',
                        p: { md: 3, sm: 0 },
                        boxShadow: 'none',
                    },
                },
            }}>

            <Stack
                direction='column'
                mt='80px'
                mx={styleVariables.layoutPadding}
                px={3}
                py={2}
                gap={3}
                borderRadius='xl'
                boxSizing='border-box'
                overflow='hidden'
                bgcolor={bgColor}
                sx={{
                    backdropFilter: 'blur(5px)',
                    transition: 'all .2s ease-in'
                }}
            >

                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography
                        level='h2'
                        fontWeight={400}
                        letterSpacing={1}
                        textColor='primary.500'
                        fontSize={{ xs: 'lg', md: 'xl', lg: 'xxLargeTitle' }}>
                        АГРИМАТИК
                    </Typography>

                    <ModalClose id="close-icon" sx={{ position: 'initial', cursor: 'pointer', borderRadius: '50px', background: 'transparent' }} />
                </Stack>

                <List
                    component="nav"
                    size="lg"
                    sx={{
                        flex: 'none',
                        fontSize: 'xl',
                        '& > div': { justifyContent: 'center' },
                    }}>
                    {items.map((item) => <ListMenuItem
                        key={item.name}
                        item={item}
                        setIsDrawerOpen={setIsDrawerOpen}
                    />)}
                </List>
            </Stack>
        </Drawer>
    )
}

export default SideDrawer