import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingCallButton = () => {
  return (
    <motion.a
      href="tel:+919876543210"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-primary text-primary-foreground rounded-full p-3 sm:p-4 shadow-lg hover:scale-110 transition-transform"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
      <motion.span
        className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.a>
  );
};

export default FloatingCallButton;
