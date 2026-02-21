import React from 'react';

const TrailerInfo = ({ title, overview }) => {
    return (
        <div className="absolute top-0 left-0 z-10 flex items-center w-full h-screen bg-black/20">
            <div className="w-full px-4 text-white lg:ml-20 lg:max-w-5/12">
                <h1 className="mb-4 text-4xl font-bold">{title}</h1>
                <p className="mb-6 text-[12px] font-normal">
                    {overview}
                </p>

                <div className="flex gap-4">
                    <button className="px-6 py-2 font-semibold text-black bg-white rounded cursor-pointer">
                        ▶ Play
                    </button>
                    <button className="px-6 py-2 font-semibold text-white rounded cursor-pointer bg-gray-500/70">
                        ℹ More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrailerInfo;
