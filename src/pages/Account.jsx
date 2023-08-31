/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { db } from '../firebase/config';
import { collection } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import { useAuthContext } from '../hooks/useAuthContext';
import { useDocument } from '../hooks/useDocument';
import { useCollection } from '../hooks/useCollection';

const Account = () => {
    const [name, setName] = useState(null);
    const { user } = useAuthContext();
    const { document: users, error } = useDocument('users', user.uid);
    const [fullName, setFullName] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                if (users) {
                    setFullName(users.fullName);
                }
            } catch (e) {
                console.log(e);
            }
        };
        fetchUser();
    }, [users]);

    return (
        <>
            {!users && (
                <div>
                    <h1>Loading.. Please wait!</h1>
                </div>
            )}

            {users && (
                <div>
                    <h1>Hello there, {fullName}</h1>
                </div>
            )}
        </>
    );
};
export default Account;
