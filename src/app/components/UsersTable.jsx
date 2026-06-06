"use client"
import { AlertDialog, Button, Table } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const UsersTable = ({ users, userDeleteAction }) => {

    const handleDelete = async (userId) => {
        await userDeleteAction(userId)
    }

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

                                    <AlertDialog>
                                        <Button variant="danger">Delete</Button>
                                        <AlertDialog.Backdrop>
                                            <AlertDialog.Container>
                                                <AlertDialog.Dialog className="sm:max-w-[400px] bg-gray-900 text-white">
                                                    <AlertDialog.CloseTrigger />
                                                    <AlertDialog.Header>
                                                        <AlertDialog.Icon status="danger" />
                                                        <AlertDialog.Heading>Delete user permanently?</AlertDialog.Heading>
                                                    </AlertDialog.Header>
                                                    <AlertDialog.Body>
                                                        <p>
                                                            This will permanently delete <strong>{user.name}</strong> and all of its
                                                            data. This action cannot be undone.
                                                        </p>
                                                    </AlertDialog.Body>
                                                    <AlertDialog.Footer>
                                                        <Button slot="close" variant="primary">
                                                            Cancel
                                                        </Button>
                                                        <Button slot="close" variant="danger"
                                                            onClick={() => handleDelete(user._id)}>
                                                            conform Delete
                                                        </Button>
                                                    </AlertDialog.Footer>
                                                </AlertDialog.Dialog>
                                            </AlertDialog.Container>
                                        </AlertDialog.Backdrop>
                                    </AlertDialog>

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