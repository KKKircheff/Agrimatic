import { createElement } from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardTitle from "../typography/CardTitle.component";
import CardTextContent from "../typography/CardTextContent.componet";
import { Stack } from "@mui/joy";
import { IconType } from "react-icons/lib";
import { Fade, Slide } from 'react-awesome-reveal';

type Props = {
    title: string;
    content: string;
    icon: IconType;
    iconSize?: number;
}

const BenefitCard = ({ title, content, icon, iconSize = 30 }: Props) => {
    return (
        <Slide direction='up' delay={100} duration={400} triggerOnce style={{
            height: '100%',
            display: "flex"
        }}>
            <Fade delay={200} duration={1200} triggerOnce>
                <Card
                    variant="outlined"
                    sx={{
                        height: "100%", // Ensure card stretches to fill the parent grid item
                        display: "flex", // Enable flexbox on the card
                        flexDirection: "column", // Stack elements vertically
                        justifyContent: "space-between", // Distribute space evenly
                        backgroundColor: "primary.200",
                        borderColor: "primary.300",
                        padding: { xs: 2, md: 3 }
                    }}
                >
                    <Stack direction="column" justifyContent="space-between">
                        <Avatar sx={{ backgroundColor: "primary.700", color: "primary.400" }}>
                            {createElement(icon, { size: iconSize })}
                        </Avatar>
                    </Stack>
                    <CardContent>
                        <CardTitle>{title}</CardTitle>
                        <CardTextContent>{content}</CardTextContent>
                    </CardContent>
                </Card>
            </Fade>
        </Slide>
    );
};

export default BenefitCard;