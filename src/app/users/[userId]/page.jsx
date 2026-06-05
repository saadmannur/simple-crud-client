import { getUserById } from '@/app/lib/data';
import React from 'react';

const UserDetailsPage = async ({params}) => {

    const {userId} = await params;
    
    const user = await getUserById(userId)
    console.log(user)

    return (
        <div>
            <h2>User Details Page</h2>
            <div className='border m-20 p-10 text-center'>
                <div>
                    <h2>Name: {user.name}</h2>
                    <p>Email: {user.email}</p>
                    <p>{user.role}</p>
                </div>

            </div>
        </div>
    );
};

export default UserDetailsPage;