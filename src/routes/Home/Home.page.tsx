
import { Stack, Typography } from "@mui/joy"
// import Navbar from "./Navbar/Navbar.component"
import SectionWrapper from "../../components/SectionWrapper.component";
import HomeHero from "./HomeHero.section";
import ContactForm from "../Contact/ContactForm.section";
// const PdfCarousel = lazy(() => import('./PdfCarousel/PdfCarousel.section'));


const Home = () => {

    return (
        <Stack>
            <Stack mb={4}>
                <SectionWrapper>
                    <HomeHero />
                </SectionWrapper>
            </Stack>
            <SectionWrapper minHeight='800px' alignItems='center' justifyContent='center'>
                <Typography level='h1' textColor='neutral.400'>Under construction</Typography>
            </SectionWrapper>
            <SectionWrapper id='contact-form'>
                <ContactForm />
            </SectionWrapper>
        </Stack>
    )
}

export default Home