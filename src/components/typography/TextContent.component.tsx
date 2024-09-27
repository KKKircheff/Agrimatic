import { Typography, TypographyProps } from "@mui/joy";
import { ReactNode } from "react";

interface TextContentProps extends TypographyProps {
    children: ReactNode;
}

const TextContent = ({ children, ...otherProps }: TextContentProps) => {
    return (
        <Typography
            fontWeight={400}
            textColor="neutral.600"
            {...otherProps}
        >
            {children}
        </Typography>
    );
};

export default TextContent;