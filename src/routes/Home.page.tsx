
import { Stack, Typography } from "@mui/joy"
import Navbar from "./Navbar/Navbar.component"
import HomeHero from "./Home/HomeHero.section"
import { lazy, Suspense } from "react";
import SectionWrapper from "../components/SectionWrapper.component"
// const PdfCarousel = lazy(() => import('./PdfCarousel/PdfCarousel.section'));
const ContactForm = lazy(() => import('./ContactForm/ContactForm.section'));
import Footer from "./Footrer/Footer.section"


const Home = () => {

    return (
        <Stack>
            <SectionWrapper >
                <Navbar />
            </SectionWrapper>
            <Stack bgcolor='neutral.100' mb={4}>
                <SectionWrapper>
                    <HomeHero />
                </SectionWrapper>
            </Stack>
            <SectionWrapper minHeight='800px' alignItems='center' justifyContent='center'>
                <Typography level='h1' textColor='neutral.400'>Under construction</Typography>
            </SectionWrapper>
            {/* <SectionWrapper width='100%' bgcolor='neutral.100' id='catalogues'>
                <Suspense fallback={<div>Loading...</div>}>
                    <PdfCarousel />
                </Suspense>
            </SectionWrapper> */}
            <SectionWrapper id='contact-form'>
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm />
                </Suspense>
            </SectionWrapper>
            <Footer />
        </Stack>
    )
}

export default Home