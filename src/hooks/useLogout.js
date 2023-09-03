import { useState } from 'react';
import { auth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';
import { signOut } from 'firebase/auth';

export const useLogout = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(null);

        try {
            //logout the user
            await signOut(auth);

            //dispatch the action
            dispatch({ type: 'LOGOUT' });
            setIsPending(false);
            window.location = '/';
        } catch (err) {
            console.log(err);
            setError(err.message);
            setIsPending(false);
        }
    };

    return { error, isPending, logout };
};
