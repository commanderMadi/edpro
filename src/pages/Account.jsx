/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase/config';
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { useAuthContext } from '../hooks/useAuthContext';
import { useDocument } from '../hooks/useDocument';
import { useCollection } from '../hooks/useCollection';
import {
    Container,
    Button,
    ListItem,
    Box,
    TextField,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import SubmitIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

const Account = () => {
    const [name, setName] = useState(null);
    const { user } = useAuthContext();
    const { document: users, error } = useDocument('users', user.uid);
    const [fullName, setFullName] = useState(null);
    const [email, setEmail] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (users) {
                    console.log(user.email);
                    setFullName(users.fullName);
                    setEmail(user.email);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchUser();
    });

    return (
        <div>
            {!users && (
                <div>
                    <h1>Loading.... Please wait!</h1>
                </div>
            )}

            {users && (
                <div>
                    <Container
                        className=' min-h-screen !flex !flex-wrap'
                        maxWidth='lg'
                    >
                        <Box
                            className='min-h-screen !bg-indigo-900 !pt-14 '
                            sx={{
                                width: '100%',
                                height: '100%',
                                maxWidth: 200,
                                bgcolor: 'background.paper',
                            }}
                        >
                            <ListItemButton
                                className='!bg-indigo-900 !text-white'
                                component='a'
                                href='#account'
                            >
                                <div className='text-center w-full text-md hover:text-red-300'>
                                    Account
                                </div>
                            </ListItemButton>
                            <ListItemButton
                                className='!bg-indigo-900  !text-white'
                                component='a'
                                href='#profile'
                            >
                                <div className='text-center w-full text-md hover:text-red-300'>
                                    Profile
                                </div>
                            </ListItemButton>
                            <ListItemButton
                                className='!bg-indigo-900 !text-white'
                                component='a'
                                href='#contact'
                            >
                                <div className='text-center w-full text-md hover:text-red-300'>
                                    Contact
                                </div>
                            </ListItemButton>
                        </Box>
                        <Box className='!flex w-8/12 flex-col'>
                            <Box className='ml-4 mt-10 !flex flex-col'>
                                <TextField
                                    className='!mx-4 !mt-4 !w-full'
                                    label='Name'
                                    value={fullName}
                                    variant='standard'
                                />
                                <TextField
                                    className='!mx-4 !mt-4 !w-full'
                                    label='E-mail'
                                    value={email}
                                    variant='standard'
                                />
                                <TextField
                                    className='!mx-4 !mt-4 !w-full'
                                    label='Phone Number'
                                    variant='standard'
                                />
                                <TextField
                                    className='!mx-4 !mt-4 !w-full'
                                    label='Facebook'
                                    variant='standard'
                                />
                                <TextField
                                    className='!mx-4 !mt-4 !w-full'
                                    label='X (Formerly Twitter)'
                                    variant='standard'
                                />
                                <TextField
                                    className='!mx-4 !mt-4 !w-full'
                                    label='Skype'
                                    variant='standard'
                                />
                            </Box>
                            <Box className='w-full '>
                                <Stack
                                    className='w-full !flex justify-end'
                                    direction='row'
                                    spacing={2}
                                >
                                    <Button
                                        className='!-mr-4 !mt-12 !bg-indigo-900'
                                        variant='contained'
                                        endIcon={<SubmitIcon />}
                                    >
                                        Update
                                    </Button>
                                </Stack>
                            </Box>
                        </Box>
                    </Container>
                </div>
            )}
        </div>
    );
};
export default Account;
