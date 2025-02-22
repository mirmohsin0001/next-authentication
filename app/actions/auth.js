'use server'


export async function signup(formData) {
    // Validate form fields
    const name = formData.get('name');
    console.log('name', name);
    const email = formData.get('email');
    console.log('email', email);
    const password = formData.get('password');
    console.log('password', password);
}