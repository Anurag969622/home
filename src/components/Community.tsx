import React, { useState } from 'react';
import { MessageCircle, Heart, Share2, Upload, Image, Mic, Users, Star, Calendar, MapPin } from 'lucide-react';

interface CommunityProps {
  language: string;
}

const Community: React.FC<CommunityProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState('stories');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const translations = {
    english: {
      title: "Community & Participation",
      subtitle: "Share stories, connect with fellow travelers, and contribute to our cultural heritage",
      stories: "Stories",
      photos: "Photos",
      audio: "Audio",
      discussions: "Discussions",
      shareYourStory: "Share Your Story",
      sharePhoto: "Share Photo",
      recordAudio: "Record Audio",
      startDiscussion: "Start Discussion",
      like: "Like",
      comment: "Comment",
      share: "Share",
      upload: "Upload",
      cancel: "Cancel",
      writeStory: "Write your story...",
      addTitle: "Add a title...",
      selectMonastery: "Select monastery",
      anonymous: "Post anonymously",
      postStory: "Post Story"
    },
    nepali: {
      title: "समुदाय र सहभागिता",
      subtitle: "कथाहरू साझा गर्नुहोस्, साथी यात्रुहरूसँग जोडिनुहोस्, र हाम्रो सांस्कृतिक सम्पदामा योगदान दिनुहोस्",
      stories: "कथाहरू",
      photos: "तस्बिरहरू",
      audio: "अडियो",
      discussions: "छलफलहरू",
      shareYourStory: "आफ्नो कथा साझा गर्नुहोस्",
      sharePhoto: "तस्बिर साझा गर्नुहोस्",
      recordAudio: "अडियो रेकर्ड गर्नुहोस्",
      startDiscussion: "छलफल सुरु गर्नुहोस्",
      like: "मन पराउनुहोस्",
      comment: "टिप्पणी",
      share: "साझा गर्नुहोस्",
      upload: "अपलोड गर्नुहोस्",
      cancel: "रद्द गर्नुहोस्",
      writeStory: "आफ्नो कथा लेख्नुहोस्...",
      addTitle: "शीर्षक थप्नुहोस्...",
      selectMonastery: "गुम्बा छान्नुहोस्",
      anonymous: "गुमनाम रूपमा पोस्ट गर्नुहोस्",
      postStory: "कथा पोस्ट गर्नुहोस्"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const communityPosts = [
    {
      id: 1,
      type: 'story',
      title: 'My Spiritual Journey at Rumtek',
      content: 'The morning prayers at Rumtek Monastery were transformative. As the sun rose over the hills, the chanting of monks created an atmosphere of peace that I\'ll never forget. The head monk shared teachings about compassion that still guide me today.',
      author: 'Sarah Chen',
      authorImage: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=100',
      monastery: 'Rumtek Monastery',
      date: '3 days ago',
      likes: 24,
      comments: 8,
      shares: 5,
      image: 'https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Cultural_Significance_of_Rumtek_Monastery_8a4f344c9e.webp'
    },
    {
      id: 2,
      type: 'photo',
      title: 'Golden Hour at Pemayangtse',
      content: 'Captured this magical moment during evening prayers. The golden light streaming through the prayer hall created such a divine atmosphere.',
      author: 'Tenzin Norbu',
      authorImage: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=100',
      monastery: 'Pemayangtse Monastery',
      date: '1 week ago',
      likes: 42,
      comments: 12,
      shares: 18,
      image: 'https://1001things.org/wp-content/uploads/2016/07/Pemayangtse-Monastery-1200x675.jpg'
    },
    {
      id: 3,
      type: 'audio',
      title: 'Grandfather\'s Stories of Tashiding',
      content: 'My grandfather shared stories of how Tashiding Monastery was built and the miracles witnessed by early devotees. These oral histories are precious.',
      author: 'Karma Lepcha',
      authorImage: 'https://sikkimtourism.org/wp-content/uploads/2024/01/tashiding-monastery-sikkim.jpg',
      monastery: 'Tashiding Monastery',
      date: '2 weeks ago',
      likes: 31,
      comments: 15,
      shares: 9,
      audioLength: '12:34'
    },
    {
      id: 4,
      type: 'discussion',
      title: 'Best time to visit for Losar Festival?',
      content: 'I\'m planning to attend Losar celebrations this year. What\'s the best monastery to visit, and should I book accommodation in advance?',
      author: 'Anonymous',
      monastery: 'General Discussion',
      date: '4 hours ago',
      likes: 7,
      comments: 23,
      shares: 2
    }
  ];

  const monasteries = [
    'Rumtek Monastery',
    'Pemayangtse Monastery',
    'Tashiding Monastery',
    'Enchey Monastery',
    'Ralang Monastery'
  ];

  const tabs = [
    { id: 'stories', label: t.stories, icon: MessageCircle },
    { id: 'photos', label: t.photos, icon: Image },
    { id: 'audio', label: t.audio, icon: Mic },
    { id: 'discussions', label: t.discussions, icon: Users }
  ];

  const filteredPosts = activeTab === 'stories' 
    ? communityPosts 
    : communityPosts.filter(post => post.type === activeTab);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Contribution Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contribute</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowUploadModal(true)}
                  className="w-full bg-monastery-primary hover:bg-monastery-secondary text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {t.shareYourStory}
                </button>
                <button className="w-full bg-monastery-gold hover:bg-amber-500 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <Image className="h-4 w-4 mr-2" />
                  {t.sharePhoto}
                </button>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <Mic className="h-4 w-4 mr-2" />
                  {t.recordAudio}
                </button>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                  <Users className="h-4 w-4 mr-2" />
                  {t.startDiscussion}
                </button>
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Stories Shared</span>
                  <span className="font-semibold text-monastery-primary">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Photos Uploaded</span>
                  <span className="font-semibold text-monastery-primary">3,891</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Audio Recordings</span>
                  <span className="font-semibold text-monastery-primary">456</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Discussions</span>
                  <span className="font-semibold text-monastery-primary">234</span>
                </div>
              </div>
            </div>

            {/* Featured Contributors */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {[
                  { name: 'Tenzin Norbu', contributions: 45, avatar: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=50' },
                  { name: 'Sarah Chen', contributions: 38, avatar: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=50' },
                  { name: 'Karma Lepcha', contributions: 32, avatar: 'https://images.pexels.com/photos/3760854/pexels-photo-3760854.jpeg?auto=compress&cs=tinysrgb&w=50' }
                ].map((contributor, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <img
                      src={contributor.avatar}
                      alt={contributor.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{contributor.name}</p>
                      <p className="text-xs text-gray-600">{contributor.contributions} contributions</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-monastery-gold mr-1" />
                      <span className="text-xs text-gray-600">{index + 1}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="flex space-x-0 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 text-center font-medium transition-colors flex items-center justify-center ${
                      activeTab === tab.id
                        ? 'text-monastery-primary border-b-2 border-monastery-primary bg-monastery-primary bg-opacity-5'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-2" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Posts Feed */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Post Header */}
                  <div className="p-6 pb-0">
                    <div className="flex items-start space-x-4">
                      {post.authorImage && (
                        <img
                          src={post.authorImage}
                          alt={post.author}
                          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{post.author}</h3>
                          {post.type !== 'discussion' && (
                            <span className="text-gray-500">•</span>
                          )}
                          <div className="flex items-center text-gray-500 text-sm">
                            <MapPin className="h-3 w-3 mr-1" />
                            {post.monastery}
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="p-6 pt-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{post.title}</h4>
                    <p className="text-gray-600 mb-4">{post.content}</p>

                    {/* Media Content */}
                    {post.image && (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    )}

                    {post.type === 'audio' && (
                      <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center space-x-4">
                        <div className="bg-monastery-primary text-white p-3 rounded-full">
                          <Mic className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">Audio Recording</p>
                          <p className="text-sm text-gray-600">Duration: {post.audioLength}</p>
                        </div>
                        <button className="bg-monastery-primary hover:bg-monastery-secondary text-white px-4 py-2 rounded-lg transition-colors">
                          Play
                        </button>
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-6">
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-monastery-primary transition-colors">
                          <Heart className="h-5 w-5" />
                          <span>{post.likes} {t.like}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-monastery-primary transition-colors">
                          <MessageCircle className="h-5 w-5" />
                          <span>{post.comments} {t.comment}</span>
                        </button>
                        <button className="flex items-center space-x-2 text-gray-600 hover:text-monastery-primary transition-colors">
                          <Share2 className="h-5 w-5" />
                          <span>{post.shares} {t.share}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="bg-monastery-primary hover:bg-monastery-secondary text-white px-6 py-3 rounded-lg transition-colors">
                Load More Posts
              </button>
            </div>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-900">{t.shareYourStory}</h2>
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="text-gray-500 hover:text-gray-700 text-2xl"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder={t.addTitle}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-monastery-primary focus:border-transparent"
                  />
                  
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-monastery-primary focus:border-transparent">
                    <option value="">{t.selectMonastery}</option>
                    {monasteries.map((monastery) => (
                      <option key={monastery} value={monastery}>{monastery}</option>
                    ))}
                  </select>
                  
                  <textarea
                    placeholder={t.writeStory}
                    rows={8}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-monastery-primary focus:border-transparent resize-none"
                  ></textarea>
                  
                  <div className="flex items-center">
                    <input type="checkbox" id="anonymous" className="mr-2" />
                    <label htmlFor="anonymous" className="text-sm text-gray-600">{t.anonymous}</label>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t flex justify-end space-x-3">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  {t.cancel}
                </button>
                <button className="bg-monastery-primary hover:bg-monastery-secondary text-white px-6 py-2 rounded-lg transition-colors">
                  {t.postStory}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Community;