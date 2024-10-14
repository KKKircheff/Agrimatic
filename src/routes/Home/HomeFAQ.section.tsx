import { Stack } from '@mui/joy'
import { FaqAccordion } from '../../components/FAQAccordion.component'
import SideTitleText from '../../components/content-sections/SideTitleText.component'
import { faqs } from './faq'


export const HomeFAQ = () => {
    return (
        <Stack width='100%' spacing={{ xs: 3, md: 6 }}>
            <SideTitleText title="Често задавани въпроси" textContent="Допълнителна информация и често задавани въпроси с които се надяваме да помогнем. С удоволствие ще отговорим при допълнителни въпроси или заявка от ваша страна. Не се колебайте да се свържете с нас!" />
            <FaqAccordion faqs={faqs} />
        </Stack>
    )
}
