import { FormControl, FormHelperText, FormLabel, Textarea, TextareaProps, useTheme } from '@mui/joy';
import { useState } from 'react';
import { Controller, Control } from 'react-hook-form';
import { ContactInfo } from '../../routes/Contact/ContactForm.section';

type Props = {
    label: string;
    name: keyof ContactInfo;
    control: Control<ContactInfo>;
    required?: boolean;
} & TextareaProps

const FormTextArea = ({ label, name, control, required = false, ...otherProps }: Props) => {

    const [isFocused, setIsFocused] = useState(false);
    const c = useTheme().palette;

    return (
        <FormControl sx={{ position: 'relative' }}>
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
                                backgroundColor: c.neutral[50],
                                color: c.neutral[500],
                                fontWeight: 400,
                                position: 'absolute',
                                top: (value || isFocused) ? -10 : 12,
                                marginLeft: 2,
                                padding: '0 8px',
                                zIndex: 2,
                                transition: '.2s top ease-in',
                            }}>{label}</FormLabel>
                        <Textarea
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
                            sx={{ borderRadius: 5, color: c.neutral[500], borderColor: 'neutral.300', fontSize: { xs: 'sm', md: 'md' } }}
                            {...otherProps}
                        />
                        {errors && <FormHelperText sx={{ color: c.danger[500] }}> {error && error.message}</FormHelperText>}
                    </>

                }
            />
        </FormControl>
    );
};


export default FormTextArea;