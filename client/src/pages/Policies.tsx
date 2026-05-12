/*
 * TideRush Surf Co. — Policy Pages
 * Shipping, Returns & Refunds, Privacy Policy, Terms of Service
 */
import { motion } from "framer-motion";

function PolicyLayout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <section className="bg-sand py-12 md:py-16">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-4xl md:text-5xl text-ocean"
          >
            {title}
          </motion.h1>
        </div>
      </section>
      <section className="py-16">
        <div className="container max-w-3xl">
          <div className="prose prose-lg max-w-none font-body text-ocean/70 leading-relaxed [&_h2]:font-display [&_h2]:font-bold [&_h2]:text-ocean [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-display [&_h3]:font-semibold [&_h3]:text-ocean [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-3 [&_ul]:space-y-2 [&_li]:pl-0 [&_strong]:text-ocean">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping Policy">
      <p>Last updated: May 2026</p>

      <h2>Domestic Shipping (United States)</h2>
      <p>We offer several shipping options to get your surf gear to you as quickly as possible:</p>
      <ul>
        <li><strong>Standard Shipping (5-7 business days):</strong> Free on orders over $100. $7.99 for orders under $100.</li>
        <li><strong>Expedited Shipping (2-3 business days):</strong> $12.99</li>
        <li><strong>Express Overnight (1 business day):</strong> $24.99</li>
      </ul>

      <h2>Order Processing</h2>
      <p>All orders are processed within 1-2 business days (Monday through Friday, excluding holidays). You will receive a shipping confirmation email with tracking information once your order has shipped.</p>

      <h2>Surfboard Shipping</h2>
      <p>Due to their size, surfboards require special handling and may take an additional 1-2 business days to process. Surfboards are shipped via freight carrier with signature required upon delivery. We carefully package each board with protective foam and a reinforced shipping box to ensure it arrives in perfect condition.</p>

      <h2>International Shipping</h2>
      <p>We currently ship to Canada, Australia, United Kingdom, Germany, France, and Japan. International shipping rates and delivery times vary by destination. Please note that international orders may be subject to customs duties and import taxes, which are the responsibility of the buyer.</p>

      <h2>Tracking Your Order</h2>
      <p>Once your order ships, you'll receive an email with a tracking number. You can track your package in real-time through our shipping partner's website. If you have any questions about your shipment, please contact us at hello@tiderush.com.</p>
    </PolicyLayout>
  );
}

export function ReturnsPolicy() {
  return (
    <PolicyLayout title="Returns & Refund Policy">
      <p>Last updated: May 2026</p>

      <h2>Our Guarantee</h2>
      <p>We want you to be completely satisfied with your TideRush purchase. If for any reason you're not happy with your order, we offer a straightforward return process.</p>

      <h2>Return Window</h2>
      <ul>
        <li><strong>Apparel & Accessories:</strong> 30 days from delivery date</li>
        <li><strong>Surfboards:</strong> 14 days from delivery date (must be unused and in original packaging)</li>
        <li><strong>Eyewear:</strong> 30 days from delivery date</li>
      </ul>

      <h2>Return Conditions</h2>
      <p>Items must be unused, unworn, and in their original packaging with all tags attached. Items that show signs of use, wear, or damage caused by the customer cannot be returned.</p>

      <h2>How to Return</h2>
      <p>To initiate a return, please email hello@tiderush.com with your order number and reason for return. Our team will provide you with a return shipping label and instructions within 24 hours.</p>

      <h2>Refund Process</h2>
      <p>Once we receive and inspect your return, we'll process your refund within 3-5 business days. Refunds are issued to the original payment method. Please allow an additional 5-10 business days for the refund to appear on your statement.</p>

      <h2>Exchanges</h2>
      <p>Need a different size or color? We're happy to help with exchanges. Contact us and we'll arrange the swap — exchanges ship free within the US.</p>

      <h2>Defective Items</h2>
      <p>If you receive a defective or damaged item, please contact us immediately with photos. We'll send a replacement at no cost and provide a free return label for the defective item.</p>
    </PolicyLayout>
  );
}

export function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>Last updated: May 2026</p>

      <h2>Information We Collect</h2>
      <p>When you visit our store, we collect certain information about your device, your interaction with the store, and information necessary to process your purchases. We may also collect additional information if you contact us for customer support.</p>

      <h3>Personal Information</h3>
      <p>When you make a purchase, we collect your name, billing address, shipping address, payment information (including credit card numbers), email address, and phone number.</p>

      <h3>Device Information</h3>
      <p>We automatically collect certain information about your device, including your web browser, IP address, time zone, and some of the cookies installed on your device.</p>

      <h2>How We Use Your Information</h2>
      <p>We use the information we collect to fulfill orders, process payments, communicate with you about your orders, screen for potential risk or fraud, and provide you with information or advertising relating to our products or services (with your consent).</p>

      <h2>Sharing Your Information</h2>
      <p>We share your personal information with third parties to help us use your personal information, as described above. We use payment processors to process your payments securely. We also use analytics services to help us understand how our customers use the store.</p>

      <h2>Your Rights</h2>
      <p>If you are a resident of California, you have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. To exercise these rights, please contact us at privacy@tiderush.com.</p>

      <h2>Data Retention</h2>
      <p>When you place an order through the store, we will maintain your order information for our records unless and until you ask us to delete this information.</p>

      <h2>Contact</h2>
      <p>For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at privacy@tiderush.com or by mail at: TideRush Surf Co., Encinitas, CA 92024.</p>
    </PolicyLayout>
  );
}

export function TermsOfService() {
  return (
    <PolicyLayout title="Terms of Service">
      <p>Last updated: May 2026</p>

      <h2>Overview</h2>
      <p>This website is operated by TideRush Surf Co. Throughout the site, the terms "we", "us" and "our" refer to TideRush Surf Co. By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions.</p>

      <h2>Online Store Terms</h2>
      <p>By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose, nor may you violate any laws in your jurisdiction.</p>

      <h2>General Conditions</h2>
      <p>We reserve the right to refuse service to anyone for any reason at any time. Your content (not including credit card information) may be transferred unencrypted and involve transmissions over various networks. Credit card information is always encrypted during transfer over networks.</p>

      <h2>Accuracy of Information</h2>
      <p>We are not responsible if information made available on this site is not accurate, complete, or current. The material on this site is provided for general information only and should not be relied upon as the sole basis for making decisions.</p>

      <h2>Pricing</h2>
      <p>Prices for our products are subject to change without notice. We reserve the right to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.</p>

      <h2>Products</h2>
      <p>Certain products may be available exclusively online through the website. These products may have limited quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.</p>

      <h2>Contact Information</h2>
      <p>Questions about the Terms of Service should be sent to us at legal@tiderush.com.</p>
    </PolicyLayout>
  );
}
