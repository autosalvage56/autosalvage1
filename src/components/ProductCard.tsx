import { Link } from 'react-router-dom';
import { ShoppingCart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    slug: string;
    sku: string;
    category: string;
    brand: string;
    price: number;
    short: string;
    image: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, cart } = useCart();
  const { toast } = useToast();
  const [isAdded, setIsAdded] = useState(false);

  const isInCart = cart.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      brand: product.brand,
    });

    setIsAdded(true);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });

    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="aspect-square bg-muted relative overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded text-[10px] sm:text-xs">
              {product.category}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-3 sm:p-4">
          <h3 className="font-heading font-semibold text-sm sm:text-base lg:text-lg mb-1 line-clamp-2 leading-tight">{product.name}</h3>
          <p className="text-xs text-muted-foreground mb-2">SKU: {product.sku}</p>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2 leading-tight">{product.short}</p>
          <p className="text-lg sm:text-xl font-bold text-primary">${product.price.toLocaleString()}</p>
        </CardContent>
        <CardFooter className="p-3 sm:p-4 pt-0 flex flex-col sm:flex-row gap-2">
          <Button asChild className="w-full sm:flex-1 h-9 sm:h-10 text-xs sm:text-sm border border-input bg-background hover:bg-accent hover:text-accent-foreground">
            <Link to={`/product/${product.slug}`}>View Details</Link>
          </Button>
          <Button 
            onClick={handleAddToCart} 
            className="w-full sm:flex-1 h-9 sm:h-10 text-xs sm:text-sm"
            disabled={isAdded}
          >
            {isAdded ? (
              <>
                <Check className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                {isInCart ? 'Add More' : 'Add to Cart'}
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
