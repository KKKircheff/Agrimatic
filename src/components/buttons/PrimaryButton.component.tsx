import { Button, styled } from "@mui/joy";

const PrimaryButton = styled(Button)(({ theme }) => ({
    border: `1.2px solid ${theme.vars.palette.primary[500]}`,
    color: theme.vars.palette.primary[500],
    backgroundColor: theme.vars.palette.neutral[50],
    fontWeight: 400,
    [theme.breakpoints.up('xs')]: {
        width: '83%',
        padding: '14px 0',
        fontSize: theme.fontSize.sm,
        '&:hover': {
            color: theme.vars.palette.primary[500],
            backgroundColor: theme.vars.palette.neutral[50],
        },
    },
    [theme.breakpoints.up('md')]: {
        '&:hover': {
            color: theme.vars.palette.neutral[50],
            backgroundColor: theme.vars.palette.primary[500],
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

export default PrimaryButton
