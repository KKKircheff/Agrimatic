import SectionWrapper from "../../components/SectionWrapper.component"
import { VaraietiesHero } from "./VaraietiesHero.section"
import { VarietiesCards } from "./VarietiesCards.sections"

const Varieties = () => {
    return (
        <SectionWrapper pt={{ xs: 5, lg: 9, xl: 12 }}>
            <VaraietiesHero />
            <VarietiesCards />
        </SectionWrapper>
    )
}

export default Varieties