'use server'

import { SignupFormSchema } from '@/app/lib/definitions'
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt'
import User from '../models/user';

export async function signup(state, formData) {


    // 1. Validate form fields
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

    // 2. Prepare data for insertion into database
    const { name, email, password } = validatedFields.data
    // Hash the user's password before storing it
    const hashedPassword = await bcrypt.hash(password, 10)

    await User.create({
        name,
        email,
        password: hashedPassword,
    }).then((user) => {
        console.log('user', user)
    }).catch((error) => {
        console.log('error', error)
    })

    // 3. Redirect to the confirmation page
    redirect('/confirmation')

    // Call the provider or db to create a user...
}