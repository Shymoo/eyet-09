import { useEffect, useState } from 'react';
const ClientCarousel = () => {
  const [direction, setDirection] = useState<'left' | 'right'>('left');

  // Mock client logos (you can replace with real client logos)
  const clients = ['Microsoft', 'Google', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Adobe', 'Spotify', 'Uber', 'Airbnb', 'Tesla', 'Samsung'];
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(prev => prev === 'left' ? 'right' : 'left');
    }, 10000); // Change direction every 10 seconds

    return () => clearInterval(interval);
  }, []);
  return <div className="w-full overflow-hidden my-[5px] py-0">
      <div className="relative">
        <div className={`flex space-x-16 ${direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'}`} style={{
        width: 'calc(200% + 4rem)'
      }}>
          {/* First set of logos */}
          {clients.map((client, index) => <div key={`first-${index}`} className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-brand-pink/50 transition-all duration-300 my-[5px]">
              <span className="text-white/60 font-rbno text-sm font-medium">
                {client}
              </span>
            </div>)}
          
          {/* Duplicate set for seamless loop */}
          {clients.map((client, index) => <div key={`second-${index}`} className="flex-shrink-0 flex items-center justify-center w-32 h-16 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10 hover:border-brand-pink/50 transition-all duration-300">
              <span className="text-white/60 font-rbno text-sm font-medium">
                {client}
              </span>
            </div>)}
        </div>
        
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </div>;
};
export default ClientCarousel;