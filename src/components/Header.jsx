import React, { useEffect } from 'react';
import { LOGO_URL, photoURL } from '../utils/constant';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import toast from 'react-hot-toast';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    // 🔴 Sign out logic
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                dispatch(removeUser());
                navigate('/', { replace: true });
            })
            .catch((error) => {
                console.error(error);
            });
    };

    // 🔔 Confirmation Toast
    const handleSignOutConfirm = () => {
        toast(
            (t) => (
                <div className="flex flex-col gap-3">
                    <p className="text-sm font-medium">
                        Are you sure you want to sign out?
                    </p>

                    <div className="flex justify-end gap-2">
                        <button
                            className="px-3 py-1 text-sm bg-gray-300 rounded"
                            onClick={() => toast.dismiss(t.id)}
                        >
                            Cancel
                        </button>

                        <button
                            className="px-3 py-1 text-sm text-white bg-red-600 rounded"
                            onClick={() => {
                                toast.dismiss(t.id);
                                handleSignOut();
                            }}
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            ),
            { duration: Infinity }
        );
    };

    // 🔐 Firebase auth listener
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, photoURL } = user;
                dispatch(addUser({ uid : uid, displayName : displayName, photoURL : photoURL }));
                navigate('/browse', { replace: true });
            } else {
                dispatch(removeUser());
                navigate('/', { replace: true });
            }
        });

        return () => unsubscribe(); // ✅ cleanup
    }, []);

    return (
        <div className="fixed top-0 left-0 z-100 w-full bg-gradient-to-b from-[#000000] flex justify-between items-center px-[45px] backdrop-blur-sm">
            <img
                src="./logo.png"
                alt="LOGO"
                className="object-cover w-[300px] h-20 "
            />

            {user && (
                <div
                    onClick={handleSignOutConfirm}
                    className="flex items-center gap-2 px-4 py-2 text-white transition bg-red-800 rounded-lg cursor-pointer hover:bg-red-500"
                >
                    <img
                        src={photoURL}
                        alt="avtar"
                        className="w-6 rounded-full"
                    />
                    <p>Sign Out</p>
                </div>
            )}
        </div>
    );
};

export default Header;
