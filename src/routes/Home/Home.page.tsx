
import { Stack } from "@mui/joy"
import SectionWrapper from "../../components/SectionWrapper.component";
import HomeHero from "./HomeHero.section";
import ContactForm from "../Contact/ContactForm.section";
import HomeCards from "./HomeCards.section";
import SideTitleText from "../../components/content-sections/SideTitleText.component";
import { HomeFAQ } from "./HomeFAQ.section"
import { HomeClassInfo } from "./HomeClassInfo.section";

const Home = () => {

    return (
        <Stack>
            <SectionWrapper pt={{ xs: 0, lg: 5, xl: 5 }}>
                <HomeHero />
                <SideTitleText
                    title='Защо да изберете Агриматик за партньор?'
                    textContent='Ние доставяме директно до вас висококачествени семена и посадъчен материал за картофи от нидерландски производители. Изключителни представители сме на седем лицензирани сорта картофи за България. Освен това доставяме сортове със свободен лиценз, като Агрия, Билдстар, Дезире и други.'
                    mt={{ xs: 5, lg: 16 }}
                />
                <HomeCards pt={{ xs: 6, lg: 12 }} />
            </SectionWrapper>
            <SectionWrapper id='information_section' pb={{ xs: 5, md: 8 }} pt={{ xs: 8.5, md: 16 }}>
                <HomeClassInfo />
            </SectionWrapper>
            <SectionWrapper pb={8} pt={{ xs: 0, md: 8 }}>
                <HomeFAQ />
            </SectionWrapper>
            <SectionWrapper id='contact-form' pb={8}>
                <ContactForm />
            </SectionWrapper>
        </Stack>
    )
}

export default Home