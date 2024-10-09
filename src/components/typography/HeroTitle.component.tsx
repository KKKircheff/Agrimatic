import { Typography, TypographyProps } from "@mui/joy";
import { ReactNode } from "react";

interface HeroTitleProps extends TypographyProps {
    children: ReactNode;
}

const HeroTitle = ({ children, ...otherProps }: HeroTitleProps) => {
    return (
        <Typography
            fontSize={{ xs: 'largeTitle', sm: 'xLargeTitle', lg: 'xxxLargeTitle' }}
            fontFamily={'Open Sans'}
            fontWeight={700}
            {...otherProps}
        >
            {children}
        </Typography>
    );
};

export default HeroTitle;
