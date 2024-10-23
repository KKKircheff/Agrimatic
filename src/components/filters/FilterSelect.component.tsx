import { Select, Option } from "@mui/joy";
import { FilterArrays } from "../../routes/Varieties/VarietiesCards.sections";

type FilterSelectProps = {
    label: string;
    value: FilterArrays;
    options: Array<FilterArrays>;
    onChange: (selected: FilterArrays) => void;
}

export const FilterSelect = ({ label, value, options, onChange }: FilterSelectProps) => {
    return (
        <Select
            color="neutral"
            placeholder={label}
            value={value.value}
            onChange={(_, newValue) => {
                const selectedOption = options.find(option => option.value === newValue);
                if (selectedOption) {
                    onChange(selectedOption);
                }
            }}
        >
            {options.map(option => (
                <Option key={option.value} value={option.value}>
                    {option.description}
                </Option>
            ))}
        </Select>
    );
};
