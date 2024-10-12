import { Typography, TypographyProps } from "@mui/joy";
import { ReactNode } from "react";

interface HeroTitleProps extends TypographyProps {
    children: ReactNode;
}

const HeroTitle = ({ children, ...otherProps }: HeroTitleProps) => {
    return (
        <Typography
            fontSize={{ xs: 'mediumTitle', sm: 'largeTitle', lg: 'xxLargeTitle' }}
            fontFamily={'Open Sans'}
            fontWeight={800}
            letterSpacing={-2}
            {...otherProps}
        >
            {children}
        </Typography>
    );
};

export default HeroTitle;
