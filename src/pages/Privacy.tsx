import React from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileLock } from "lucide-react";

const Privacy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Rook Privacy Policy",
    "description": "Learn how Rook protects and handles your personal information. Read our comprehensive privacy policy regarding data collection, usage, and protection.",
    "url": "https://rookhq.com/privacy"
  };

  return (
    <>
      <SEO
        title="Privacy Policy | Rook - Data Protection & Privacy Policy - DPDP Act Compliant"
        description="Learn how Rook protects and handles your personal information. Read our comprehensive privacy policy regarding data collection, usage, and protection. DPDP Act compliant, GDPR aligned, data security."
        keywords="Rook privacy policy, privacy policy, data protection, personal information, data security, DPDP Act, GDPR, data privacy, privacy rights, data collection"
        canonical="/privacy"
        geoRegion="IN"
        geoPlacename="India"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-white text-textPrimary pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <div className="h-1 w-20 bg-black mb-6"></div>
            <h1 className="text-5xl font-bold mb-6 text-black tracking-tight animate-fade-up">
              Privacy Policy
            </h1>
            <p
              className="text-xl text-textSecondary max-w-3xl animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              Last updated: April 30, 2025
            </p>
          </div>

          {/* Privacy Content */}
          <div className="prose prose-lg max-w-4xl mb-16 text-textSecondary">
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                1. Introduction
              </h2>
              <p>
                At Rook ("we," "our," or "us"), we respect your privacy and are
                committed to protecting it through our compliance with this
                policy. This Privacy Policy describes how we collect, use,
                store, and share your information when you use our services,
                website, and applications (collectively, our "Services").
              </p>
              <p>
                Please read this policy carefully to understand our policies and
                practices regarding your information. By accessing or using our
                Services, you agree to this Privacy Policy. If you do not agree
                with our policies and practices, you should not use our
                Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                2. Information We Collect
              </h2>
              <p>
                We collect several types of information from and about users of
                our Services, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <span className="font-semibold">Personal Information:</span>{" "}
                  This includes information by which you may be personally
                  identified, such as name, email address, postal address,
                  telephone number, and payment information.
                </li>
                <li>
                  <span className="font-semibold">Usage Information:</span>{" "}
                  Details of your visits to our Services, including traffic
                  data, location data, logs, and other communication data and
                  the resources that you access and use on the Services.
                </li>
                <li>
                  <span className="font-semibold">Device Information:</span>{" "}
                  Information about your computer, mobile device, and internet
                  connection, including your IP address, operating system,
                  browser type, and device identifiers.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                3. How We Collect Information
              </h2>
              <p>
                We collect information from you when you provide it to us
                directly, and automatically as you navigate through our
                Services. Information collection methods include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  Direct interactions when you fill in forms, create an account,
                  or correspond with us.
                </li>
                <li>
                  Automated technologies such as cookies, web beacons, and
                  similar tracking technologies.
                </li>
                <li>
                  Third parties, such as our business partners, analytics
                  providers, and advertising networks.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                4. How We Use Your Information
              </h2>
              <p>
                We use information that we collect about you or that you provide
                to us, including any personal information:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  To present our Services to you and fulfill our contractual
                  obligations.
                </li>
                <li>
                  To provide you with information, products, or services that
                  you request from us.
                </li>
                <li>
                  To improve our Services, website functionality, and user
                  experience.
                </li>
                <li>
                  To process payments and send transaction-related
                  communications.
                </li>
                <li>
                  To notify you about changes to our Services or any products or
                  services we offer.
                </li>
                <li>
                  To allow you to participate in interactive features on our
                  Services.
                </li>
                <li>
                  For any other purpose with your consent or as permitted by
                  law.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                5. Disclosure of Your Information
              </h2>
              <p>
                We may disclose personal information that we collect or you
                provide as described in this Privacy Policy:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  To our subsidiaries and affiliates for the purposes outlined
                  in this Privacy Policy.
                </li>
                <li>
                  To contractors, service providers, and other third parties we
                  use to support our business.
                </li>
                <li>To fulfill the purpose for which you provide it.</li>
                <li>
                  For any other purpose disclosed by us when you provide the
                  information.
                </li>
                <li>To comply with any court order, law, or legal process.</li>
                <li>
                  To protect the rights, property, or safety of Rook, our
                  customers, or others.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                6. Data Security
              </h2>
              <p>
                We have implemented measures designed to secure your personal
                information from accidental loss and from unauthorized access,
                use, alteration, and disclosure. All information you provide to
                us is stored on secure servers behind firewalls. Any payment
                transactions will be encrypted using SSL technology.
              </p>
              <p>
                The safety and security of your information also depends on you.
                We urge you to be careful about sharing your personal
                information and to maintain the confidentiality of your login
                credentials.
              </p>
              <p>
                Unfortunately, the transmission of information via the internet
                is not completely secure. Although we do our best to protect
                your personal information, we cannot guarantee the security of
                your personal information transmitted to our Services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                7. Your Choices About Our Collection, Use, and Disclosure
              </h2>
              <p>
                We strive to provide you with choices regarding the personal
                information you provide to us. Here are some mechanisms for you
                to exercise control:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  You can review and change your personal information in your
                  account settings.
                </li>
                <li>
                  You can opt-out of receiving marketing emails by following the
                  unsubscribe instructions.
                </li>
                <li>
                  You can set your browser to refuse all or some browser cookies
                  or to alert you when cookies are being sent.
                </li>
                <li>
                  You can choose whether or not to allow our mobile app to
                  collect location information by adjusting your device
                  settings.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-black">
                8. Contact Information
              </h2>
              <p>
                To ask questions or comment about this Privacy Policy and our
                privacy practices, contact us at:
              </p>
              <ul className="list-none space-y-1 mt-4">
                <li>
                  <span className="font-semibold">Email:</span>{" "}
                  empower@rookhq.com
                </li>
                <li>
                  <span className="font-semibold">Phone:</span> +91 70927 00022
                </li>
                <li>
                  <span className="font-semibold">Address:</span> 248, 11th St,
                  Kuberan Nagar Extension, Kuberan Nagar, Madipakkam, Chennai,
                  Tamil Nadu 600091
                </li>
              </ul>
            </section>
          </div>

          {/* CTA Section */}
          <div className="border border-black/10 bg-white p-10 rounded-lg shadow-sm mt-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-1 w-20 bg-black"></div>
              <FileLock className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-black">
              Have Questions About Our Privacy Practices?
            </h3>
            <p className="text-textSecondary mb-6 max-w-2xl">
              Our data protection team is available to answer any questions you
              may have about how we protect your personal information.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://support.rookhq.com/portal/en/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-black text-white hover:bg-black/90 transition-colors">
                  Contact Support
                </Button>
              </a>
              <Link to="/terms">
                <Button
                  variant="outline"
                  className="border-black text-black hover:bg-black/5"
                >
                  View Terms of Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
