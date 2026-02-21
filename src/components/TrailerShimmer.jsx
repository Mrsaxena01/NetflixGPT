import React from 'react';

const TrailerShimmer = () => {
    return (
        <div className="relative w-full h-screen bg-black overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse" />

            
            <div className="absolute inset-0 bg-black/40" />

            
            <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 gap-6">
                
                <div className="w-72 h-10 bg-gray-600 rounded-md animate-pulse" />

                
                <div className="space-y-3 max-w-xl">
                    <div className="w-full h-4 bg-gray-600 rounded animate-pulse" />
                    <div className="w-11/12 h-4 bg-gray-600 rounded animate-pulse" />
                    <div className="w-10/12 h-4 bg-gray-600 rounded animate-pulse" />
                </div>

                
                <div className="flex gap-4 mt-4">
                    <div className="w-32 h-10 bg-gray-500 rounded animate-pulse" />
                    <div className="w-40 h-10 bg-gray-500 rounded animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default TrailerShimmer;
