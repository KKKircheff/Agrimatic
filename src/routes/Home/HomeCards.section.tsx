import { Grid, StackProps } from "@mui/joy";
import BenefitCard from "../../components/cards/BenefitCard.component";
import { TbTruckDelivery } from "react-icons/tb";
import { LuScrollText } from "react-icons/lu";
import { IoInformationCircleOutline } from "react-icons/io5";
import { PiLeafBold } from "react-icons/pi";

interface Props extends StackProps { }

const HomeCards = ({ ...otherProps }: Props) => {
    return (
        <Grid
            container
            spacing={{ xs: 6, md: 6 }} // Space between grid items
            {...otherProps}
        >
            {/* Grid item for each card */}
            <Grid xs={12} md={6}>
                <BenefitCard
                    title='Нидерландски сертификат'
                    content="Всяка доставка е със сертифицирано качество от Нидерландската служба за обща инспекция на семена и посадъчен материал от картофи за земеделски култури, както и задължителни проверки от името и под надзора на Нидерландското министерство на земеделието, природата и качеството на храните."
                    icon={LuScrollText}
                    iconSize={24}
                />
            </Grid>
            <Grid xs={12} md={6}>
                <BenefitCard
                    title='Богат избор на сортове'
                    content="Агриматик доставя богат избор от разсадно семе за картофи, като можете да избирате от ранни, средно ранни и късни сортове, както и в зависимост от начина на приготвяне – с текстура от A до C. При нас получавате точно това, което поръчате."
                    icon={PiLeafBold}
                    iconSize={28}
                />
            </Grid>
            <Grid xs={12} md={6}>
                <BenefitCard
                    title='Доставка до вашият адрес'
                    content="Ние работим с утвърдени логистични компании за транспорт на групажни товари и цели камиони от Нидерландия. Товарим в края на всяка седмица. Транспортният интервал е от 4 до 6 дни до вашия адрес. Разфасовките са по 600 кг или 1200 кг в биг бегове."
                    icon={TbTruckDelivery}
                    iconSize={28}
                />
            </Grid>
            <Grid xs={12} md={6}>
                <BenefitCard
                    title='Актуална информация'
                    content='Пазарът на разсадно семе за картофи е много динамичен, както по отношение на цени, така и на наличности. При запитване, Агриматик ще ви предостави най-добрите цени, налични в Нидерландия за сорта, на който сте се спрели, при условие, че има потвърдена наличност от нашите бизнес партньори.'
                    icon={IoInformationCircleOutline}
                    iconSize={32}
                />
            </Grid>
        </Grid>
    );
}

export default HomeCards;
