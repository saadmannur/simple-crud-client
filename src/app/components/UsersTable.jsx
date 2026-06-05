import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UsersTable = ({ users }) => {
    return (
        <Table variant="secondary">
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Action</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {
                            users.map(user => <Table.Row key={user._id}>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                                <Table.Cell>{user.role}</Table.Cell>
                                <Table.Cell className={'space-x-3'}>

                                    <Link href={`/users/${user._id}`}>
                                        <Button variant='outline' className={'text-white'}>Details</Button>
                                    </Link>

                                    <Link href={``}>
                                        <Button variant='primary' className={'text-white'}>Edit</Button>
                                    </Link>
                                    <Button variant='danger' className={'text-white'}>Delete</Button>

                                </Table.Cell>
                            </Table.Row>)
                        }
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default UsersTable;