import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Home, Search, Package, ArrowLeft, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Animated 404 with auto parts theme */}
          <div className="relative mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-primary/20 select-none">
                404
              </h1>
              
              {/* Floating auto parts icons */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 left-1/4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center"
              >
                <Wrench className="w-8 h-8 text-primary" />
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -8, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 right-1/4 w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center"
              >
                <Package className="w-6 h-6 text-accent" />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Looks like this auto part isn't in our inventory! The page you're looking for might have been moved, 
              deleted, or the URL might be incorrect.
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Return to Home
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
              <Link to="/shop" className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Browse Parts
              </Link>
            </Button>
          </motion.div>

          {/* Helpful suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Search Parts</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use our search to find the right auto parts for your vehicle.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to="/shop">
                    Search Now
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Popular Categories</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Browse our most popular auto parts categories.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to="/shop">
                    View Categories
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Contact our experts for assistance finding the right part.
                </p>
                <Button asChild size="sm" variant="outline" className="w-full">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Back button for mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 block sm:hidden"
          >
            <Button 
              onClick={() => window.history.back()} 
              variant="ghost" 
              size="sm"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
