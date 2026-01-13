import React from 'react'
import { LOGO_URL } from '../utils/constant'


const Header = () => {
  return (
      <div
          className="w-full bg-gradient-to-b from-black flex justify-between items-center px-45"
      >
          <div>
              <img src={LOGO_URL} alt="LOGO" className="w-46" />
          </div>
          <button className="px-4 py-1.5 rounded bg-red-600 cursor-pointer text-white font-bold">
              Sign In
          </button>
      </div>
  );
}

export default Header