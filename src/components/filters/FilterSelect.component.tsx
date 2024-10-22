import { Select, Option } from "@mui/joy";

interface FilterSelectProps<T extends string> {
    label: string;
    value: T | 'All' | null;
    options: Array<T | 'All'>;
    onChange: (value: T | 'All' | null) => void;
}

export const FilterSelect = <T extends string>({ label, value, options, onChange }: FilterSelectProps<T>) => {
    return (
        <Select
            placeholder={label}
            value={value as string | null}
            onChange={(e, newValue) => onChange(newValue as T | 'All' | null)}
            sx={{ width: '100%' }}
        >
            {options.map(option => (
                <Option key={option} value={option}>
                    {option === 'All' ? `${label} - всички` : option}
                </Option>
            ))}
        </Select>
    );
};
