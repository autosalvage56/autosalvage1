import { motion } from 'framer-motion';

const Terms = () => {
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
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-slate max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Terms and Conditions</h2>
              <p className="text-muted-foreground mb-4">
                By accessing this website we assume you accept these terms and conditions. Do not continue to use AutoSalvage if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              <p className="text-muted-foreground">
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of United States. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                We employ the use of cookies. By accessing AutoSalvage, you agreed to use cookies in agreement with the AutoSalvage Privacy Policy.
              </p>
              <p className="text-muted-foreground">
                Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. License</h2>
              <p className="text-muted-foreground mb-4">
                Unless otherwise stated, AutoSalvage and/or its licensors own the intellectual property rights for all material on AutoSalvage. All intellectual property rights are reserved. You may access this from AutoSalvage for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              <p className="text-muted-foreground mb-2">You must not:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Republish material from AutoSalvage</li>
                <li>Sell, rent or sub-license material from AutoSalvage</li>
                <li>Reproduce, duplicate or copy material from AutoSalvage</li>
                <li>Redistribute content from AutoSalvage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Hyperlinking to our Content</h2>
              <p className="text-muted-foreground mb-2">The following organizations may link to our Website without prior written approval:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>Government agencies;</li>
                <li>Search engines;</li>
                <li>News organizations;</li>
                <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
              </p>
              <p className="text-muted-foreground mb-2">We may consider and approve other link requests from the following types of organizations:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>commonly-known consumer and/or business information sources;</li>
                <li>dot.com community sites;</li>
                <li>associations or other groups representing charities;</li>
                <li>online directory distributors;</li>
                <li>internet portals;</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations.</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of AutoSalvage; and (d) the link is in the context of general resource information.
              </p>
              <p className="text-muted-foreground mb-4">
                These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
              </p>
              <p className="text-muted-foreground mb-4">
                If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to AutoSalvage. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
              </p>
              <p className="text-muted-foreground mb-2">Approved organizations may hyperlink to our Website as follows:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                <li>By use of our corporate name; or</li>
                <li>By use of the uniform resource locator being linked to; or</li>
                <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
              </ul>
              <p className="text-muted-foreground">
                No use of AutoSalvage logo or other artwork will be allowed for linking absent a trademark license agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. iFrames</h2>
              <p className="text-muted-foreground">
                Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Content Liability</h2>
              <p className="text-muted-foreground">
                We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Reservation of Rights</h2>
              <p className="text-muted-foreground">
                We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Removal of links from our website</h2>
              <p className="text-muted-foreground mb-4">
                If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
              </p>
              <p className="text-muted-foreground">
                We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">9. Disclaimer</h2>
              <p className="text-muted-foreground mb-2">
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>limit or exclude our or your liability for death or personal injury;</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
