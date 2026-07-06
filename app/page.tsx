import dynamic from "next/dynamic";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import FloatingActions from "@/components/UI/FloatingActions";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LanguageProvider from "@/components/UI/LanguageProvider";
import Process from "@/components/Process";
import ScrollToTop from "@/components/UI/ScrollToTop";
import Services from "@/components/Services";
import SkeletonSection from "@/components/UI/SkeletonSection";
import WhyUs from "@/components/WhyUs";
import { siteConfig } from "@/lib/site";

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <SkeletonSection />
});

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <SkeletonSection />
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  image:
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=82",
  address: {
    "@type": "PostalAddress",
    streetAddress: "str. Uzinelor 12",
    addressLocality: "Chișinău",
    addressCountry: "MD"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00"
    }
  ],
  priceRange: "MDL",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "312"
  },
  sameAs: ["https://instagram.com", "https://facebook.com", "https://youtube.com"]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />
      <LanguageProvider>
        <Header />
        <main>
          <Hero />
          <Services />
          <WhyUs />
          <Process />
          <Gallery />
          <Testimonials />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
        <FloatingActions />
        <ScrollToTop />
      </LanguageProvider>
    </>
  );
}
