'use server'

import { SignupFormSchema } from '@/app/lib/definitions'
import { redirect } from 'next/navigation';

export async function signup(formData) {
    
    // Validate form fields
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })


    // If any form fields are invalid, return early
    if (!validatedFields.success) {
        console.log('errors', validatedFields.error.flatten().fieldErrors)
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }


    console.log(validatedFields)

    // If the form is valid, redirect to the confirmation page
    redirect('/confirmation')

    // Call the provider or db to create a user...
}