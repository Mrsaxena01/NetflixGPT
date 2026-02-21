import React from 'react';

const MovieListShimmer = () => {
    return (
        <div className="w-full bg-black py-6 px-6">
            <div className="overflow-x-auto overflow-y-hidden  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
                <div className="flex gap-4 px-6">
                    {Array(20)
                        .fill(0)
                        .map((_, i) => (
                            <div key={i} className="flex-shrink-0 snap-start">
                                <div className="w-50 h-70 bg-gray-700 rounded-lg animate-pulse"></div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default MovieListShimmer;
