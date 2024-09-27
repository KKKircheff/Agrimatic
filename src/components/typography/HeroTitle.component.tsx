import { Typography, TypographyProps } from "@mui/joy";
import { ReactNode } from "react";

interface HeroTitleProps extends TypographyProps {
    children: ReactNode;
}

const HeroTitle = ({ children, ...otherProps }: HeroTitleProps) => {
    return (
        <Typography
            fontSize={{ xs: 'largeTitle', sm: 'xxLargeTitle', lg: 'xxxLargeTitle' }}
            fontWeight={700}
            lineHeight='3rem'
            py={4}
            {...otherProps}
        >
            {children}
        </Typography>
    );
};

export default HeroTitle;
