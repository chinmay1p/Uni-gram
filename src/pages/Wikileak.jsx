import React, { useState } from 'react';
import { ChevronUp, ChevronDown, Heart, Share2, MessageCircle, UserCheck } from 'lucide-react';

function Wikileak() {
    const reels = [
        {
            id: 1,
            title: "Introduction to OS",
            url: 'abc.com',
            duration: 75,
            creator: 'Kruti Lavingia',
            profile_pic: '/api/placeholder/40/40',
            thumbnail: 'abc2.jpg',
            likes: 1234,
            comments: 89
        },
        {
            id: 2,
            title: "reel2",
            url: 'abc.com',
            duration: 55,
            creator: 'Vishal Parikh',
            profile_pic: '/api/placeholder/40/40',
            thumbnail: 'abc2.jpg',
            likes: 12,
            comments: 100
        }
    ];

    const [currentReelIndex, setCurrentReelIndex] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const navigateReel = (direction) => {
        if (direction === 'up') {
            setCurrentReelIndex(prev => 
                prev === 0 ? reels.length - 1 : prev - 1
            );
        } else {
            setCurrentReelIndex(prev => 
                prev === reels.length - 1 ? 0 : prev + 1
            );
        }
        setIsLiked(false); // Reset like state for new reel
    };

    const currentReel = reels[currentReelIndex];

    return (
        <div className='min-h-screen bg-gray-300 flex items-center justify-center'>
            <div className='relative'>
                <div className='h-[580px] w-[350px] bg-black rounded-2xl shadow-2xl overflow-hidden'>
                    <div className='relative w-full h-full'>
                        <div className='w-full h-full flex items-center justify-center text-gray-600'>
                            <span className='text-sm'>{currentReel.title}</span>
                        </div>

                        {/* Social interaction buttons - vertical stack on right */}
                        <div className='absolute right-4 bottom-23 flex flex-col gap-6'>
                            <button 
                                onClick={() => setIsLiked(!isLiked)}
                                className='group flex flex-col items-center'
                            >
                                <div className='w-10 h-10 bg-gray-800/60 rounded-full flex items-center justify-center hover:bg-gray-700/60 transition-colors'>
                                    <Heart 
                                        className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-white'}`}
                                    />
                                </div>
                                <span className='text-xs text-white mt-1'>{currentReel.likes}</span>
                            </button>

                            <button className='group flex flex-col items-center'>
                                <div className='w-10 h-10 bg-gray-800/60 rounded-full flex items-center justify-center hover:bg-gray-700/60 transition-colors'>
                                    <MessageCircle className='w-5 h-5 text-white' />
                                </div>
                                <span className='text-xs text-white mt-1'>{currentReel.comments}</span>
                            </button>

                            <button className='group flex flex-col items-center'>
                                <div className='w-10 h-10 bg-gray-800/60 rounded-full flex items-center justify-center hover:bg-gray-700/60 transition-colors'>
                                    <Share2 className='w-5 h-5 text-white' />
                                </div>
                            </button>
                        </div>

                        {/* Creator info bar at bottom */}
                        <div className='absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent'>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center space-x-3'>
                                    <img 
                                        src={currentReel.profile_pic}
                                        alt={currentReel.creator}
                                        className='w-10 h-10 rounded-full border-2 border-white'
                                    />
                                    <div>
                                        <h3 className='text-white font-medium'>{currentReel.creator}</h3>
                                    </div>
                                </div>
                                <button className='px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium flex items-center space-x-1 hover:bg-blue-700 transition-colors'>
                                    <UserCheck className='w-4 h-4' />
                                    <span>Follow</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation buttons container */}
            <div className='flex flex-col gap-8 ml-6'>
                <button 
                    onClick={() => navigateReel('up')}
                    className='w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors'
                    aria-label="Previous reel"
                >
                    <ChevronUp className='w-6 h-6 text-gray-700' />
                </button>
                
                <button 
                    onClick={() => navigateReel('down')}
                    className='w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors'
                    aria-label="Next reel"
                >
                    <ChevronDown className='w-6 h-6 text-gray-700' />
                </button>
            </div>
        </div>
    );
}

export default Wikileak;