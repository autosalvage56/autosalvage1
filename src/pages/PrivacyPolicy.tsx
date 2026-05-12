import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Privacy Policy</h2>
              <p className="text-muted-foreground">
                AutoSalvage, accessible from <a href="https://auttosalvage.com" className="text-primary hover:underline">www.auttosalvage.com</a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by AutoSalvage and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Log Files</h2>
              <p className="text-muted-foreground">
                AutoSalvage follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and are a part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is to analyze trends, administer the site, track users' movement on the website, and gather demographic information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Cookies and Web Beacons</h2>
              <p className="text-muted-foreground">
                Like any other website, AutoSalvage uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Privacy Policies</h2>
              <p className="text-muted-foreground mb-4">
                You may consult this list to find the Privacy Policy for each of the advertising partners of AutoSalvage.
              </p>
              <p className="text-muted-foreground">
                Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on AutoSalvage, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
              </p>
              <p className="text-muted-foreground mt-4">
                Note that AutoSalvage has no access to or control over these cookies that are used by third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Third Party Privacy Policies</h2>
              <p className="text-muted-foreground mb-4">
                AutoSalvage Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>
              <p className="text-muted-foreground">
                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Children's Information</h2>
              <p className="text-muted-foreground mb-4">
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
              </p>
              <p className="text-muted-foreground">
                AutoSalvage does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Online Privacy Policy Only</h2>
              <p className="text-muted-foreground">
                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in AutoSalvage. This policy is not applicable to any information collected offline or via channels other than this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Compliance Policy</h2>
              <p className="text-muted-foreground">
                We at AutoSalvage are dedicated to ensuring the security and privacy of the individual data we receive. What specific data we gathers, process, and manage is laid out in this privacy statement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Collection of Personal Information</h2>
              <p className="text-muted-foreground">
                When you access our services, we may collect personal data from you, like your name, address, phone number, and email address. The information is acquired voluntarily, through contacts with our website or customer service agents, or both, and is used entirely to provide and enhance our services. You can be sure that all data we collect will be kept absolutely private and won't ever be shared with third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">10. Usage of Personal Information</h2>
              <p className="text-muted-foreground mb-4">
                Shipping, maintaining client relations, and order processing all demand personal information. We can also use this data to speed up our business processes provide permission-based updates or promotional materials, and enhance user experiences. We handle personal information in order to process orders, get in touch consumers, and provide support. Similarly, we have the right to use your information to send out news or promotional materials, improve user experiences, and improve our services.
              </p>
              <p className="text-muted-foreground mb-4">
                We take reasonable measures to protect the security of your personal information and prevent unauthorized access, disclosure, or alteration. No mobile information will be shared with third parties/affiliates for marketing/promotional purposes; all the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties'.
              </p>
              <p className="text-muted-foreground">
                At our company, we are committed to protecting the privacy and security of our clients' personal information. This Privacy Policy outlines how we collect, use, and safeguard your personal data. Rest assured that any data gathered by us will remain strictly confidential and will not be disclosed to any third party under any circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">11. Consent</h2>
              <p className="text-muted-foreground">
                The way you use our website confirms a binding commitment to the Terms and Conditions of our Privacy Policy.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
