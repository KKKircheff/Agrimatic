
import ListItem from "@mui/joy/ListItem"
import { Typography, useTheme } from "@mui/joy";

import { useNavigate } from "react-router-dom";
import { isMobile } from 'react-device-detect';

type ItemProps = {
    item: {
        name: string,
        path: string,
        icon: string
    },
    setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const ListMenuItem = ({ item, setIsDrawerOpen }: ItemProps) => {

    const navigate = useNavigate()
    const c = useTheme().palette;
    // const f = useTheme().fontSize;

    const handleClick = () => {
        navigate(item.path);
        setIsDrawerOpen(false);
    }

    return (
        <ListItem key={item.name} role="none" onClick={handleClick}>
            <Typography
                role="menuitem"
                fontSize={{ xs: 'md', md: 'md', lg: 'lg' }}
                bgcolor='transparent' fontWeight='md'
                sx={{
                    cursor: 'pointer',
                    borderColor: 'transparent',
                    '&:hover': !isMobile ? {
                        transition: 'all .15s ease-in',
                        borderBottom: '2px solid',
                        borderColor: c.primary[500],
                        marginTop: '1px'
                    } : {},
                }}>
                {item.name}
            </Typography>
        </ListItem>
    )
}

export default ListMenuItem

