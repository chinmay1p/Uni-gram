import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle, Heart, Bookmark, Share2 } from 'lucide-react';

function Home() {
  const [activeImageIndexes, setActiveImageIndexes] = useState({});
  const [interactionStates, setInteractionStates] = useState({});

  const stories = [
    { id: 1, name: "P1", image: "https://placehold.co/10x10" },
    { id: 2, name: "P2", image: "https://placehold.co/10x10" },
    { id: 3, name: "P3", image: "https://placehold.co/10x10" },
    { id: 4, name: "P4", image: "https://placehold.co/10x10" },
    { id: 5, name: "P5", image: "https://placehold.co/10x10" },
    { id: 6, name: "P6", image: "https://placehold.co/10x10" },
  ];

  const demoPosts = [
    {
      user_id: 1,
      user_name: "Snhr1707",
      post_id: 101,
      post_caption: "🚀 Successfully Wrapped Up the MERN Workshop! 🚀\nOn 8-9 Feb 2025, our club ENCODE organized a MERN Stack Workshop.",
      has_image: true,
      image_urls: ["https://placehold.co/600x400", "https://placehold.co/400x400"],
      user_profile_pic: "https://via.placeholder.com/40",
      time_posted: "20h",
      is_liked: true,
      is_saved: false,
      likes_count: 234
    },
    {
      user_id: 2,
      user_name: "Jayesh Geryani",
      post_id: 102,
      post_caption: "Just finished a great project! Excited to share the results soon.",
      has_image: true,
      image_urls: ["https://placehold.co/600x400", "https://placehold.co/500x500"],
      user_profile_pic: "https://placehold.co/40x40",
      time_posted: "1d",
      is_liked: false,
      is_saved: true,
      likes_count: 156
    },
  ];

  // Function to toggle like
  const toggleLike = (postId) => {
    setInteractionStates((prev) => {
      const currentState = prev[postId] || {};
      return {
        ...prev,
        [postId]: {
          ...currentState,
          liked: !currentState.liked,
        }
      };
    });
  };

  // Function to toggle save
  const toggleSave = (postId) => {
    setInteractionStates((prev) => {
      const currentState = prev[postId] || {};
      return {
        ...prev,
        [postId]: {
          ...currentState,
          saved: !currentState.saved,
        }
      };
    });
  };

  const handleNextImage = (postId) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [postId]: Math.min((prev[postId] || 0) + 1, demoPosts.find(p => p.post_id === postId).image_urls.length - 1)
    }));
  };

  const handlePrevImage = (postId) => {
    setActiveImageIndexes(prev => ({
      ...prev,
      [postId]: Math.max((prev[postId] || 0) - 1, 0)
    }));
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="border-r border-gray-200"></div>

      <div className="flex-1 max-w-2xl mx-auto py-8 px-4">
        {/* Stories section */}
        <div className="bg-white rounded-lg shadow mb-6 p-4">
          <div className="flex space-x-4 overflow-x-auto">
            {stories.map((story) => (
              <div key={story.id} className="flex flex-col items-center space-y-1 min-w-fit">
                <div className="rounded-full p-0.5 bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
                  <div className="bg-white p-0.5 rounded-full">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-14 h-14 rounded-full cursor-pointer"
                    />
                  </div>
                </div>
                <span className="text-xs">{story.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Posts section */}
        <div className="space-y-6">
          {demoPosts.map((post) => (
            <div key={post.post_id} className="bg-white rounded-lg shadow">
              <div className="flex items-center p-4">
                <img
                  src={post.user_profile_pic}
                  alt={post.user_name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="ml-3">
                  <span className="font-semibold">{post.user_name}</span>
                  <span className="text-gray-500 text-sm ml-2">• {post.time_posted}</span>
                </div>
              </div>

              <div className="relative h-[400px] bg-gray-100">
                <div className="relative h-full overflow-hidden">
                  {post.image_urls.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt={`Post ${idx + 1}`}
                      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${
                        idx === (activeImageIndexes[post.post_id] || 0) ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>

                {(activeImageIndexes[post.post_id] || 0) > 0 && (
                  <button onClick={() => handlePrevImage(post.post_id)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                )}
                {(activeImageIndexes[post.post_id] || 0) < post.image_urls.length - 1 && (
                  <button onClick={() => handleNextImage(post.post_id)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1 shadow">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="p-4">
                <div className="flex items-center space-x-4">
                  <button onClick={() => toggleLike(post.post_id)} className="hover:opacity-60 transition-opacity">
                    {(interactionStates[post.post_id]?.liked ?? post.is_liked) ?  <Heart className="w-6 h-6 text-red-500 fill-current" />: <Heart className="w-6 h-6" />}
                  </button>
                  <MessageCircle className="w-6 h-6 cursor-pointer hover:opacity-60 transition-opacity" />
                  <Share2 className="w-6 h-6 cursor-pointer hover:opacity-60 transition-opacity" />
                  <div className="flex-1"></div>
                  <button onClick={() => toggleSave(post.post_id)} className="hover:opacity-60">
                  {interactionStates[post.post_id]?.saved ? (
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 3a2 2 0 0 0-2 2v16l8-5 8 5V5a2 2 0 0 0-2-2H6z"></path>
                    </svg>
                  ) : (
                    <Bookmark className="w-6 h-6" />
                  )}
                </button>

                </div>
                <div className="mt-3 text-sm text-left ">
                  <span className="font-semibold">{post.user_name} </span> {post.post_caption}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
