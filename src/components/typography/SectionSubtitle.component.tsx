import { Typography, TypographyProps } from "@mui/joy";
import { ReactNode } from "react";

interface CardTitleProps extends TypographyProps {
    children: ReactNode;
}

const SectionSubtitle = ({ children, ...otherProps }: CardTitleProps) => {
    return (
        <Typography
            fontSize='smallTitle'
            fontWeight={400}
            {...otherProps}
        >
            {children}
        </Typography>
    );
};

export default SectionSubtitle;
