import { createElement } from 'react';
import Avatar from '@mui/joy/Avatar';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardTitle from "../typography/CardTitle.component";
import CardTextContent from "../typography/CardTextContent.componet";
import { Stack } from "@mui/joy";
import { IconType } from "react-icons/lib";

type Props = {
    title: string;
    content: string;
    icon: IconType;
    iconSize?: number;
}

const BenefitCard = ({ title, content, icon, iconSize = 30 }: Props) => {
    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%", // Ensure card stretches to fill the parent grid item
                display: "flex", // Enable flexbox on the card
                flexDirection: "column", // Stack elements vertically
                justifyContent: "space-between", // Distribute space evenly
                backgroundColor: "neutral.100",
                padding: 3
            }}
        >
            <Stack direction="column" justifyContent="space-between">
                <Avatar sx={{ backgroundColor: "secondary.600", color: "secondary.300" }}>
                    {createElement(icon, { size: iconSize })}
                </Avatar>
            </Stack>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardTextContent>{content}</CardTextContent>
            </CardContent>
        </Card>
    );
};

export default BenefitCard;