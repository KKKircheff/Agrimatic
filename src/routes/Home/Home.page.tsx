
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
                    mt={{ xs: 8, lg: 16 }}
                />
                <HomeCards pt={{ xs: 6, lg: 12 }} pb={8} />
            </SectionWrapper>
            <SectionWrapper id='contact-form' pb={8}>
                <ContactForm />
            </SectionWrapper>
        </Stack>
    )
}

export default Home