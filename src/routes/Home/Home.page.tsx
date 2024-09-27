
import { Stack } from "@mui/joy"
import SectionWrapper from "../../components/SectionWrapper.component";
import HomeHero from "./HomeHero.section";
import ContactForm from "../Contact/ContactForm.section";
import HomeCards from "./HomeCards.section";
import SideTitleText from "../../components/content-sections/SideTitleText.component";
// const PdfCarousel = lazy(() => import('./PdfCarousel/PdfCarousel.section'));


const Home = () => {

    return (
        <Stack>
            <SectionWrapper>
                <HomeHero />
                <SideTitleText
                    title='Защо да изберете Агриматик за партньор?'
                    textContent='Ние доставяме директно до вас висококачествени семена и посадъчен материал за картофи от нидерландски производители. Изключителни представители сме нза седем лицензирани сорта картофи за България. Освен това доставяме сортове със свободен лиценз, като Агрия, Билдстар, Дезире и други.'
                    mt={16}
                />
                <HomeCards pt={16} pb={12} />
            </SectionWrapper>
            <SectionWrapper id='contact-form' pb={8}>
                <ContactForm />
            </SectionWrapper>
        </Stack>
    )
}

export default Home