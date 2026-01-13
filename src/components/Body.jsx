import React, { useRef, useState } from 'react';
import Header from './Header';
import { BG_IMAGE_URL } from '../utils/constant';
import validate from '../utils/Validate';

const Body = () => {
  
  const [isSigning, setIsSigning] = useState(true)
  const [validationError, setValidationError] = useState(null)
  const email = useRef(null);
  const password = useRef(null)

  const handleClick = () =>{
    const validationMsg = validate(email.current.value, password.current.value);
    setValidationError(validationMsg)
  }


    return (
        <div
            style={{
                backgroundImage: `url(${BG_IMAGE_URL})`,
            }}
            className="min-h-screen bg-cover bg-center relative"
        >
            <Header />

            <div className="absolute min-w-3/12 p-12 bg-[#000000c8] text-white left-[50%] top-[50%] -translate-[50%] rounded-3xl">
                <form
                    className="flex flex-col gap-6"
                    onSubmit={(e) => e.preventDefault()}
                    autoComplete="off"
                >
                    <h1 className="text-2xl font-bold">
                        {isSigning ? 'Sign In' : 'Sign Up'}
                    </h1>
                    {!isSigning && (
                        <input
                            className="px-4 py-2 outline-none border rounded border-gray-500 w-full"
                            type="text"
                            placeholder="Name"
                            autoComplete="off"
                        />
                    )}
                    <input
                        className="px-4 py-2 outline-none border rounded border-gray-500 w-full"
                        type="text"
                        placeholder="Email"
                        autoComplete="off"
                        ref={email}
                    />

                    <input
                        className="px-4 py-2 outline-none border rounded border-gray-500 w-full "
                        type="password"
                        placeholder="Password"
                        autoComplete="off"
                        ref={password}
                    />

                    {validationError && (
                        <p className="-my-4 text-red-700">{validationError}</p>
                    )}

                    <button
                        onClick={handleClick}
                        className="px-4 py-2 rounded bg-red-600 cursor-pointer text-white font-semibold active:scale-98"
                    >
                        {isSigning ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>
                <p className="text-gray-400 mt-4 font-normal">
                    {isSigning ? 'New to NetflixGPT?' : 'Already Registered?'}{' '}
                    <button
                        onClick={() => setIsSigning(!isSigning)}
                        className="text-white font-semibold cursor-pointer"
                    >
                        {isSigning ? 'Sign Up' : 'Sign In'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Body;
