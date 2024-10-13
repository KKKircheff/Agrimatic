import { Grid, Stack, StackProps } from '@mui/joy';
import SideSubtitleText from '../../components/cards/ClassCard.component';
import SideTitleText from '../../components/content-sections/SideTitleText.component';

interface Props extends StackProps { }
const classes = [
    {
        title: 'Клас Pre-basic (PB)',
        textContent:
            'Най-високият клас картофен разсад. Произведен в лабораторни условия, където са използвани техники за тъканно култивиране за получаване на абсолютно здрави и чисти растения. Предназначен за създаване на разсади от по-нисък клас',
    },
    {
        title: 'Клас S (Super Elite)',
        textContent:
            'Това е следващото поколение след Pre-basic. Все още се счита за изключително качествен разсад с минимално количество болести и е много ценен',
    },
    {
        title: 'Клас SE (Elite)',
        textContent:
            'Малко по-нисък клас от S, но все още изключително висококачествен. Картофите от този клас се използват за комерсиални цели, както и за по-нататъшно размножаване на разсад',
    },
    {
        title: 'Клас A (Certified Class A)',
        textContent:
            'Сертифициран разсад, подходящ за комерсиално производство. Малко по-нисък клас от елитния разсад, но все още осигурява висок добив и здравина',
    },
    {
        title: 'Клас B (Certified Class B)',
        textContent:
            'Този клас е на границата между висококачествен и стандартен разсад. Възможно е да има малко по-висока степен на заболявания, но е достатъчно надежден за използване при по-малко взискателни условия',
    },
    {
        title: 'Клас C (Standard seed)',
        textContent:
            'Това е най-ниският клас разсад, който все още е годен за търговски цели, но е с по-ниски стандарти в сравнение с другите категории',
    },
]

export const HomeClassInfo = ({ ...otherProps }: Props) => {
    return (
        <Stack direction="column" gap={10} alignItems='stretch'>
            <SideTitleText title="Класове картофи за разсад" textContent="Етикирането и сертифицирането гарантират, че картофите за разсад от Нидерландия отговарят на най-високите стандарти за качество и безопасност, както на национално, така и на европейско ниво " />
            <Grid
                container
                spacing={{ xs: 4, md: 4 }}
                alignItems="stretch"
                {...otherProps}
            >
                {classes.map(({ title, textContent }, index) => (
                    <Grid key={index} xs={12} md={4}>
                        <SideSubtitleText title={title} textContent={textContent} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
};
