import { motion } from 'framer-motion';
import { Truck, Package, Globe, MapPin, Clock } from 'lucide-react';

const Shipping = () => {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Truck className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Shipping & Delivery</h1>
          </div>
          <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Package className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">1. Information on Delivery and Shipping</h2>
                  <p className="text-muted-foreground">
                    Our aim is to provide you with the best experience possible each and every time you buy at AutoSalvage. We acknowledge that getting your order quickly and safely is important to you.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">2. Shipping Rates</h2>
                  <p className="text-muted-foreground">
                    The shipping charges will vary depending on the package's weight and the delivery option you choose. For finding out the shipping cost, just add the items you want to add to the cart and check out. As soon as you enter your mailing address, you will be shown your delivery options and costs.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">3. Delivery Options</h2>
                  <p className="text-muted-foreground mb-4">
                    We give a range of delivery choices to satisfy your needs. Standard shipping, expedited shipping, or express delivery are the options available to you. How soon your order arrives depends depend on the shipping option you select.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Standard Shipping:</strong> Usually takes 7-14 business days</li>
                    <li><strong>Expedited Shipping:</strong> 2-3 business days</li>
                    <li><strong>Express Delivery:</strong> 1-2 business days</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-3 mb-4">
                <Globe className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">4. International Shipping</h2>
                  <p className="text-muted-foreground mb-4">
                    We don't currently offer shipping to other countries. We only deliver to addresses located in the US.
                  </p>
                  <p className="text-muted-foreground">
                    Please contact us if you have any issues concerning shipment.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-3 mb-4">
                <Truck className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">5. Delivery Information</h2>
                  <p className="text-muted-foreground mb-4">
                    Customers will receive a tracking number when your order ships, which you may use to follow your shipment. Depending on your preferred shipping method, you may monitor your shipment on the websites of UPS, FedEx, or the USPS.
                  </p>
                  <p className="text-muted-foreground">
                    For any inquiries concerning your order or delivery, kindly reach out to AutoSalvage through our contact page.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Shipping;
