import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity, getCartTotal, getCartCount } = useCart();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Shop', path: '/shop' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.svg" alt="AutoSalvage" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Cart Button */}
          <div className="hidden md:flex items-center gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <ShoppingCart className="w-5 h-5" />
                  {getCartCount() > 0 && (
                    <Badge 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                      variant="destructive"
                    >
                      {getCartCount()}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Shopping Cart</SheetTitle>
                  <SheetDescription>
                    {cart.length === 0 ? 'Your cart is empty' : `${getCartCount()} items in cart`}
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground">Your cart is empty</p>
                      <Button asChild className="mt-4">
                        <Link to="/shop">Browse Products</Link>
                      </Button>
                    </div>
                  ) : (
                    <>
                      {cart.map((item) => (
                        <div key={item.id} className="flex gap-4 py-4 border-b">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{item.name}</h4>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                            <p className="text-sm font-bold text-primary mt-1">
                              ${item.price.toLocaleString()}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </Button>
                              <span className="text-sm font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                +
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => removeFromCart(item.id)}
                                className="ml-auto text-destructive"
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="pt-4 space-y-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span>${getCartTotal().toLocaleString()}</span>
                        </div>
                        <Button asChild className="w-full">
                          <Link to="/contact">Contact Us to Complete Order</Link>
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          Contact us to complete your order and arrange delivery
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-card/95 backdrop-blur-sm">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-foreground hover:text-primary hover:bg-primary/5 transition-colors font-medium rounded-md mx-2"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 px-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full relative justify-start">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    View Cart
                    {getCartCount() > 0 && (
                      <Badge 
                        className="ml-auto h-5 min-w-[20px] flex items-center justify-center p-1 text-xs"
                        variant="destructive"
                      >
                        {getCartCount()}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-full sm:max-w-lg overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription>
                      {cart.length === 0 ? 'Your cart is empty' : `${getCartCount()} items in cart`}
                    </SheetDescription>
                  </SheetHeader>
                  <div className="mt-8 space-y-4">
                    {cart.length === 0 ? (
                      <div className="text-center py-8">
                        <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                        <p className="text-muted-foreground">Your cart is empty</p>
                        <Button asChild className="mt-4">
                          <Link to="/shop" onClick={() => setIsMenuOpen(false)}>Browse Products</Link>
                        </Button>
                      </div>
                    ) : (
                      <>
                        {cart.map((item) => (
                          <div key={item.id} className="flex gap-4 py-4 border-b">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-sm">{item.name}</h4>
                              <p className="text-sm text-muted-foreground">{item.category}</p>
                              <p className="text-sm font-bold text-primary mt-1">
                                ${item.price.toLocaleString()}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                >
                                  -
                                </Button>
                                <span className="text-sm font-medium">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  +
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  onClick={() => removeFromCart(item.id)}
                                  className="ml-auto text-destructive"
                                >
                                  Remove
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div className="pt-4 space-y-2">
                          <div className="flex justify-between text-lg font-bold">
                            <span>Total:</span>
                            <span>${getCartTotal().toLocaleString()}</span>
                          </div>
                          <Button asChild className="w-full">
                            <Link to="/contact">Contact Us to Complete Order</Link>
                          </Button>
                          <p className="text-xs text-center text-muted-foreground">
                            Contact us to complete your order and arrange delivery
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
