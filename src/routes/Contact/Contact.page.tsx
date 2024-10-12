import ContactForm from "./ContactForm.section"
import SectionWrapper from "../../components/SectionWrapper.component"
import ContactHero from "./ContactHero.section"
import { Stack } from "@mui/joy"

const Contact = () => {
    return (
        <Stack direction='column'>
            <SectionWrapper pt={5}>
                <ContactHero />
            </SectionWrapper>
            <SectionWrapper pt={8} pb={4}>
                <ContactForm />
            </SectionWrapper>
        </Stack>
    )
}

export default Contact