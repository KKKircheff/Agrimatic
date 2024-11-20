import { Stack } from "@mui/joy";
import { VarietyCard } from "../../components/cards/VarietyCard.component";
import { varieties, Variety } from "../../lib/varaties";
import { useState } from "react";
import { FilterSelect } from "../../components/filters/FilterSelect.component";

export type FilterArrays = {
    value: 'All' | Variety['maturity'] | Variety['skin'] | Variety['cookingTypeLetter']
    description: string,
}
// Change states to objects
const cookingTypeLetterOptions: FilterArrays[] = [
    { value: 'All', description: 'Твърдост при готвене от A до C - всички' },
    { value: 'A', description: 'Tвърди - A' },
    { value: 'AB', description: 'Леко твърди - AB' },
    { value: 'B', description: 'Средна твърдост - B' },
    { value: 'BC', description: 'Ронливи - BC' },
    { value: 'C', description: 'Много Ронливи - C' }
];

const skinOptions: FilterArrays[] = [
    { value: 'All', description: 'Цвят на картофа - всички' },
    { value: 'Жълт', description: 'Жълта' },
    { value: 'Светло жълт', description: 'Светло жълта' },
    { value: 'Червен', description: 'Червена' },
    { value: 'Кафяв', description: 'Кафява' }
];

const maturityOptions: FilterArrays[] = [
    { value: 'All', description: 'Сезон на садене - всички' },
    { value: 'Ранен', description: 'Ранен' },
    { value: 'Средно ранен', description: 'Средно ранен' },
    { value: 'Средни', description: 'Средни' },
    { value: 'Средно късен', description: 'Средно късен' },
    { value: 'Късен', description: 'Късен' }
];

export const VarietiesCards = () => {
    const [selectedCookingTypeLetter, setSelectedCookingTypeLetter] = useState<FilterArrays>({ value: 'All', description: 'Твърдост при готвене от A до C - всички' });
    const [selectedSkin, setSelectedSkin] = useState<FilterArrays>({ value: 'All', description: 'Цвят на картофа - всички' });
    const [selectedMaturity, setSelectedMaturity] = useState<FilterArrays>({ value: 'All', description: 'Сезон на садене - всички' });

    const filteredVarieties = varieties.filter(variety => {
        return (
            (selectedCookingTypeLetter.value === "All" || variety.cookingTypeLetter === selectedCookingTypeLetter.value) &&
            (selectedSkin.value === "All" || variety.skin === selectedSkin.value) &&
            (selectedMaturity.value === "All" || variety.maturity === selectedMaturity.value)
        );
    });

    return (
        <Stack spacing={4}>
            <FilterSelect
                label="Filter by Cooking Type Letter"
                value={selectedCookingTypeLetter}
                options={cookingTypeLetterOptions}
                onChange={setSelectedCookingTypeLetter}
            />
            <FilterSelect
                label="Filter by Skin"
                value={selectedSkin}
                options={skinOptions}
                onChange={setSelectedSkin}
            />
            <FilterSelect
                label="Filter by Maturity"
                value={selectedMaturity}
                options={maturityOptions}
                onChange={setSelectedMaturity}
            />

            {filteredVarieties.map((variety, index) => (
                <VarietyCard key={variety.name + index} variety={variety} />
            ))}
        </Stack>
    );
};
