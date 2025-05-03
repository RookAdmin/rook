
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white text-textPrimary pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <div className="h-1 w-20 bg-black mb-6"></div>
          <h1 className="text-5xl font-bold mb-6 text-black tracking-tight animate-fade-up">
            Terms and Conditions
          </h1>
          <p className="text-xl text-textSecondary max-w-3xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Last updated: April 30, 2025
          </p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-lg max-w-4xl mb-16 text-textSecondary">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">1. Introduction</h2>
            <p>
              Welcome to Rook ("Company", "we", "our", "us"). These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at <span className="font-semibold">www.rookhq.com</span> (together or individually "Service") operated by Rook.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound by them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at <span className="font-semibold">support@rookhq.com</span> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">2. Communications</h2>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at <span className="font-semibold">support@rookhq.com</span>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">3. Purchases</h2>
            <p>
              If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including, without limitation, your credit card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p>
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p>
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
            </p>
            <p>
              We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">4. Contests, Sweepstakes and Promotions</h2>
            <p>
              Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">5. Refunds</h2>
            <p>
              We issue refunds for Contracts within 30 days of the original purchase of the Contract.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">6. Content</h2>
            <p>
              Content found on or through this Service are the property of Rook or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">7. Prohibited Uses</h2>
            <p>
              You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4 text-black">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <ul className="list-none space-y-1 mt-4">
              <li><span className="font-semibold">Email:</span> legal@rookhq.com</li>
              <li><span className="font-semibold">Phone:</span> (555) 123-4567</li>
              <li>
                <span className="font-semibold">Address:</span> 123 Innovation Way, San Francisco, CA 94103, USA
              </li>
            </ul>
          </section>
        </div>

        {/* CTA Section */}
        <div className="border border-black/10 bg-white p-10 rounded-lg shadow-sm mt-10">
          <div className="h-1 w-20 bg-black mb-6"></div>
          <h3 className="text-2xl font-bold mb-3 text-black">Have Questions About Our Terms?</h3>
          <p className="text-textSecondary mb-6 max-w-2xl">
            Our team is ready to help clarify any aspects of our terms and conditions. Feel free to reach out with any questions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-black text-white hover:bg-black/90 transition-colors">
              Contact Support
            </Button>
            <Link to="/privacy">
              <Button variant="outline" className="border-black text-black hover:bg-black/5">
                View Privacy Policy
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
