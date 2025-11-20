import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingOrderButton = () => {
  return (
    <Link to="/contact">
      <Button
        className="fixed bottom-16 right-8 z-50 shadow-2xl hover:shadow-3xl transition-all duration-300 group bg-red-600 hover:bg-red-700 text-white px-6 py-6 h-auto rounded-full flex items-center gap-2"
      >
        <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
        <span className="font-semibold">Place an Order</span>
      </Button>
    </Link>
  );
};

export default FloatingOrderButton;
