import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingContactBar } from './components/FloatingContactBar';
import { RoomDetailModal } from './components/RoomDetailModal';
import { RoomGalleryModal } from './components/RoomGalleryModal';
import { SplashScreen } from './components/SplashScreen';
import { RoomOption } from './data/resorts';

import { HomePage } from './pages/HomePage';
import { ResortsPage } from './pages/ResortsPage';
import { AdventurePage } from './pages/AdventurePage';
import { SafariPage } from './pages/SafariPage';
import { SightseeingPage } from './pages/SightseeingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BangalorePackagePage } from './pages/BangalorePackagePage';
import { PuneMumbaiPackagePage } from './pages/PuneMumbaiPackagePage';
import { WaterSportsPriceGuidePage } from './pages/WaterSportsPriceGuidePage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Modal States
  const [activeRoomDetail, setActiveRoomDetail] = useState<RoomOption | null>(null);
  const [galleryState, setGalleryState] = useState<{
    isOpen: boolean;
    photos: string[];
    roomName: string;
    resortName: string;
    initialIndex?: number;
  }>({
    isOpen: false,
    photos: [],
    roomName: '',
    resortName: '',
    initialIndex: 0,
  });

  // Handle route change with browser history
  const navigate = (path: string) => {
    setCurrentPath(path);
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Popstate listener for back/forward browser buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync SEO Title and Meta Description per Page
  useEffect(() => {
    let title = 'Dandeli Resort & Water Sports Booking | Jungle Stay & Rafting | Dandeli Plans';
    let desc = 'Book a resort stay in Dandeli with water sports, white water rafting, kayaking, meals and jungle experiences. Explore Dandeli Plans resort packages.';

    if (currentPath.startsWith('/resorts/dandeli-jungle-resort')) {
      title = 'Dandeli Jungle Resort | Rooms, Packages & Water Activities | Dandeli Plans';
      desc = 'Explore Dandeli Jungle Resort packages with comfortable rooms, meals, kayaking, boating, zorbing and resort activities.';
    } else if (currentPath.startsWith('/resorts/dandeli-cottages')) {
      title = 'Dandeli Cottages | Premium Wooden Cottages & Resort Packages | Dandeli Plans';
      desc = 'Discover Dandeli Cottages with wooden cottages, family accommodation, meals and selected adventure activities.';
    } else if (currentPath.startsWith('/resorts/dandeli-hills-resort')) {
      title = 'Dandeli Hills Resort | Hill View Rooms & Resort Packages | Dandeli Plans';
      desc = 'Stay at Dandeli Hills Resort in the Western Ghats. Explore hill-view rooms, family accommodation, meals and selected adventure activities.';
    } else if (currentPath.startsWith('/stay/')) {
      title = 'Dandeli Jungle Resort Packages | Premium Stays & Cottages | Dandeli Plans';
      desc = 'Explore Dandeli Plans resort packages with forest stays, cottages, meals and selected water activities.';
    } else if (currentPath.includes('white-water-rafting')) {
      title = 'Dandeli White Water Rafting | Kali River Prices & Packages | Dandeli Plans';
      desc = 'Explore white water rafting in Dandeli on the Kali River. Compare short, mid and long rafting options, prices and approximate durations.';
    } else if (currentPath.includes('water-sports-price-list') || currentPath.includes('price')) {
      title = 'Best Time for River Rafting in Dandeli | Water Sports Price Guide | Dandeli Plans';
      desc = 'Learn the best time for river rafting in Dandeli, water sports prices, rafting options, seasonal conditions and safety information.';
    } else if (currentPath.startsWith('/water-sports')) {
      title = 'Dandeli Water Sports | Rafting, Kayaking & River Adventures | Dandeli Plans';
      desc = 'Explore Dandeli water sports including Kali River rafting, kayaking, boating, water zorbing and river crossing zipline.';
    } else if (currentPath.startsWith('/wildlife-safari')) {
      title = 'Dandeli Jungle Safari | Timings, Price & Booking Information | Dandeli Plans';
      desc = 'Learn about the Dandeli jungle safari, including safari timings, location, approximate charges, Forest Department booking process and wildlife information.';
    } else if (currentPath.startsWith('/dandeli-sightseeing')) {
      title = 'Dandeli Sightseeing | Best Places to Visit & Things to Do | Dandeli Plans';
      desc = 'Explore Dandeli sightseeing places including Syntheri Rock, Moulangi Eco Park, Sykes Point, Kavale Caves and other forest attractions.';
    } else if (currentPath.includes('bangalore')) {
      title = 'Dandeli Trip Package from Bangalore | Resort & Adventure | Dandeli Plans';
      desc = 'Plan a Dandeli getaway from Bangalore with resort accommodation, meals, water activities and local adventure experiences.';
    } else if (currentPath.includes('pune') || currentPath.includes('mumbai')) {
      title = 'Dandeli Resort Packages from Pune & Mumbai | Adventure Stay | Dandeli Plans';
      desc = 'Plan your Dandeli trip from Pune or Mumbai with resort stays, water sports, sightseeing and wildlife experiences.';
    } else if (currentPath.startsWith('/about-us')) {
      title = 'About Dandeli Plans | Dandeli Resorts & Adventure Experiences';
      desc = 'Learn about Dandeli Plans and our focus on resort stays, adventure activities, sightseeing and travel experiences in Dandeli.';
    } else if (currentPath.startsWith('/contact-us')) {
      title = 'Contact Dandeli Plans | Resort Booking & Travel Enquiries';
      desc = 'Contact Dandeli Plans for resort booking enquiries, accommodation, water activities, sightseeing and Dandeli travel assistance.';
    }

    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', desc);
    }
  }, [currentPath]);

  // Open Room Detail Modal
  const handleOpenRoomDetail = (room: RoomOption) => {
    setActiveRoomDetail(room);
  };

  // Open Gallery Lightbox Modal
  const handleOpenGallery = (photos: string[], roomName: string, resortName: string, initialIndex = 0) => {
    setGalleryState({
      isOpen: true,
      photos,
      roomName,
      resortName,
      initialIndex,
    });
  };

  // Quick Trigger for booking strip from navbar or floating bar
  const handleOpenBookingStrip = (resort?: string, room?: string) => {
    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('booking-strip');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const el = document.getElementById('booking-strip');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Render Page Content based on Route
  const renderCurrentPage = () => {
    if (currentPath === '/' || currentPath === '') {
      return (
        <HomePage
          onNavigate={navigate}
          onOpenRoomDetail={handleOpenRoomDetail}
          onOpenGallery={handleOpenGallery}
        />
      );
    }

    if (currentPath.startsWith('/resorts/dandeli-jungle-resort')) {
      return (
        <ResortsPage
          selectedResortSlug="dandeli-jungle-resort"
          onNavigate={navigate}
          onOpenRoomDetail={handleOpenRoomDetail}
          onOpenGallery={handleOpenGallery}
        />
      );
    }

    if (currentPath.startsWith('/resorts/dandeli-cottages')) {
      return (
        <ResortsPage
          selectedResortSlug="dandeli-cottages"
          onNavigate={navigate}
          onOpenRoomDetail={handleOpenRoomDetail}
          onOpenGallery={handleOpenGallery}
        />
      );
    }

    if (currentPath.startsWith('/resorts/dandeli-hills-resort')) {
      return (
        <ResortsPage
          selectedResortSlug="dandeli-hills-resort"
          onNavigate={navigate}
          onOpenRoomDetail={handleOpenRoomDetail}
          onOpenGallery={handleOpenGallery}
        />
      );
    }

    if (currentPath.startsWith('/stay/')) {
      return (
        <ResortsPage
          onNavigate={navigate}
          onOpenRoomDetail={handleOpenRoomDetail}
          onOpenGallery={handleOpenGallery}
        />
      );
    }

    if (currentPath.startsWith('/water-sports-packages')) {
      return <WaterSportsPriceGuidePage />;
    }

    if (currentPath.includes('water-sports-price-list')) {
      return <WaterSportsPriceGuidePage />;
    }

    if (currentPath.startsWith('/water-sports')) {
      return <AdventurePage />;
    }

    if (currentPath.startsWith('/wildlife-safari')) {
      return <SafariPage onOpenGallery={handleOpenGallery} />;
    }

    if (currentPath.startsWith('/dandeli-sightseeing')) {
      return <SightseeingPage onOpenGallery={handleOpenGallery} />;
    }

    if (currentPath.includes('bangalore')) {
      return <BangalorePackagePage onNavigate={navigate} />;
    }

    if (currentPath.includes('pune') || currentPath.includes('mumbai')) {
      return <PuneMumbaiPackagePage onNavigate={navigate} />;
    }

    if (currentPath.startsWith('/about-us')) {
      return <AboutPage onNavigate={navigate} />;
    }

    if (currentPath.startsWith('/contact-us')) {
      return <ContactPage />;
    }

    // Default Fallback to Home
    return (
      <HomePage
        onNavigate={navigate}
        onOpenRoomDetail={handleOpenRoomDetail}
        onOpenGallery={handleOpenGallery}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#090d0c] text-[#ede9e0] flex flex-col font-sans selection:bg-[#c5a059]/30 selection:text-[#faf8f5]">
      {/* 0. Initial Brand Splash Loader with Logo */}
      <SplashScreen />

      {/* 1. Sticky Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenBooking={handleOpenBookingStrip}
      />

      {/* 2. Main Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 3. Luxury Dark Footer */}
      <Footer onNavigate={navigate} />

      {/* 4. Desktop & Mobile Floating Contact Actions */}
      <FloatingContactBar
        onOpenBookingStrip={() => handleOpenBookingStrip()}
      />

      {/* 5. Fullscreen Lightbox Photo Gallery Modal */}
      <RoomGalleryModal
        isOpen={galleryState.isOpen}
        onClose={() => setGalleryState((prev) => ({ ...prev, isOpen: false }))}
        photos={galleryState.photos}
        roomName={galleryState.roomName}
        resortName={galleryState.resortName}
        initialIndex={galleryState.initialIndex}
      />

      {/* 6. Detailed Room Inclusions & Booking Modal */}
      <RoomDetailModal
        room={activeRoomDetail}
        isOpen={!!activeRoomDetail}
        onClose={() => setActiveRoomDetail(null)}
        onOpenGallery={(photos, roomName, resortName) => {
          setActiveRoomDetail(null);
          handleOpenGallery(photos, roomName, resortName);
        }}
      />
    </div>
  );
}
