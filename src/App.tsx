import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import VirtualTours from './components/VirtualTours';
import InteractiveMap from './components/InteractiveMap';
import DigitalArchives from './components/DigitalArchives';
import AudioGuide from './components/AudioGuide';
import CulturalCalendar from './components/CulturalCalendar';
import Community from './components/Community';
import BookingModal from './components/BookingModal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'virtual-tours':
        return <VirtualTours language={selectedLanguage} />;
      case 'map':
        return <InteractiveMap language={selectedLanguage} />;
      case 'archives':
        return <DigitalArchives language={selectedLanguage} />;
      case 'audio-guide':
        return <AudioGuide language={selectedLanguage} />;
      case 'calendar':
        return <CulturalCalendar 
          language={selectedLanguage} 
          onBookEvent={() => setShowBookingModal(true)} 
        />;
      case 'community':
        return <Community language={selectedLanguage} />;
      default:
        return <Homepage 
          onNavigate={setCurrentPage} 
          language={selectedLanguage}
          onBooking={() => setShowBookingModal(true)}
        />;
    }
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header 
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        language={selectedLanguage}
        onLanguageChange={setSelectedLanguage}
      />
      
      <main>
        {renderCurrentPage()}
      </main>

      <Footer language={selectedLanguage} />

      {showBookingModal && (
        <BookingModal 
          onClose={() => setShowBookingModal(false)}
          language={selectedLanguage}
        />
      )}
    </div>
  );
}

export default App;