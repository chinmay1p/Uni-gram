import React, { useState } from 'react';
import { Upload, X, Image as ImageIcon, Film } from 'lucide-react';

function Post() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [caption, setCaption] = useState('');
    const [fileType, setFileType] = useState(null);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setFileType(file.type.startsWith('video') ? 'video' : 'image');
            
            // Create preview URL
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleClearFile = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setFileType(null);
    };

    const handlePost = () => {
        // Handle post creation here
        console.log('File:', selectedFile);
        console.log('Caption:', caption);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Post</h1>

                {/* Upload Section */}
                <div className="mb-6">
                    {!previewUrl ? (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                            <input
                                type="file"
                                accept="image/*, video/*"
                                onChange={handleFileSelect}
                                className="hidden"
                                id="file-upload"
                            />
                            <label 
                                htmlFor="file-upload"
                                className="flex flex-col items-center justify-center cursor-pointer"
                            >
                                <Upload className="w-12 h-12 text-gray-400 mb-3" />
                                <div className="text-center">
                                    <p className="text-gray-600 font-medium mb-1">Click to upload</p>
                                    <p className="text-sm text-gray-500">Image or Video</p>
                                    <div className="flex items-center justify-center gap-2 mt-2">
                                        <ImageIcon className="w-5 h-5 text-gray-400" />
                                        <Film className="w-5 h-5 text-gray-400" />
                                    </div>
                                </div>
                            </label>
                        </div>
                    ) : (
                        <div className="relative rounded-lg overflow-hidden">
                            {fileType === 'video' ? (
                                <video 
                                    src={previewUrl} 
                                    className="w-full h-64 object-cover rounded-lg"
                                    controls
                                />
                            ) : (
                                <img 
                                    src={previewUrl} 
                                    alt="Preview" 
                                    className="w-full h-64 object-cover rounded-lg"
                                />
                            )}
                            <button
                                onClick={handleClearFile}
                                className="absolute top-2 right-2 p-1 bg-gray-800/70 rounded-full hover:bg-gray-800/90 transition-colors"
                            >
                                <X className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Caption Input */}
                <div className="mb-6">
                    <textarea
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                        placeholder="Write a caption..."
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                        rows="3"
                    />
                </div>

                {/* Post Button */}
                <button
                    onClick={handlePost}
                    disabled={!selectedFile}
                    className={`w-full py-3 rounded-lg font-medium transition-colors ${
                        selectedFile
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                >
                    Post
                </button>
            </div>
        </div>
    );
}

export default Post;