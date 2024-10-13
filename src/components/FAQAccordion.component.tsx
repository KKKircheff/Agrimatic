import {
    Accordion,
    accordionClasses,
    AccordionDetails,
    accordionDetailsClasses,
    AccordionGroup,
    AccordionSummary,
    accordionSummaryClasses,
    Grid
} from '@mui/joy'
import { useState } from 'react'

type Props = {
    faqs: {
        title: string,
        content: string
    }[]
}

export const FaqAccordion = ({ faqs }: Props) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleChange = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <AccordionGroup
            disableDivider
            transition="0.2s ease"
            sx={(theme) => ({
                width: '100%',
                [`& .${accordionClasses.root}`]: {
                    marginTop: 1,
                    transition: '0.2s ease',
                    bgcolor: 'primary.50',
                    borderRadius: 'xs',
                    '& button:not([aria-expanded="true"])': {
                        transition: '0.2s ease',
                    },
                    '& button:hover': {
                        borderRadius: 'xs',
                        background: theme.palette.primary[100],
                    },
                },
                [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                    bgcolor: 'primary.50',
                    borderRadius: 'xs',
                },
                '& [aria-expanded="true"]': {
                    boxShadow: `inset 0 -1px 0 ${theme.vars.palette.primary}`,
                },
                [`& .${accordionSummaryClasses.root}`]:
                {
                    fontSize: theme.typography['h3'],
                    color: theme.palette.neutral[600],
                    fontWeight: 300,
                },
                [`& .${accordionSummaryClasses.root}.${accordionSummaryClasses.expanded}`]:
                {
                    fontWeight: 300,
                    color: theme.palette.neutral[600],
                },
                [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                {
                    color: theme.palette.neutral[600],
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
                {
                    faqs.map((faq, index) =>
                        <Grid xs={12} md={6} key={index}>
                            <Accordion expanded={expandedIndex === index} onChange={() => handleChange(index)}>
                                <AccordionSummary>{faq.title}</AccordionSummary>
                                <AccordionDetails>
                                    {faq.content}
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    )
                }
            </Grid>
        </AccordionGroup >
    )
}
