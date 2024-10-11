import { Grid, GridProps } from "@mui/joy";
import SectionTitle from "../typography/SectionTitle.component";
import TextContent from "../typography/TextContent.component";

interface Props extends GridProps {
    title: string;
    textContent: string;
}

const SideTitleText = ({ title, textContent, ...ottherProps }: Props) => {
    return (
        <Grid
            container
            spacing={3}
            justifyContent='space-between'
            alignItems='flex-start'
            width='100%'
            {...ottherProps}
        >
            <Grid xs={12} md={6} >
                <SectionTitle>{title}</SectionTitle>
            </Grid>
            <Grid xs={12} md={6}>
                <TextContent pl={{ xs: 0, md: 2 }}>{textContent}</TextContent>
            </Grid>
        </Grid>
    )
}

export default SideTitleText