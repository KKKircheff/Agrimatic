import { Stack, StackProps } from "@mui/joy"

type Props
    = {
        children: React.ReactNode | React.ReactNode[]

    } & StackProps

const SectionWrapper = ({ children, ...otherProps }: Props) => {
    return (
        <Stack width={{ xs: '90%', md: '95%', lg: '85%', xl: '80%' }} marginX='auto' {...otherProps}>
            {children}
        </Stack>
    )
}

export default SectionWrapper