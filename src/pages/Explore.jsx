import React, { useState } from 'react';
import { ChevronRight, Book, PlayCircle, ChevronLeft } from 'lucide-react';

function Explore() {
  const subjects = [
    {
      name: 'Operating Systems',
      chapters: [
        {
          sub_name: 'Chapter 1',
          reels: [
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
                id: 1,
                title: "Introduction to OS",
                url: 'abc.com',
                duration: 75,
                creator: 'Kruti Lavingia',
                profile_pic: '/api/placeholder/40/40',
                thumbnail: 'abc2.jpg',
                likes: 1234,
                comments: 89
            }
          ],
        },
      ],
    },
    {
      name: 'Computer Architecture',
      chapters: [
        {
          sub_name: 'Chapter 1',
          reels: [
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
                id: 1,
                title: "Introduction to OS",
                url: 'abc.com',
                duration: 75,
                creator: 'Kruti Lavingia',
                profile_pic: '/api/placeholder/40/40',
                thumbnail: 'abc2.jpg',
                likes: 1234,
                comments: 89
            }
          ],
        },
        {
          sub_name: 'Chapter 2',
          reels: [
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
                id: 1,
                title: "Introduction to OS",
                url: 'abc.com',
                duration: 75,
                creator: 'Kruti Lavingia',
                profile_pic: '/api/placeholder/40/40',
                thumbnail: 'abc2.jpg',
                likes: 1234,
                comments: 89
            }
          ],
        },
      ],
    },
  ];

  const [expandedSubject, setExpandedSubject] = useState(null);
  const [expandedChapter, setExpandedChapter] = useState(null);

  const scrollReels = (direction, elementId) => {
    const container = document.getElementById(elementId);
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-gray-800 mb-8">Explore Subjects</h1> */}
        
        <div className="space-y-6">
          {subjects.map((subject, subjectIndex) => (
            <div 
              key={subject.name}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setExpandedSubject(expandedSubject === subjectIndex ? null : subjectIndex)}
                className="w-full p-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Book className="w-6 h-6 text-blue-600" />
                  <span className="text-xl font-semibold text-gray-800">{subject.name}</span>
                </div>
                <ChevronRight 
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedSubject === subjectIndex ? 'rotate-90' : ''
                  }`}
                />
              </button>

              {expandedSubject === subjectIndex && (
                <div className="px-4 pb-4">
                  <div className="space-y-4">
                    {subject.chapters.map((chapter, chapterIndex) => (
                      <div key={chapter.sub_name} className="border rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedChapter(
                            expandedChapter === `${subjectIndex}-${chapterIndex}` 
                              ? null 
                              : `${subjectIndex}-${chapterIndex}`
                          )}
                          className="w-full p-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center space-x-2">
                            <PlayCircle className="w-5 h-5 text-blue-600" />
                            <span className="font-medium text-gray-700">{chapter.sub_name}</span>
                          </div>
                          <ChevronRight 
                            className={`w-4 h-4 text-gray-400 transition-transform ${
                              expandedChapter === `${subjectIndex}-${chapterIndex}` ? 'rotate-90' : ''
                            }`}
                          />
                        </button>

                        {expandedChapter === `${subjectIndex}-${chapterIndex}` && (
                          <div className="p-3 relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                              <button 
                                onClick={() => scrollReels('left', `reels-${subjectIndex}-${chapterIndex}`)}
                                className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                              >
                                <ChevronLeft className="w-5 h-5 text-gray-600" />
                              </button>
                            </div>
                            
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                              <button 
                                onClick={() => scrollReels('right', `reels-${subjectIndex}-${chapterIndex}`)}
                                className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
                              >
                                <ChevronRight className="w-5 h-5 text-gray-600" />
                              </button>
                            </div>

                            <div 
                              id={`reels-${subjectIndex}-${chapterIndex}`}
                              className="flex overflow-x-auto space-x-4 px-8 pb-4 scrollbar-hide"
                              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                            >
                              {chapter.reels.map((reel) => (
                                <div 
                                  key={reel.id} 
                                  className="flex-none relative group cursor-pointer"
                                  style={{ width: '220px' ,height: '265px'}}
                                >
                                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-md h-70 w-55">
                                    <img
                                      src={reel.thumbnail}
                                      alt={reel.title}
                                      className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                      <PlayCircle className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 rounded text-xs text-white">
                                      {reel.duration}
                                    </div>
                                  </div>
                                  <div className="mt-2">
                                    {/* <h3 className="text-sm font-medium text-gray-800 truncate">{reel.title}</h3> */}
                                    {/* <p className="text-xs text-gray-500">{chapter.sub_name}</p> */}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;