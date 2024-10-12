import { Button, styled } from "@mui/joy";

const BlackButton = styled(Button)(({ theme }) => ({
    border: `1.6px solid ${theme.vars.palette.neutral[900]}`,
    backgroundColor: theme.vars.palette.neutral[900],
    fontWeight: 300,
    [theme.breakpoints.up('xs')]: {
        width: '100%',
        padding: '10px 0',
        minWidth: '127px',
        fontSize: theme.fontSize.sm,
        '&:hover': {
            color: theme.vars.palette.neutral[900],
            backgroundColor: 'transparent',
        },
    },
    [theme.breakpoints.up('md')]: {
        '&:hover': {
            color: theme.vars.palette.neutral[900],
            // backgroundColor: theme.vars.palette.neutral[50],
            backgroundColor: 'transparent',
        },
    },
    [theme.breakpoints.up('lg')]: {
        width: '200px',
        maxWidth: '200px',
        padding: '14px 0',
        fontSize: theme.fontSize.md,
    },
    transition: 'all .3s easy-in',
    borderRadius: '100px',
}))

export default BlackButton
