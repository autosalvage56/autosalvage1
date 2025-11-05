import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    vehicle: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) {
      toast.error('Phone number is required');
      return;
    }
    toast.success('Thank you! We will get back to you shortly.');
    setFormData({ name: '', phone: '', vehicle: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-secondary text-secondary-foreground py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Get in Touch</h1>
            <p className="text-base sm:text-lg text-secondary-foreground/80">
              Have questions? We're here to help you find the right parts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 lg:col-span-1"
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2" />
                  <CardTitle className="text-base sm:text-lg">Phone</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Coming Soon
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2" />
                  <CardTitle className="text-base sm:text-lg">Email</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <a href="mailto:hello@autosalvage.com" className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors break-all">
                    hello@autosalvage.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-primary mb-2" />
                  <CardTitle className="text-base sm:text-lg">Hours</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mon–Sat: 9:30 am–7:30 pm<br />
                    Sun: Closed
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91-XXXXX-XXXXX"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="vehicle" className="block text-sm font-medium mb-2">
                      Vehicle Model/Year
                    </label>
                    <Input
                      id="vehicle"
                      type="text"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      placeholder="e.g., Maruti Swift 2020"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you need..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
