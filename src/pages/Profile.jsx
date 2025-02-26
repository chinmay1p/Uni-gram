import React from 'react';
import { Settings, MapPin, Link as LinkIcon, Edit, Grid, Bookmark, Heart, MessageSquare } from 'lucide-react';

function Profile() {
  const posts = [
    { id: 1, likes: 234, comments: 45 },
    { id: 2, likes: 187, comments: 23 },
    { id: 3, likes: 542, comments: 89 },
    { id: 4, likes: 321, comments: 56 },
    { id: 5, likes: 876, comments: 123 },
    { id: 6, likes: 432, comments: 67 }
  ];

  return (
    <div className="w-auto  flex-1 bg-gray-50 flex justify-center">
      {/* Profile Container */}
      <div className="w-[750px]">
        {/* Profile Header */}
        <div className="bg-white border-b border-gray-200 p-8">
          <div className="flex items-start gap-8">
            {/* Profile Picture */}
            <div className="relative group">
              <img
                src="/logos.svg"
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="absolute inset-0 rounded-full bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Edit className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex gap-4 mb-4">
                <h1 className="text-2xl font-semibold text-gray-900">User-Name</h1>
                <button className="px-4 py-1.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Edit Profile
                </button>
                <Settings className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-900" />
              </div>

              <div className="flex gap-8 mb-4">
                <div className="text-gray-700">
                  <span className="font-semibold text-gray-900">128</span> posts
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold text-gray-900">14.3k</span> followers
                </div>
                <div className="text-gray-700">
                  <span className="font-semibold text-gray-900">892</span> following
                </div>
              </div>

              <div className="space-y-2 text-left">
                <h2 className="font-medium text-gray-900">Photography & Travel</h2>
                <p className="text-gray-600 max-w-md">
                  Capturing moments and exploring the world 📸 ✈️
                  Professional photographer sharing daily adventures and tips
                </p>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Ahmedabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-blue-600">
                  <LinkIcon className="w-4 h-4" />
                  <a href="#" className="hover:underline">photography.portfolio</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="flex gap-8 justify-center">
            <button className="px-4 py-4 text-gray-900 font-medium border-t-2 border-gray-900 flex items-center gap-2">
              <Grid className="w-4 h-4" />
              Posts
            </button>
            <button className="px-4 py-4 text-gray-500 font-medium hover:text-gray-900 flex items-center gap-2">
              <Bookmark className="w-4 h-4" />
              Saved
            </button>
          </div>
        </div>
        

        {/* Posts Grid */}
        <div className="py-8 px-4">
          <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => (
              <div key={post.id} className="relative group aspect-square">
                <img
                  src={"https://assets.leetcode.com/users/avatars/avatar_1704092586.png"}
                  alt={`Post ${post.id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                  <div className="flex gap-6 text-white">
                    <div className="flex items-center gap-2">
                      <Heart className="w-6 h-6 fill-white" />
                      <span className="font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-6 h-6 fill-white" />
                      <span className="font-medium">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
