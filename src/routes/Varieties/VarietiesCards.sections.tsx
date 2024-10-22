import { Stack } from "@mui/joy";
import { VarietyCard } from "../../components/cards/VarietyCard.component";
import { varieties, Variety } from "../../routes/Varieties/varaties";
import { useState } from "react";
import { FilterSelect } from "../../components/filters/FilterSelect.component";

const cookingTypeLetters: Array<Variety['cookingTypeLetter'] | 'All'> = ['All', 'A', 'AB', 'B', 'BC', 'C'];
const skinColors: Array<Variety['skin'] | 'All'> = ['All', 'Жълт', 'Светло жълт', 'Червен', 'Кафяв'];
const maturities: Array<Variety['maturity'] | 'All'> = ['All', 'Ранен', 'Средно ранен', 'Средни', 'Средно късен', 'Късен'];

export const VarietiesCards = () => {
    const [selectedCookingTypeLetter, setSelectedCookingTypeLetter] = useState<Variety['cookingTypeLetter'] | 'All' | null>('All');
    const [selectedSkin, setSelectedSkin] = useState<Variety['skin'] | 'All' | null>('All');
    const [selectedMaturity, setSelectedMaturity] = useState<Variety['maturity'] | 'All' | null>('All');

    const filteredVarieties = varieties.filter(variety => {
        return (
            (selectedCookingTypeLetter === "All" || variety.cookingTypeLetter === selectedCookingTypeLetter) &&
            (selectedSkin === "All" || variety.skin === selectedSkin) &&
            (selectedMaturity === "All" || variety.maturity === selectedMaturity)
        );
    });

    return (
        <Stack spacing={4}>
            <Stack direction={{ xs: 'column', md: 'row' }} gap={4} pb={{ xs: 1, md: 1 }}>
                <FilterSelect
                    label="Твърдост при готвене от A до C"
                    value={selectedCookingTypeLetter}
                    options={cookingTypeLetters}
                    onChange={setSelectedCookingTypeLetter}
                />

                <FilterSelect
                    label="Цвят на картофа"
                    value={selectedSkin}
                    options={skinColors}
                    onChange={setSelectedSkin}
                />

                <FilterSelect
                    label="Сезон на садене"
                    value={selectedMaturity}
                    options={maturities}
                    onChange={setSelectedMaturity}
                />
            </Stack>

            {filteredVarieties.map((variety, index) => (
                <VarietyCard key={variety.name + index} variety={variety} />
            ))}
        </Stack>
    );
};