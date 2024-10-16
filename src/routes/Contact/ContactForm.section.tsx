import { Grid, Stack, Typography } from '@mui/joy';
import FormInputField from '../../components/inputs/FormInputField.component';
import FormTextArea from '../../components/inputs/FormTextArea.component';
import WhiteButton from '../../components/buttons/WhiteButton.component';
import { useState } from "react";
import { useForm } from 'react-hook-form';

export type ContactInfo = {
    name: string
    company?: string
    phonenumber: string
    email: string
    message: string
    time_stamp?: number
    created?: string
}

export interface FieldsRegex {
    [key: string]: RegExp;
}

export const fieldsRegex: FieldsRegex = {
    name: /^[A-Za-z\u0400-\u04FF\s]{0,35}$/,
    company: /^[A-Za-z\u0400-\u04FF\s\d-]{0,35}$/,
    email: /^[A-Za-z\u0400-\u04FF0-9._%+-@]{0,40}$/,
    phonenumber: /^[0-9+\-()\s]{0,20}$/,
    message: /^[\s\S]{0,400}$/,
    fullPhoneNumber: /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
    fullEmailAddress: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

export const validateField = (key: keyof FieldsRegex, value: string) => {
    const regex: FieldsRegex = {
        name: /^[A-Za-z\u0400-\u04FF\s]{0,35}$/,
        company: /^[A-Za-z\u0400-\u04FF\s\d-]{0,35}$/,
        email: /^[A-Za-z\u0400-\u04FF0-9._%+-@]{0,40}$/,
        phonenumber: /^[0-9+\-()\s]{0,20}$/,
        message: /^[\s\S]{0,400}$/,
        fullPhoneNumber: /^\+?\d{1,3}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
        fullEmailAddress: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    }
    return !regex[key].test(value);
}

const ContactForm = () => {

    const [isFormValid, setIsFormValid] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const { control, reset, handleSubmit } = useForm<ContactInfo>();

    const clearFormFields = () => {
        reset()
    }

    const contactTemplate = (formValues: ContactInfo, created: Date, time_stamp: number) => {
        return ({
            to: ["kircheff@protonmail.com", "georgiev.gancho@gmail.com"],
            message: {
                subject: "Запитване Agrimatic.bg",
                text: "Some text that maybe is needed",
                html:
                    `<code>
                  <body>
                  <p>CONTACT REQUEST AGRIMATIC</p>
                  <p>Created: ${created}</p>
                  <p>Name: ${formValues.name}</p>
                  <p>Company: ${formValues.company} </p>
                  <p>Phone number: ${formValues.phonenumber}</p>
                  <p>email: ${formValues.email}</p>
                  <p>message: ${formValues.message}</p>
                  </body>
                  </code>`,
            },
            name: formValues.name,
            company: formValues.company,
            email: formValues.email,
            phone: formValues.phonenumber,
            userMesssage: formValues.message,
            created,
            time_stamp
        })
    }

    const submit = async (data: ContactInfo) => {
        setIsLoading(true);
        try {
            setIsFormValid(true);
            const { name, email, message, phonenumber } = data;

            if (!name || !email || !phonenumber || !message) {
                setIsFormValid(false);
                setErrorMessage("Please fill in all required fields");
                return;
            }
            if (validateField("fullPhoneNumber", phonenumber)) {
                setIsFormValid(false);
                setErrorMessage("Please fill in correct phone numner");
                return;
            }
            if (validateField("fullEmailAddress", email)) {
                setIsFormValid(false);
                setErrorMessage("Please fill in correct email address");
                return;
            }
            const { addDoc, collection, onSnapshot } = await import('firebase/firestore');
            const { db } = await import("../../utils/firebase-utils");
            const created = new Date();
            const time_stamp = created.getTime();
            const emailRef = collection(db, 'mail');
            await addDoc(emailRef, contactTemplate(data, created, time_stamp)).then(onSnapshot(emailRef, snapshot => {
                return snapshot.docs.map(email => email.data());
            }))
            setIsLoading(false);
            alert("Thank you for the contact. We will contact you as soon as possible.");
            clearFormFields();
        } catch (error) {
            setIsLoading(false);
            alert(`Error: ${error}`);
        }
    }

    return (
        <Stack spacing={5} py={3}>
            <form onSubmit={handleSubmit(submit)} noValidate>
                <Grid container spacing={4} mb={3}>
                    <Grid xs={12} md={6}>
                        <FormInputField
                            label='Имена'
                            type='text'
                            autoComplete='off'
                            required
                            name='name'
                            control={control}
                        />

                        <FormInputField
                            label='Компания (незадължително)'
                            type='text'
                            autoComplete='off'
                            name='company'
                            control={control}

                        />

                        <FormInputField
                            label='Телефон'
                            type='text'
                            name='phonenumber'
                            autoComplete='off'
                            required
                            control={control}
                        />

                        <FormInputField
                            label='Емейл'
                            type='email'
                            name='email'
                            autoComplete='off'
                            required
                            control={control}
                        />
                    </Grid>

                    <Grid xs={12} md={6}>
                        <FormTextArea
                            label='Запитване'
                            name='message'
                            minRows={5}
                            maxRows={10}
                            required
                            control={control}
                        />
                    </Grid>
                </Grid>
                {!isFormValid && <Typography textColor='danger.500' pb={3} mt={-5}>Невалидна форма {errorMessage}</Typography>}
                <WhiteButton
                    type="submit"
                    disabled={isLoading}
                    loading={isLoading}
                    sx={{ maxWidth: 200 }}
                >Изпрати</WhiteButton>
            </form>
        </Stack >
    )
}

export default ContactForm;
