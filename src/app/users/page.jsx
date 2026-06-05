import React from 'react';
import { getUsers } from '../lib/data';
import UsersTable from '../components/UsersTable';

const UsersPage = async () => {

    const users = await getUsers();
    console.log(users)

    return (
        <div>
            <h2>Users Management</h2>
            <div className=' m-10'>
                <UsersTable users={users}></UsersTable>
            </div>


            <div className='mt-20 mx-10'>
                <h2 className='my-10 text-3xl text-center font-bold'>Users: {users.length}</h2>
                <div className='border mx-auto text-center m-10 grid grid-cols-3'>
                    {
                        users.map(user => <div className='border m-5 p-5' key={user._id}>
                            <h2>Name: {user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>{user.role}</p>
                        </div>)
                    }

                </div>
            </div>

        </div>
    );
};

export default UsersPage;