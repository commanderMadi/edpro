import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import { useAuthContext } from '../hooks/useAuthContext';

function Register() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, isPending, register } = useRegister();
    const { user } = useAuthContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        register(fullName, email, password);
    };

    const checkPassword = (e) => {
        e.preventDefault();
        e.target.value == password
            ? e.target.setCustomValidity('')
            : e.target.setCustomValidity('Password do not match');
    };

    if (user) {
        return <Navigate to='/my-courses/enrolled' replace />;
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-xl text-accent font-medium my-12'>
                Welcome to EdPro. Let the learning begins!
            </h2>
            <form onSubmit={handleSubmit} className='bg-accent p-6 pt-12'>
                <label className='labl-txt'>
                    <span className='text-white'>Full Name</span>
                    <input
                        required
                        type='text'
                        onChange={(e) => setFullName(e.target.value)}
                        value={fullName}
                        className='txt-inpt'
                    />
                </label>
                <label className='labl-txt'>
                    <span className='text-white'>Email</span>
                    <input
                        required
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        className='txt-inpt'
                    />
                </label>
                <label className='labl-txt'>
                    <span className='text-white'>Password</span>
                    <input
                        required
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        className='txt-inpt'
                    />
                </label>
                <label className='labl-txt'>
                    <span className='text-white'>Confirm Password</span>
                    <input
                        required
                        type='password'
                        onChange={checkPassword}
                        className='txt-inpt'
                    />
                </label>
                <div className='flex justify-end mt-8'>
                    {!isPending && (
                        <button className='btn-primary !text-white hover:text-'>
                            Sign up
                        </button>
                    )}
                    {isPending && (
                        <button className='btn-primary' disabled>
                            Loading
                        </button>
                    )}
                </div>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
}

export default Register;
