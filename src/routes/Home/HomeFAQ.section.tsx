import { Stack } from '@mui/joy'
import { FaqAccordion } from '../../components/FAQAccordion.component'

const faqs = [
    {
        title: 'First Accordion',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae laboriosam incidunt quaerat pariatur maxime cupiditate nulla animi voluptatem et consequuntur, exercitationem explicabo. Fuga, quod. Maiores saepe cumque numquam mollitia enim'
    },
    {
        title: 'Second Accordion',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae laboriosam incidunt quaerat pariatur maxime cupiditate nulla animi voluptatem et consequuntur, exercitationem explicabo. Fuga, quod. Maiores saepe cumque numquam mollitia enim'
    },
    {
        title: 'Third Accordion',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae laboriosam incidunt quaerat pariatur maxime cupiditate nulla animi voluptatem et consequuntur, exercitationem explicabo. Fuga, quod. Maiores saepe cumque numquam mollitia enim'
    },
]

export const HomeFAQ = () => {
    return (
        <Stack width='100%'>
            <FaqAccordion faqs={faqs} />
        </Stack>
    )
}
