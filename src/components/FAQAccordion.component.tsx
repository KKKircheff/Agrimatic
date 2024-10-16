import {
    Accordion,
    accordionClasses,
    AccordionDetails,
    accordionDetailsClasses,
    AccordionGroup,
    AccordionSummary,
    accordionSummaryClasses,
    Grid
} from '@mui/joy';

import { useState } from 'react';
import { isMobile } from "react-device-detect";

type Props = {
    faqs: {
        title: string,
        content: string[]
    }[]
}

export const FaqAccordion = ({ faqs }: Props) => {
    // For mobile, we'll use an array to track multiple open accordions.
    const [expandedIndices, setExpandedIndices] = useState<number[]>([]);
    // For desktop, we'll track a single expanded index.
    const [expandedDesktopIndex, setExpandedDesktopIndex] = useState<number | null>(null);

    const handleChange = (index: number) => {
        if (isMobile) {
            // On mobile, we allow multiple accordions to be expanded, toggling them individually.
            setExpandedIndices(prevExpandedIndices =>
                prevExpandedIndices.includes(index)
                    ? prevExpandedIndices.filter(i => i !== index) // Close accordion if already open
                    : [...prevExpandedIndices, index] // Open accordion
            );
        } else {
            // On desktop, toggle the accordion: close if already open, otherwise open.
            setExpandedDesktopIndex(prevIndex => (prevIndex === index ? null : index));
        }
    };


    const isExpanded = (index: number) => {
        return isMobile
            ? expandedIndices.includes(index) // For mobile, check if this index is in the array
            : expandedDesktopIndex === index; // For desktop, check if this is the expanded index
    };

    return (
        <AccordionGroup
            variant='plain'
            transition="0.2s ease"
            sx={(theme) => ({
                width: '100%',
                [`& .${accordionSummaryClasses.button}`]: {
                    color: theme.palette.neutral[500]!,
                    bgcolor: theme.palette.primary[50],
                    px: 3,
                    minHeight: 60,
                    fontSize: { xs: 'lg', md: 'md' },
                },
                [`& .${accordionSummaryClasses.button}.${accordionClasses.expanded}`]: {
                    bgcolor: theme.palette.primary[400],
                    color: theme.palette.neutral[700]!,
                    px: 3,
                    mb: 2,
                    minHeight: 60
                },
                [`& .${accordionClasses.root}`]: {
                    marginTop: 1.5,
                    transition: '0.2s ease',
                    '& button:hover': {
                        bgcolor: theme.palette.primary[400],
                        color: theme.palette.neutral[700]!,
                    },
                },
                [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                    bgcolor: 'primary.50',
                    mb: 2,
                },
                [`& .${accordionSummaryClasses.root}`]: {
                    fontWeight: 400,
                    fontSize: 'md',
                },
                [`& .${accordionSummaryClasses.root}.${accordionSummaryClasses.expanded}`]: {
                    color: theme.palette.primary[600]!,
                    fontWeight: 400,
                },
                [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]: {
                    pt: 0,
                    px: 3,
                    color: theme.palette.neutral[500],
                    fontSize: { xs: 'lg', md: 'md' },
                },
                [`& .${accordionSummaryClasses.indicator}`]: {
                    transition: '0.2s',
                    transform: 'rotate(-90deg)',
                },
                [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                    transform: 'rotate(0deg)',
                },
            })}
        >
            <Grid container columnSpacing={{ xs: 2, md: 4 }}>
                {faqs.map((faq, index) => (
                    <Grid xs={12} md={6} key={index}>
                        <Accordion
                            expanded={isExpanded(index)} // Check expanded state for mobile/desktop
                            onChange={() => handleChange(index)}
                        >
                            <AccordionSummary>{faq.title}</AccordionSummary>
                            {faq.content.map((content, contentIndex) => (
                                <AccordionDetails key={5000 + contentIndex}>
                                    {content}
                                </AccordionDetails>
                            ))}
                        </Accordion>
                    </Grid>
                ))}
            </Grid>
        </AccordionGroup>
    );
};
