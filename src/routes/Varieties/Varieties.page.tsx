import SideTitleText from "../../components/content-sections/SideTitleText.component"
import SectionWrapper from "../../components/SectionWrapper.component"
import { VaraietiesHero } from "./VaraietiesHero.section"
import { VarietiesCards } from "./VarietiesCards.sections"

const Varieties = () => {
    return (
        <>
            <SectionWrapper pt={{ xs: 5, lg: 5, xl: 5 }}>
                <VaraietiesHero />
                <SideTitleText
                    title='Налични сортове - спецификации и описание'
                    textContent='Разгледайте възможните сортов и спецификации. В зависимост от вашите клиенти, пазари и климтична зона изберете сорт. Може да се свържете с нас, за допълнителна информация и цена. Като директна връзка с едни от най-големите производители на картофи за разсад, ние ви гарантираме най-добрата цена, за покупка към момента в Нидерландия, както и сертифицирано качество за категорията. Бонус е доставката директно до ваш адрес.'
                    pt={{ xs: 5, md: 12, xl: 14 }} pb={{ xs: 8, md: 12, xl: 14 }}
                />
            </SectionWrapper>
            <SectionWrapper pb={{ xs: 5, lg: 5, xl: 5 }}>
                <VarietiesCards />
            </SectionWrapper>
        </>
    )
}

export default Varieties