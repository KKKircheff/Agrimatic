import { Typography, TypographyProps } from "@mui/joy";
import { ReactNode } from "react";

interface CardTitleProps extends TypographyProps {
    children: ReactNode;
}

const CardTitle = ({ children, ...otherProps }: CardTitleProps) => {
    return (
        <Typography
            fontSize='largeTitle'
            fontWeight={300}
            lineHeight='2rem'
            py={2}
            {...otherProps}
        >
            {children}
        </Typography>
    );
};

export default CardTitle;
