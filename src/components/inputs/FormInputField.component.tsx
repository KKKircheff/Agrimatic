import { FormControl, FormHelperText, FormLabel, Input, useTheme } from '@mui/joy';
import { InputProps } from '@mui/joy';
import { useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import { ContactInfo, validateField } from '../../routes/Contact/ContactForm.section';

type Props = {
    label: string;
    name: keyof ContactInfo;
    control: Control<ContactInfo>;
    required?: boolean;
} & InputProps

const FormInputField = ({ label, name, control, required = false, ...otherProps }: Props) => {
    const [isFocused, setIsFocused] = useState(false);
    const c = useTheme().palette;

    return (
        <FormControl sx={{ position: 'relative', marginBottom: 3 }}>
            <Controller
                name={name}
                control={control}
                rules={
                    {
                        required: required ? "Required field" : undefined
                    }}
                render={({
                    field: { onChange, value },
                    fieldState: { error },
                    formState: { errors },
                }) => <>
                        <FormLabel
                            sx={{
                                position: 'absolute',
                                top: (value || isFocused) ? -12 : 12,
                                color: c.neutral[500],
                                fontWeight: 400,
                                fontSize: { xs: 'md', md: 'sm' },
                                backgroundColor: c.neutral[50],
                                marginLeft: 2,
                                padding: '0 8px',
                                zIndex: 2,
                                transition: '.2s top ease-in'
                            }}>{label}</FormLabel>
                        <Input
                            size='lg'
                            color='primary'
                            value={value ? value as string : ''}
                            onFocus={() => setIsFocused(true)}
                            onChange={(event) => {
                                onChange(event.target.value)
                            }}
                            onBlur={(event) => {
                                setIsFocused(false)
                                onChange(event.target.value)
                            }}
                            sx={{
                                borderRadius: 5,
                                borderWidth: 1.3,
                                fontWeight: 400,
                                fontSize: { xs: 'lg', md: 'md' },
                                color: c.neutral[500],
                                borderColor: c.neutral[300]
                            }}
                            {...otherProps}
                        />
                        {validateField(name, value ? value.toString() : '') && <FormHelperText sx={{ color: c.danger[500] }}>Incorrect value</FormHelperText>}
                        {errors && <FormHelperText sx={{ color: c.danger[500] }}> {error && error.message}</FormHelperText>}
                    </>

                }
            />
        </FormControl>
    );
};

export default FormInputField;