import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

//POST method
export const addNewUser = async (formData) => {
    'use server';

    const newUser = Object.fromEntries(formData.entries());

    const res = await fetch('http://localhost:5002/users', {
        method: "POST",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newUser)
    });
    const data = await res.json();

    if (data.insertedId){
        revalidatePath('/users')
    }

    return data;
};


//UPDATE/PATCH method
export const updateUser = async (userId, formData) => {
    'use server'

    const updatedUser = Object.fromEntries(formData.entries())

    const res = await fetch(`http://localhost:5002/users/${userId}`,{
        method: "PATCH",
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    const data = await res.json()
   
    if (data.modifiedCount > 0){
        revalidatePath('/users')
        redirect('/users')
    }
    
    return data
};


//DELETE method
export const deleteUser = async(userId) => {
    'use server';

    const res = await fetch(`http://localhost:5002/users/${userId}`, {
        method: 'DELETE'
    })
    const data = await res.json();

    if(data.deletedCount > 0){
        revalidatePath('/users')
    }

    return data;
}

