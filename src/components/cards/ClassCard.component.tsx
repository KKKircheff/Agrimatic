import { GridProps, Stack } from "@mui/joy";
import TextContent from "../typography/TextContent.component";
import SectionSubtitle from "../typography/SectionSubtitle.component";
import { Fade, Slide } from "react-awesome-reveal";

interface Props extends GridProps {
    title: string;
    textContent: string;
}

const ClassCard = ({ title, textContent, ...otherProps }: Props) => {
    return (
        <Slide direction='up' delay={100} duration={400} triggerOnce style={{
            height: '100%',
            display: "flex"
        }}>
            <Fade delay={200} duration={1200} triggerOnce>
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
            </Fade>
        </Slide>
    )
}

export default ClassCard