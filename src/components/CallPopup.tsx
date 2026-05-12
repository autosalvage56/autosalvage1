import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone } from 'lucide-react';

const CallPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = '(888) 210-8563';

  useEffect(() => {
    // Show popup immediately when page loads
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
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
            <div className="bg-white rounded-2xl shadow-2xl p-5 sm:p-8 relative w-full max-w-md mx-auto">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-red-500 hover:text-red-600 transition-colors"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Content */}
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-600 pr-6">
                  What are you waiting for?
                </h2>

                <div className="space-y-2">
                  <p className="text-gray-700 text-base sm:text-lg">
                    Get in touch:{' '}
                    <span className="font-bold text-gray-900 whitespace-nowrap">
                      {phoneNumber}
                    </span>
                  </p>
                </div>

                {/* Quote with left border */}
                <div className="border-l-4 border-red-600 pl-3 sm:pl-4 py-2 bg-gray-50 rounded-r-lg text-left">
                  <p className="text-gray-600 italic text-sm sm:text-base md:text-lg">
                    "Get Quality Used Engine &amp; Transmission"
                  </p>
                </div>

                {/* Call Now Button */}
                <a
                  href="tel:+18882108563"
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-sm sm:text-base md:text-lg py-3 sm:py-4 px-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Call Now: {phoneNumber}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CallPopup;
