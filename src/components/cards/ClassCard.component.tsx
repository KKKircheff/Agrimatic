import { GridProps, Stack } from "@mui/joy";
import TextContent from "../typography/TextContent.component";
import SectionSubtitle from "../typography/SectionSubtitle.component";

interface Props extends GridProps {
    title: string;
    textContent: string;
}

const ClassCard = ({ title, textContent, ...otherProps }: Props) => {
    return (
        <Stack
            direction='column'
            spacing={3}
            width='100%'
            height='100%'
            bgcolor='neutral.100'
            borderRadius='md'
            p={{ xs: 2, md: 3 }}
            {...otherProps}
        >
            <SectionSubtitle textColor='primary.500'>{title}</SectionSubtitle>
            <TextContent>{textContent}</TextContent>
        </Stack>
    )
}

export default ClassCard