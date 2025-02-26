import React, { useState, useRef } from "react";

function Settings() {
  const [user, setUser] = useState({
    username: 'Chinnmayyy',
    profile_pic: 'pro.png',
    bio: "ITNU CSE'27",
    saved_posts_urls: ['p1.png', 'p2.png'],
    liked_posts_urls: ['p3.png', 'p2.png'],
  });
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [tempUser, setTempUser] = useState({...user});
  const [showSavedPosts, setShowSavedPosts] = useState(false);
  const [showLikedPosts, setShowLikedPosts] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const fileInputRef = useRef(null);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTempUser({...tempUser, [name]: value});
  };
  
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Create a preview URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      
      // In a real app, you would upload this file to a server
      // For now, we'll just update the local state with the preview URL
      setTempUser({...tempUser, profile_pic: imageUrl});
    }
  };
  
  const handleSave = () => {
    setUser({...tempUser});
    setShowEditModal(false);
    setPreviewImage(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <img 
                src={user.profile_pic} 
                alt="Profile" 
                className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{user.username}</h2>
              <p className="text-gray-600 mt-2">{user.bio}</p>
              
              <button 
                onClick={() => setShowEditModal(true)}
                className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-200"
              >
                Edit Profile
              </button>
            </div>
          </div>
        </div>
        
        {/* Saved Posts Dropdown */}
        <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
          <button 
            onClick={() => setShowSavedPosts(!showSavedPosts)}
            className="w-full py-4 px-6 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="text-lg font-medium">Saved Posts</span>
            <svg 
              className={`w-5 h-5 transition-transform ${showSavedPosts ? 'transform rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showSavedPosts && (
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {user.saved_posts_urls.map((url, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden bg-gray-200">
                    <img src={url} alt={`Saved post ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* Liked Posts Dropdown */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button 
            onClick={() => setShowLikedPosts(!showLikedPosts)}
            className="w-full py-4 px-6 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition"
          >
            <span className="text-lg font-medium">Liked Posts</span>
            <svg 
              className={`w-5 h-5 transition-transform ${showLikedPosts ? 'transform rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {showLikedPosts && (
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {user.liked_posts_urls.map((url, index) => (
                  <div key={index} className="relative aspect-square rounded-md overflow-hidden bg-gray-200">
                    <img src={url} alt={`Liked post ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-fade-in">
            <h3 className="text-xl font-bold mb-4">Edit Profile</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input
                  type="text"
                  name="username"
                  value={tempUser.username}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Profile Picture</label>
                <div className="flex items-center space-x-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden bg-gray-200 border border-gray-300">
                    <img 
                      src={previewImage || tempUser.profile_pic} 
                      alt="Profile preview" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <button
                      onClick={() => fileInputRef.current.click()}
                      className="px-3 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
                    >
                      Choose Image
                    </button>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                <textarea
                  name="bio"
                  value={tempUser.bio}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowEditModal(false);
                  setPreviewImage(null);
                  setTempUser({...user}); // Reset to original values
                }}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;