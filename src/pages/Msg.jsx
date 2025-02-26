import React, { useState } from 'react';
import { Send, Phone, Video, MoreVertical } from 'lucide-react';

function Msg() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  
  const friends = [
    { id: 1, name: 'Friend1', status: 'online', lastMessage: 'Hey, how are you?' },
    { id: 2, name: 'Friend2', status: 'offline', lastMessage: 'See you tomorrow!' },
    { id: 3, name: 'Friend3', status: 'online', lastMessage: 'Thanks for the help!' },
    { id: 4, name: 'Friend4', status: 'away', lastMessage: 'Let me check that' }
  ];

  return (
    <div className="flex h-screen w-auto mt-0">
      {/* Friends List Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">
            Messages
          </h2>
        </div>
        
        <div className="overflow-y-auto h-full">
          {friends.map((friend) => (
            <div
              key={friend.id}
              onClick={() => setSelectedFriend(friend)}
              className={`p-4 cursor-pointer transition-all duration-200 border-b border-gray-100 ${
                selectedFriend?.id === friend.id 
                  ? 'bg-blue-50' 
                  : 'hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-medium">{friend.name[0]}</span>
                  </div>
                  <div
                    className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                      friend.status === 'online'
                        ? 'bg-green-500'
                        : friend.status === 'away'
                        ? 'bg-yellow-500'
                        : 'bg-gray-400'
                    }`}
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-medium text-gray-900 text-left">{friend.name}</h3>
                  <p className="text-sm text-gray-500 truncate text-left">{friend.lastMessage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {selectedFriend ? (
          <>
            <div className="p-4 bg-white border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 text-sm font-medium">{selectedFriend.name[0]}</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{selectedFriend.name}</h3>
                    <p className="text-sm text-gray-500">{selectedFriend.status}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" />
                  <Video className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" />
                  <MoreVertical className="w-5 h-5 text-gray-500 hover:text-blue-500 cursor-pointer" />
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white rounded-lg py-2 px-4 max-w-xs">
                    Hey, how are you?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white text-gray-900 rounded-lg py-2 px-4 max-w-xs shadow-sm border border-gray-200">
                    I'm doing great! Thanks for asking.
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-2 bg-gray-50 text-gray-900 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-gray-50">
            <p className="text-gray-500">Select a friend to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Msg;