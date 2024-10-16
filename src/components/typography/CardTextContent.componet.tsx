import { Typography, TypographyProps } from "@mui/joy";
import { ReactNode } from "react";

interface CardTextContentProps extends TypographyProps {
    children: ReactNode;
}

const CardTextContent = ({ children, ...otherProps }: CardTextContentProps) => {
    return (
        <Typography
            fontWeight={400}
            textColor="neutral.600"
            fontSize={{ xs: 'lg', md: 'md' }}
            {...otherProps}
        >
            {children}
        </Typography>
    );
};

export default CardTextContent;