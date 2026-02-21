import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import { BG_IMAGE_URL, photoURL } from '../utils/constant';
import validate from '../utils/Validate';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { auth } from '../utils/firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';
import { addUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [isSigning, setIsSigning] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const [type, setType] = useState('password');
    const [validationError, setValidationError] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const userName = useRef(null);

    const handleClick = () => {
        const msg = validate(email.current.value, password.current.value,);
        setValidationError(msg);
        if (msg) return;

        if (!isSigning) {
            setIsLoading(true);
            if(!userName.current.value){
                setValidationError("All fields are required");
                setIsLoading(false);
                return;
            }
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: userName.current.value,
                        photoURL: photoURL,
                    })
                        .then(() => {
                            const { uid, displayName, photoURL } = user;
                            dispatch(addUser({ uid : uid, displayName : displayName, photoURL : photoURL }));
                            navigate('/browse');
                        })
                        .catch((error) => {
                            // An error occurred
                            // ...
                        });
                    navigate('/browse', { replace: true });
                    setIsLoading(false);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidationError(errorMessage);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(true);
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate('/browse', { replace: true });
                    setIsLoading(false);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidationError(errorMessage);
                    setIsLoading(false);
                });
        }
    };

    

    return (
        <div
            style={{
                backgroundImage: `url(${BG_IMAGE_URL}) `,
            }}
            className="relative min-h-screen bg-center bg-cover"
        >
            <Header />

            <div className="absolute min-w-[380px] p-12 bg-[#000000da] text-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-br-4xl rounded-tl-4xl">
                <form
                    className="flex flex-col gap-6"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <h1 className="text-2xl font-bold">
                        {isSigning ? 'Sign In' : 'Sign Up'}
                    </h1>

                    {!isSigning && (
                        <input
                            ref={userName}
                            type="text"
                            placeholder="Name"
                            className="px-4 py-2 bg-[#000000db] outline-none border rounded border-gray-500"
                        />
                    )}

                    <input
                        ref={email}
                        type="text"
                        placeholder="Email"
                        className="px-4 py-2 bg-[#000000db] outline-none border rounded border-gray-500"
                        autoComplete="new-password"
                    />

                    <div className="relative">
                        <input
                            ref={password}
                            type={type}
                            placeholder="Password"
                            className="w-full px-4 py-2 bg-[#000000db] outline-none border rounded border-gray-500"
                        />
                        <i
                            onClick={() =>
                                type == 'password'
                                    ? setType('text')
                                    : setType('password')
                            }
                            className={`${
                                type == 'password'
                                    ? 'ri-eye-off-line'
                                    : 'ri-eye-fill'
                            } absolute right-0 top-[50%] -translate-[50%] cursor-pointer  `}
                        ></i>
                    </div>

                    {validationError && (
                        <p className="-my-3 text-[10px] text-red-600 text-sm">
                            {validationError}
                        </p>
                    )}

                    <button
                        onClick={handleClick}
                        disabled={isLoading}
                        className={`px-4 py-2 cursor-pointer active:scale-95 rounded bg-red-600 text-white font-semibold ${
                            isLoading
                                ? 'opacity-60 cursor-not-allowed'
                                : 'hover:bg-red-700'
                        }`}
                    >
                        {isLoading
                            ? isSigning
                                ? 'Signing in...'
                                : 'Signing up...'
                            : isSigning
                            ? 'Sign In'
                            : 'Sign Up'}
                    </button>
                </form>

                <p className="mt-4 text-gray-400">
                    {isSigning ? 'New to NetflixGPT?' : 'Already Registered?'}{' '}
                    <span
                        onClick={() => setIsSigning(!isSigning)}
                        className="font-semibold text-white cursor-pointer"
                    >
                        {isSigning ? 'Sign Up' : 'Sign In'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Body;
