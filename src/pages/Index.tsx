import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Truck, Wrench, Award, ChevronRight, Package, Clock, CheckCircle, Tag, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import ProductCard from '@/components/ProductCard';
import productsData from '../../data/products.json';
import blogsData from '../../data/blogs.json';
import Autoplay from 'embla-carousel-autoplay';
import warehouseImg from '@/assets/warehouse.jpg';
import qualityCheckImg from '@/assets/quality-check.jpg';
import installationImg from '@/assets/installation.jpg';
import deliveryImg from '@/assets/delivery.jpg';

const Index = () => {
  const featuredProducts = productsData.slice(0, 12);

  const popularCategories = [
    {
      name: 'Engines',
      image: 'https://shop.tagoreautoparts.com/wp-content/uploads/2025/09/2023-Chevy-Truck-Silverado-3500-Engine.jpg',
      link: '/shop?category=engines'
    },
    {
      name: 'Transmission',
      image: 'https://shop.tagoreautoparts.com/wp-content/uploads/2025/09/GMC-Yukoon-Transmission.webp',
      link: '/shop?category=transmission'
    },
    {
      name: 'Others',
      image: '/images/products/headlight.jpg',
      link: '/shop?category=others'
    }
  ];

  const brandLogos = [
    { name: 'Chevrolet', url: 'https://tagoreautoparts.com/img/Brand/chevy.jpg' },
    { name: 'Dodge', url: 'https://tagoreautoparts.com/img/Brand/dodge.jpg' },
    { name: 'Ford', url: 'https://tagoreautoparts.com/img/Brand/ford.jpg' },
    { name: 'GMC', url: 'https://tagoreautoparts.com/img/Brand/GMC.jpg' },
    { name: 'Honda', url: 'https://tagoreautoparts.com/img/Brand/honda.jpg' },
    { name: 'Jeep', url: 'https://tagoreautoparts.com/img/Brand/jeep.jpg' },
    { name: 'Mitsubishi', url: 'https://tagoreautoparts.com/img/Brand/mitsubishi.jpg' },
    { name: 'Nissan', url: 'https://tagoreautoparts.com/img/Brand/nissan.jpg' },
    { name: 'Scion', url: 'https://tagoreautoparts.com/img/Brand/Scion.jpg' },
  ];

  const usps = [
    {
      icon: ShieldCheck,
      title: 'Genuine Quality',
      description: 'OE standard or better. Every part is verified.',
    },
    {
      icon: Truck,
      title: 'Fast Dispatch',
      description: 'Most orders ship same day from our warehouse.',
    },
    {
      icon: Wrench,
      title: 'Expert Fitment',
      description: 'Expert phone support to ensure correct parts.',
    },
    {
      icon: Award,
      title: 'Warranty Support',
      description: '6-18 month warranties on all parts.'
    },
  ];

  const testimonials = [
    {
      name: 'Olivia',
      rating: 5,
      comment: 'Hyy this is Olivia. I bought an engine from Tagore Auto Parts and it\'s been running like a dream. The quality and service were excellent, and definitely worth the investment',
    },
    {
      name: 'Michael Chen',
      rating: 5,
      comment: 'Outstanding service! The transmission I ordered was delivered quickly and installed perfectly. The team was incredibly helpful throughout the entire process.',
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'I was skeptical about buying auto parts online, but AutoSalvage exceeded all my expectations. The quality is top-notch and the customer support is amazing!',
    },
    {
      name: 'David Rodriguez',
      rating: 5,
      comment: 'Best experience ever! They helped me find the exact engine I needed for my truck. Installation was smooth and it runs like new. Highly recommend!',
    },
  ];

  const faqs = [
    {
      question: 'Are these genuine OE parts?',
      answer: 'Yes, we source all parts from OE manufacturers or authorized aftermarket suppliers that meet or exceed OE standards.',
    },
    {
      question: 'Do you offer warranties?',
      answer: 'All parts come with manufacturer warranties ranging from 6 to 18 months depending on the product category.',
    },
    {
      question: 'How quickly do you ship?',
      answer: 'Most in-stock parts ship the same day if ordered before 3 PM EST. Delivery typically takes 7-14 business days depending on your location.',
    },
    {
      question: 'What if the part doesn\'t fit my vehicle?',
      answer: 'We provide detailed compatibility information and expert fitment advice. If there\'s an issue, contact us immediately and we\'ll help resolve it.',
    },
    {
      question: 'Can I return a part?',
      answer: 'Unused parts in original packaging can be returned within 7 days. Installation labor and shipping costs are not covered.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
  <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://t3.ftcdn.net/jpg/06/42/15/52/360_F_642155259_wkEIRRSocT0VH4W8E7lneTiywgwJcvFc.jpg  "
            alt="Modern auto parts warehouse with automotive components"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-20 w-24 h-24 border border-white/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-20 w-16 h-16 border border-white/20 rounded-full animate-pulse delay-500"></div>
        </div>

        {/* Floating Auto Parts Images */}
        <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-20 h-20 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Brake disc"
              className="w-12 h-12 object-cover rounded"
            />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Air filter"
              className="w-10 h-10 object-cover rounded"
            />
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 8, 0]
            }}
            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
            className="absolute top-2/3 right-1/3 w-18 h-18 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
              alt="Engine oil bottles"
              className="w-12 h-12 object-cover rounded"
            />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start min-h-screen pt-4 sm:pt-8 pb-16 sm:pb-20">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-6 sm:space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full text-sm font-medium"
                >
                  <Award className="w-4 h-4" />
                  Trusted Since 2012 • 25,000+ Happy Customers
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                >
                  Premium
                  <span className="block text-primary font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Auto Parts
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-white/90">
                    Delivered Fast
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl"
                >
                  Get genuine OE quality parts for all Indian car brands. 
                  <span className="text-accent font-semibold"> Same-day dispatch</span> with expert fitment support.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <Button asChild className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-primary hover:bg-primary/90 text-white transform hover:scale-105 transition-all duration-200 shadow-xl">
                  <Link to="/shop" className="flex items-center gap-2 sm:gap-3 justify-center">
                    <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                    Browse Catalog
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </Link>
                </Button>
                <Button asChild className="text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 bg-white/10 hover:bg-white/20 border-white/30 text-white backdrop-blur-sm transform hover:scale-105 transition-all duration-200">
                  <Link to="/contact" className="flex items-center gap-2 sm:gap-3 justify-center">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    Contact Us
                  </Link>
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-white/20"
              >
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">1000+</div>
                  <div className="text-xs sm:text-sm text-white/80">Parts in Stock</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">25K+</div>
                  <div className="text-xs sm:text-sm text-white/80">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">13+</div>
                  <div className="text-xs sm:text-sm text-white/80">Years Experience</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive Elements */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4 sm:space-y-6"
            >
              {/* Quick Search Card */}
              <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <CardContent className="p-6 sm:p-8">
                  <div className="text-center mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Find Your Part</h3>
                    <p className="text-sm sm:text-base text-gray-600">Quick search by vehicle or part</p>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <select className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base">
                      <option>Select Vehicle Brand</option>
                      <option>Chevrolet</option>
                      <option>Dodge</option>
                      <option>Ford</option>
                      <option>GMC</option>
                      <option>Honda</option>
                      <option>Jeep</option>
                      <option>Mitsubishi</option>
                      <option>Nissan</option>
                      <option>Scion</option>
                    </select>
                    <select className="w-full p-3 sm:p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base">
                      <option>Select Part Category</option>
                      <option>Engines</option>
                      <option>Transmission</option>
                      <option>Others</option>
                    </select>
                    <Button asChild className="w-full h-10 sm:h-12 text-base sm:text-lg">
                      <Link to="/contact">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Get Quote Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Feature Highlights with Auto Parts Images */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-16 sm:h-20 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Brake discs and pads"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20"></div>
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-1 sm:mb-2" />
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Genuine Quality</h4>
                    <p className="text-xs text-gray-600">OE Standard Parts</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-16 sm:h-20 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                      alt="Auto parts delivery truck"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-primary/20"></div>
                  </div>
                  <div className="p-3 sm:p-4 text-center">
                    <Truck className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-1 sm:mb-2" />
                    <h4 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">Fast Shipping</h4>
                    <p className="text-xs text-gray-600">Same Day Dispatch</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">POPULAR CATEGORIES</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {popularCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={category.link}>
                  <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
                    <div className="relative h-48 overflow-hidden bg-gray-100">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>
                    <CardContent className="p-6 text-center bg-white">
                      <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Slider */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Products</h2>
            <p className="text-muted-foreground text-lg">Quality auto parts trusted by thousands</p>
          </motion.div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProducts.slice(0, 8).map((product, index) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={`/product/${product.slug}`}>
                    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Badge */}
                      {index === 0 && (
                        <Badge className="absolute top-4 left-4 z-10 bg-red-600 text-white">
                          BEST SELLING
                        </Badge>
                      )}
                      {index === 2 && (
                        <Badge className="absolute top-4 left-4 z-10 bg-red-600 text-white">
                          -30%
                        </Badge>
                      )}
                      {index === 1 && (
                        <Badge className="absolute top-4 left-4 z-10 bg-gray-700 text-white">
                          BEST SELLING
                        </Badge>
                      )}
                      {index === 3 && (
                        <Badge className="absolute top-4 left-4 z-10 bg-blue-600 text-white">
                          NEW
                        </Badge>
                      )}

                      {/* Heart Icon */}
                      <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>

                      {/* Product Image */}
                      <div className="relative h-64 overflow-hidden bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/300x300?text=' + product.name.substring(0, 20);
                          }}
                        />
                      </div>

                      <CardContent className="p-4 bg-white border-t">
                        {/* Category Badge */}
                        <div className="mb-2">
                          <Badge className="text-xs font-medium text-primary border-primary border">
                            {index === 0 || index === 3 ? 'TOPSHOP' : index === 1 ? 'BEST SELLING' : 'NEW'}
                          </Badge>
                        </div>

                        {/* Product Name */}
                        <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
                          {product.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-baseline gap-2">
                            {index === 2 ? (
                              <>
                                <span className="text-red-600 font-bold text-lg">
                                  ${Math.round(product.price * 0.7)}
                                </span>
                                <span className="text-gray-400 line-through text-sm">
                                  ${product.price}
                                </span>
                              </>
                            ) : (
                              <span className="text-gray-900 font-bold text-lg">
                                ${product.price}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                          Place an order
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>

          {/* View All Button */}
          <div className="relative">
            <div className="text-center mt-8">
              <Button asChild className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-6">
                <Link to="/shop">
                  View All Products
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-accent/80 text-primary-foreground py-3 sm:py-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center"
          >
            <Tag className="w-5 h-5 sm:w-6 sm:h-6" />
            <p className="text-sm sm:text-base lg:text-lg font-semibold">
              Limited Time Offer: Get 10% off on all brake parts! Shop now to order.
            </p>
            <Button asChild className="mt-2 sm:mt-0 bg-secondary hover:bg-secondary/90 text-secondary-foreground px-4 py-2">
              <Link to="/shop">
                <Package className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                Shop Now
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <usp.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold text-lg mb-2">{usp.title}</h3>
                    <p className="text-sm text-muted-foreground">{usp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Product Slider */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Brands Product</h2>
            <p className="text-muted-foreground text-lg">Explore our wide range of quality products</p>
          </motion.div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {productsData.filter(p => p.category === 'Others').map((product, index) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Link to={`/product/${product.slug}`}>
                    <Card className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                      {/* Badge */}
                      {index % 4 === 0 && (
                        <Badge className="absolute top-4 left-4 z-10 bg-gray-700 text-white">
                          TOPSHOP
                        </Badge>
                      )}
                      {index % 4 === 1 && (
                        <Badge className="absolute top-4 left-4 z-10 bg-red-600 text-white">
                          BEST SELLING
                        </Badge>
                      )}
                      {index % 4 === 2 && (
                        <Badge className="absolute top-4 left-4 z-10 bg-red-600 text-white">
                          -30%
                        </Badge>
                      )}
                      {index % 4 === 3 && (
                        <Badge className="absolute top-4 left-4 z-10 bg-blue-600 text-white">
                          New
                        </Badge>
                      )}

                      {/* Heart Icon */}
                      <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>

                      {/* Product Image */}
                      <div className="relative h-64 overflow-hidden bg-white">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/300x300?text=' + product.name.substring(0, 20);
                          }}
                        />
                      </div>

                      <CardContent className="p-4 bg-white border-t">
                        {/* Category Badge */}
                        <div className="mb-2">
                          <Badge className="text-xs font-medium text-primary border-primary border">
                            {index % 4 === 0 ? 'TOPSHOP' : index % 4 === 1 ? 'BEST SELLING' : index % 4 === 2 ? 'TOPSHOP' : 'TOPSHOP'}
                          </Badge>
                        </div>

                        {/* Product Name */}
                        <h3 className="text-base font-semibold text-gray-900 mb-3 line-clamp-2 min-h-[3rem]">
                          {product.name}
                        </h3>

                        {/* Price */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-baseline gap-2">
                            {index % 4 === 2 ? (
                              <>
                                <span className="text-red-600 font-bold text-lg">
                                  ${Math.round(product.price * 0.7)}
                                </span>
                                <span className="text-gray-400 line-through text-sm">
                                  ${product.price}
                                </span>
                              </>
                            ) : (
                              <>
                                <span className="text-gray-400 line-through text-sm">
                                  ${Math.round(product.price * 1.4)}
                                </span>
                                <span className="text-red-600 font-bold text-lg">
                                  ${product.price}
                                </span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Action Button */}
                        <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                          Place an order
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 md:-left-12" />
            <CarouselNext className="-right-4 md:-right-12" />
          </Carousel>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Latest from Our Blog</h2>
            <p className="text-foreground/70 text-lg">Expert insights and tips for your vehicle</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogsData.slice(0, 3).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${blog.slug}`}>
                  <Card className="h-full flex flex-col overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                        {blog.category}
                      </Badge>
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-6">
              <Link to="/blog" className="flex items-center gap-2">
                View All Articles
                <ChevronRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Compatible with Popular Brands</h2>
            <p className="text-gray-300 text-lg">Quality parts for all major automobile manufacturers</p>
          </motion.div>
          
          {/* Infinite scrolling logo strip */}
          <div className="relative">
            <style dangerouslySetInnerHTML={{__html: `
              @keyframes scroll-brands {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-scroll {
                animation: scroll-brands 30s linear infinite;
              }
              .animate-scroll:hover {
                animation-play-state: paused;
              }
            `}} />
            
            <div className="overflow-hidden py-8">
              <div className="flex animate-scroll" style={{ width: 'fit-content' }}>
                {/* Double the logos for seamless loop */}
                {[...brandLogos, ...brandLogos].map((brand, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 mx-6 md:mx-8 lg:mx-12"
                  >
                    <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-red-50 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                      <img
                        src={brand.url}
                        alt={brand.name}
                        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>



          {/* Brand Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-red-500 mb-2">9+</div>
                <div className="text-sm text-gray-300">Major Brands Supported</div>
              </div>
              <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-red-500 mb-2">150+</div>
                <div className="text-sm text-gray-300">Vehicle Models Covered</div>
              </div>
              <div className="p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-red-500 mb-2">5000+</div>
                <div className="text-sm text-gray-300">Parts in Stock</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Special Offers</h2>
            <p className="text-muted-foreground">Limited time deals on premium auto parts</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all border-primary/20">
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">10% OFF</Badge>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Package className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-center">Brake Parts Special</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Get 10% discount on all brake pads, discs, and kits this month.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/shop">
                      <Package className="w-4 h-4 mr-2" />
                      Shop Now
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all border-primary/20">
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">BULK ORDERS</Badge>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-center">Bulk Order Benefits</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Receive genuine parts at your doorstep within 7-14 business days. Same-day dispatch guaranteed.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="relative overflow-hidden hover:shadow-xl transition-all border-primary/20">
                <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">EXTENDED</Badge>
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2 text-center">18-Month Warranty</h3>
                  <p className="text-muted-foreground text-center mb-4">
                    Extended warranty on select suspension and engine parts.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/shop">
                      <Package className="w-4 h-4 mr-2" />
                      View Products
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Automotive Excellence Features */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Automotive Excellence</h2>
            <p className="text-gray-300 text-lg">Premium quality parts with cutting-edge technology</p>
          </motion.div>
          
          <div className="grid gap-10 max-w-7xl mx-auto">
            {/* First Row - Two Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://atozautopartsindia.com/cdn/shop/files/h4c2-sc-spotlight2-1_785x.jpg?v=1692558101"
                    alt="Advanced automotive technology"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">BLEEDING EDGE TECHNOLOGY</h3>
                    <p className="text-base md:text-lg text-gray-300">Advanced engineering for superior performance</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://atozautopartsindia.com/cdn/shop/files/h4c2-sc-spotlight2-2_785x.jpg?v=1692558101"
                    alt="Stylish automotive headlights"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">STYLISH HEADLIGHTS</h3>
                    <p className="text-base md:text-lg text-gray-300">Premium lighting solutions for enhanced visibility</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Second Row - Large Center Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group cursor-pointer"
            >
              <div className="relative min-h-[26rem] md:min-h-[36rem] lg:min-h-[4rem] rounded-xl overflow-hidden">
                <img
                  src="https://atozautopartsindia.com/cdn/shop/files/front-view-black_1570x.jpg?v=1695814369"
                  alt="High-performance muscle car"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                  <h3 className="text-5xl md:text-6xl font-bold mb-4">FABRICATED MUSCLE</h3>
                  <p className="text-2xl md:text-3xl text-gray-300 mb-6">Precision-engineered performance parts for maximum power</p>
                  <Button className="bg-primary hover:bg-primary/90 text-white text-xl h-14 px-10">
                    Explore Performance Parts
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Third Row - Two Cards Side by Side */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://atozautopartsindia.com/cdn/shop/files/h4c2-sc-spotlight2-4_785x.jpg?v=1692558102"
                    alt="Robust car engine components"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">ROBUST CAR ENGINE</h3>
                    <p className="text-base md:text-lg text-gray-300">High-performance engine parts & components</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 rounded-xl overflow-hidden">
                  <img
                    src="https://atozautopartsindia.com/cdn/shop/files/h4c2-sc-spotlight2-4_785x.jpg?v=1692558102"
                    alt="Carbon fiber exhaust system"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">CARBON FIBER EXHAUST</h3>
                    <p className="text-base md:text-lg text-gray-300">Lightweight, high-performance exhaust systems</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground">Simple process to get genuine auto parts</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold">
                1
              </div>
              <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">Call Us</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                Call our experts with your vehicle details and part requirements
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold">
                2
              </div>
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">Verify Fitment</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                We confirm the exact part for your vehicle model and year
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold">
                3
              </div>
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">Quick Dispatch</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                Same-day shipping from our warehouse for in-stock items
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl sm:text-2xl font-bold">
                4
              </div>
              <Truck className="w-8 h-8 sm:w-10 sm:h-10 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-base sm:text-lg mb-2">Fast Delivery</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                Receive genuine parts at your doorstep within 2-5 business days
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Facility</h2>
            <p className="text-muted-foreground">State-of-the-art warehouse and quality assurance</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={warehouseImg}
                alt="Modern auto parts warehouse with organized inventory"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-secondary-foreground">
                  <h3 className="font-heading font-semibold text-xl mb-1">Modern Warehouse</h3>
                  <p className="text-sm text-secondary-foreground/80">1000+ parts in organized stock</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={qualityCheckImg}
                alt="Quality inspection of automotive parts"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-secondary-foreground">
                  <h3 className="font-heading font-semibold text-xl mb-1">Quality Assurance</h3>
                  <p className="text-sm text-secondary-foreground/80">Every part verified before dispatch</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={installationImg}
                alt="Professional mechanic installing auto parts"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-secondary-foreground">
                  <h3 className="font-heading font-semibold text-xl mb-1">Expert Installation</h3>
                  <p className="text-sm text-secondary-foreground/80">Receive genuine parts at your doorstep within 7-14 business days</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={deliveryImg}
                alt="Fast delivery of auto parts across India"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-6">
                <div className="text-secondary-foreground">
                  <h3 className="font-heading font-semibold text-xl mb-1">Fast Delivery</h3>
                  <p className="text-sm text-secondary-foreground/80">Pan-India shipping in 2-5 days</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                Every part sourced from trusted OE manufacturers. No compromises on quality.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Ready Stock</h3>
              <p className="text-muted-foreground">
                1000+ parts in stock. Same-day dispatch for most orders placed before 3 PM.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Call us anytime during business hours. Our team helps you find the right part.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm font-semibold text-gray-600 tracking-wider uppercase mb-2">CUSTOMER SAY</p>
            <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">TESTIMONIAL</h2>
          </motion.div>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="p-4"
                  >
                    <Card className="border-0 shadow-2xl bg-white rounded-3xl">
                      <CardContent className="p-8 md:p-12 text-center">
                        {/* 5 Star Rating */}
                        <div className="flex justify-center gap-2 mb-8">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-8 h-8 fill-yellow-400" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                          "{testimonial.comment}"
                        </p>

                        {/* Author Name */}
                        <div className="border-t border-gray-200 pt-6">
                          <p className="text-xl font-bold text-gray-900">{testimonial.name}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-12 bg-white shadow-lg hover:bg-gray-100" />
            <CarouselNext className="right-0 md:-right-12 bg-white shadow-lg hover:bg-gray-100" />
          </Carousel>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </motion.div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                  <AccordionTrigger className="hover:no-underline">
                    <span className="font-semibold text-left">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need help finding the right part?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90">
              Our experts are ready to assist you. Receive genuine parts at your doorstep within 7-14 business days.
            </p>
            <Button asChild className="text-lg bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6">
              <Link to="/contact" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
