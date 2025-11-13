import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = 'xxxx-xxx';

  useEffect(() => {
    // Check if popup has been shown in this session
    const hasShownPopup = sessionStorage.getItem('hasShownPopup');
    
    if (!hasShownPopup) {
      // Show popup immediately when page loads
      setIsVisible(true);
      // Mark as shown in session storage
      sessionStorage.setItem('hasShownPopup', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber.replace(/\s/g, '')}`;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative w-full max-w-md">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-red-500 hover:text-red-600 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Content */}
              <div className="text-center space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-red-600">
                  What are you waiting for?
                </h2>

                <div className="space-y-2">
                  <p className="text-gray-700 text-lg">
                    Get in touch: <span className="font-bold text-gray-900">{phoneNumber}</span>
                  </p>
                </div>

                {/* Quote with left border */}
                <div className="border-l-4 border-red-600 pl-4 py-2 bg-gray-50 rounded-r-lg">
                  <p className="text-gray-600 italic text-base md:text-lg">
                    "Get Quality Used Engine & Transmission"
                  </p>
                </div>

                {/* Call Now Button */}
                <Button
                  onClick={handleCall}
                  size="lg"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now!
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CallPopup;
