import ContactForm from "./ContactForm.section"
import SectionWrapper from "../../components/SectionWrapper.component"
import ContactHero from "./ContactHero.section"

const Contact = () => {
    return (
        <SectionWrapper>
            <ContactHero />
            <ContactForm />
        </SectionWrapper>
    )
}

export default Contact