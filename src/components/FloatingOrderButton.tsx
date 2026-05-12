import { Phone } from 'lucide-react';

const FloatingOrderButton = () => {
  return (
    <a
      href="tel:+18882108563"
      aria-label="Call (888) 210-8563 to place an order"
      className="fixed bottom-4 right-4 sm:bottom-16 sm:right-8 z-50 shadow-2xl hover:shadow-3xl transition-all duration-300 group bg-red-600 hover:bg-red-700 text-white px-4 sm:px-6 py-3 sm:py-4 h-auto rounded-full flex items-center gap-2 max-w-[calc(100vw-2rem)]"
    >
      <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
      <span className="font-semibold text-xs sm:text-sm whitespace-nowrap">
        <span className="hidden sm:inline">Call to Order: </span>
        (888) 210-8563
      </span>
    </a>
  );
};

export default FloatingOrderButton;
