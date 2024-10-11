import { Typography, TypographyProps } from "@mui/joy";
import { ReactNode } from "react";

interface SectionTitleProps extends TypographyProps {
    children: ReactNode;
}

const SectionTitle = ({ children, ...otherProps }: SectionTitleProps) => {
    return (
        <Typography
            fontSize={{ xs: 'largeTitle', sm: 'xLargeTitle', lg: 'xxLargeTitle' }}
            fontWeight={300}
            lineHeight={{ xs: '2.4rem', md: '3rem' }}
            {...otherProps}
        >
            {children}
        </Typography>
    );
};

export default SectionTitle;
