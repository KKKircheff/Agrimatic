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
            variant='plain'
            transition="0.2s ease"
            sx={(theme) => ({
                width: '100%',

                [`& .${accordionSummaryClasses.button}`]: {
                    borderRadius: 'xs',
                    bgcolor: theme.palette.neutral[700],
                    color: theme.palette.primary[400]!,
                    px: 2
                },

                [`& .${accordionClasses.root}`]: {
                    marginTop: 1,
                    transition: '0.2s ease',
                    '& button:hover': {
                        bgcolor: theme.palette.neutral[900],
                        color: theme.palette.primary[400],
                    },
                },
                [`& .${accordionClasses.root}.${accordionClasses.expanded}`]: {
                    borderRadius: 'xs',
                    bgcolor: 'neutral.100',
                },
                [`& .${accordionSummaryClasses.root}`]:
                {
                    fontWeight: 400,
                    fontSize: 'lg',
                },
                [`& .${accordionSummaryClasses.root}.${accordionSummaryClasses.expanded}`]:
                {
                    color: theme.palette.primary[600]!,
                    fontWeight: 400,
                },
                [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                {
                    pt: 2,
                    color: theme.palette.neutral[500],
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
