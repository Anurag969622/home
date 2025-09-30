import React, { useState } from 'react';
import { Search, Filter, Download, Eye, BookOpen, Image, FileText, Star, Calendar } from 'lucide-react';

interface DigitalArchivesProps {
  language: string;
}

const DigitalArchives: React.FC<DigitalArchivesProps> = ({ language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const translations = {
    english: {
      title: "Digital Archives",
      subtitle: "Explore high-resolution manuscripts, murals, and rare documents",
      searchPlaceholder: "Search archives...",
      categories: "Categories",
      all: "All Items",
      manuscripts: "Manuscripts",
      murals: "Murals",
      artifacts: "Artifacts",
      photographs: "Photographs",
      documents: "Documents",
      viewPreview: "View Preview",
      download: "Download",
      gridView: "Grid View",
      listView: "List View",
      highResolution: "High Resolution",
      copyrightProtected: "Copyright Protected",
      dateAdded: "Date Added",
      monastery: "Monastery",
      period: "Period",
      language: "Language",
      closePreview: "Close Preview"
    },
    nepali: {
      title: "डिजिटल अभिलेखागार",
      subtitle: "उच्च रिजोलुसन पाण्डुलिपि, भित्ति चित्र र दुर्लभ कागजातहरू अन्वेषण गर्नुहोस्",
      searchPlaceholder: "अभिलेखागार खोज्नुहोस्...",
      categories: "श्रेणीहरू",
      all: "सबै वस्तुहरू",
      manuscripts: "पाण्डुलिपिहरू",
      murals: "भित्ति चित्रहरू",
      artifacts: "कलाकृतिहरू",
      photographs: "तस्बिरहरू",
      documents: "कागजातहरू",
      viewPreview: "पूर्वावलोकन हेर्नुहोस्",
      download: "डाउनलोड गर्नुहोस्",
      gridView: "ग्रिड दृश्य",
      listView: "सूची दृश्य",
      highResolution: "उच्च रिजोलुसन",
      copyrightProtected: "कप्राइट संरक्षित",
      dateAdded: "थपिएको मिति",
      monastery: "गुम्बा",
      period: "अवधि",
      language: "भाषा",
      closePreview: "पूर्वावलोकन बन्द गर्नुहोस्"
    }
  };

  const t = translations[language as keyof typeof translations] || translations.english;

  const archiveItems = [
    {
      id: 1,
      title: "Lotus Sutra Manuscript",
      type: "manuscripts",
      monastery: "Rumtek Monastery",
      period: "16th Century",
      language: "Tibetan",
      description: "Ancient manuscript of the Lotus Sutra with gold leaf illustrations",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Goryeo-Illustrated_manuscript_of_the_Lotus_Sutra_c.1340_%282%29.jpg",
      rating: 4.9,
      downloads: 1250,
      dateAdded: "2024-01-15",
      resolution: "4K",
      fileSize: "25 MB"
    },
    {
      id: 2,
      title: "Buddha Mural",
      type: "murals",
      monastery: "Pemayangtse Monastery",
      period: "17th Century",
      language: "Visual",
      description: "Intricate wall painting depicting Buddha's life stories",
      image: "https://images.openai.com/thumbnails/url/JWHRTXicu1mUUVJSUGylr5-al1xUWVCSmqJbkpRnoJdeXJJYkpmsl5yfq5-Zm5ieWmxfaAuUsXL0S7F0Tw5M8ssuNbM0CA70Ti_Kik_RjXQqCTd2c8_28Y3S9fAJKsrzdQ4xSTR2MvOMLyoOC8pxKc50DU_JLMtRKwYArwUo2A",
      rating: 4.8,
      downloads: 890,
      dateAdded: "2024-01-10",
      resolution: "8K",
      fileSize: "45 MB"
    },
    {
      id: 3,
      title: "Prayer Wheel",
      type: "artifacts",
      monastery: "Tashiding Monastery",
      period: "18th Century",
      language: "Sanskrit",
      description: "Traditional prayer wheel with carved mantras",
      image: "https://cdn.kastatic.org/ka-perseus-images/87b0c6f9d189beaa8e861413bea1b63da628ea89.jpg",
      rating: 4.7,
      downloads: 650,
      dateAdded: "2024-01-08",
      resolution: "4K",
      fileSize: "18 MB"
    },
    {
      id: 4,
      title: "Monastery Foundation Records",
      type: "documents",
      monastery: "Enchey Monastery",
      period: "19th Century",
      language: "Tibetan",
      description: "Historical documents about monastery establishment",
      image: "https://cdn.durhamcathedral.co.uk/uploads/images/_1200x630_crop_center-center_none/MS-A.II.3-f.2r-16_9-1.jpg?v=1721662150",
      rating: 4.6,
      downloads: 420,
      dateAdded: "2024-01-05",
      resolution: "HD",
      fileSize: "12 MB"
    },
    {
      id: 5,
      title: "Ritual Dance Photographs",
      type: "photographs",
      monastery: "Ralang Monastery",
      period: "20th Century",
      language: "Visual",
      description: "Black and white photographs of traditional Cham dance",
      image: "https://media.gettyimages.com/id/1412211097/vector/antique-illustration-ethnography-and-indigenous-cultures-dayak-village-borneo.jpg?s=612x612&w=0&k=20&c=hXsf1Weum7QTt69SwmUp2CFZ41vQH5f6Jr0u29kt6QM=",
      rating: 4.5,
      downloads: 780,
      dateAdded: "2024-01-03",
      resolution: "4K",
      fileSize: "30 MB"
    },
    {
      id: 6,
      title: "Mandala Painting",
      type: "murals",
      monastery: "Rumtek Monastery",
      period: "15th Century",
      language: "Visual",
      description: "Sacred geometric mandala with intricate details",
      image: "data:image/jpeg;base64,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",
      rating: 4.9,
      downloads: 1100,
      dateAdded: "2024-01-01",
      resolution: "8K",
      fileSize: "52 MB"
    }
  ];

  const categories = [
    { id: 'all', label: t.all, icon: BookOpen, count: archiveItems.length },
    { id: 'manuscripts', label: t.manuscripts, icon: FileText, count: archiveItems.filter(item => item.type === 'manuscripts').length },
    { id: 'murals', label: t.murals, icon: Image, count: archiveItems.filter(item => item.type === 'murals').length },
    { id: 'artifacts', label: t.artifacts, icon: Star, count: archiveItems.filter(item => item.type === 'artifacts').length },
    { id: 'photographs', label: t.photographs, icon: Eye, count: archiveItems.filter(item => item.type === 'photographs').length },
    { id: 'documents', label: t.documents, icon: FileText, count: archiveItems.filter(item => item.type === 'documents').length }
  ];

  const filteredItems = archiveItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.type === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.monastery.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            {/* Search */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-monastery-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Filter className="h-5 w-5 mr-2" />
                {t.categories}
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-monastery-primary text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center">
                      <category.icon className="h-4 w-4 mr-3" />
                      {category.label}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-white bg-opacity-20 text-white'
                        : 'bg-gray-300 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Controls */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  {filteredItems.length} items found
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-monastery-primary text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <div className="w-4 h-4 border-2 border-current"></div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-monastery-primary text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  <div className="space-y-1">
                    <div className="w-4 h-1 bg-current"></div>
                    <div className="w-4 h-1 bg-current"></div>
                    <div className="w-4 h-1 bg-current"></div>
                  </div>
                </button>
              </div>
            </div>

            {/* Archive Items Grid/List */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2 bg-monastery-primary text-white px-2 py-1 rounded text-xs">
                        {item.resolution}
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                        {item.fileSize}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="flex items-center text-gray-500 text-xs mb-2">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.period}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-monastery-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <span>{item.monastery}</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-monastery-gold mr-1" />
                          {item.rating}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedItem(item.id)}
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm transition-colors flex items-center justify-center"
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          {t.viewPreview}
                        </button>
                        <button className="flex-1 bg-monastery-primary hover:bg-monastery-secondary text-white py-2 px-3 rounded-lg text-sm transition-colors flex items-center justify-center">
                          <Download className="h-4 w-4 mr-1" />
                          {t.download}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                    <div className="flex space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-monastery-primary transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="bg-monastery-primary text-white px-2 py-1 rounded text-xs">
                              {item.resolution}
                            </span>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-monastery-gold mr-1" />
                              {item.rating}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-3">{item.description}</p>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-500 mb-4">
                          <div><span className="font-medium">{t.monastery}:</span> {item.monastery}</div>
                          <div><span className="font-medium">{t.period}:</span> {item.period}</div>
                          <div><span className="font-medium">{t.language}:</span> {item.language}</div>
                          <div><span className="font-medium">Downloads:</span> {item.downloads}</div>
                        </div>

                        <div className="flex space-x-3">
                          <button
                            onClick={() => setSelectedItem(item.id)}
                            className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm transition-colors flex items-center"
                          >
                            <Eye className="h-4 w-4 mr-2" />
                            {t.viewPreview}
                          </button>
                          <button className="bg-monastery-primary hover:bg-monastery-secondary text-white py-2 px-4 rounded-lg text-sm transition-colors flex items-center">
                            <Download className="h-4 w-4 mr-2" />
                            {t.download}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* No results */}
            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No items found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </div>

        {/* Preview Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold text-gray-900">
                  {archiveItems.find(item => item.id === selectedItem)?.title}
                </h2>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="p-6">
                <img
                  src={archiveItems.find(item => item.id === selectedItem)?.image}
                  alt="Preview"
                  className="w-full max-h-96 object-contain mb-4 rounded-lg"
                />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div><span className="font-medium">Monastery:</span> {archiveItems.find(item => item.id === selectedItem)?.monastery}</div>
                  <div><span className="font-medium">Period:</span> {archiveItems.find(item => item.id === selectedItem)?.period}</div>
                  <div><span className="font-medium">Language:</span> {archiveItems.find(item => item.id === selectedItem)?.language}</div>
                  <div><span className="font-medium">Resolution:</span> {archiveItems.find(item => item.id === selectedItem)?.resolution}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalArchives;