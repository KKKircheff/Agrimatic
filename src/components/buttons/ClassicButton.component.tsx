import { Button, styled } from "@mui/joy";

const ClassicButton = styled(Button)(() => ({
    border: `2px solid`,
    maxWidth: '200px',
    transition: 'all .3s easy-in',
    '&:hover': {
    },
}))

export default ClassicButton


