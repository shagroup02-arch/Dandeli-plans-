import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, MapPin, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_PHONE, buildWhatsAppUrl, getTelUrl } from '../utils/whatsapp';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 pb-24 space-y-20">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          About Dandeli Plans
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#faf8f5] tracking-tight leading-tight max-w-3xl mx-auto">
          Your Dandeli Experience, <br />
          <span className="italic text-[#d9b870]">Thoughtfully Planned.</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#9faea5] max-w-2xl mx-auto leading-relaxed">
          We bring clarity, honest local expertise, and curated hospitality to one of Karnataka’s most breathtaking Western Ghats landscapes.
        </p>
      </section>

      {/* 2. Core Narrative */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0e1612] border border-[#23352b] shadow-xl space-y-6 text-[#cad5ce] text-sm sm:text-base leading-relaxed">
          <p>
            Dandeli is a realm of contrasts: roaring white-water rapids on the Kali River, quiet teak forests where hornbills call across the canopy, and ancient geological caves carved millions of years ago. But planning a Dandeli trip can frequently feel fragmented—with disjointed stay providers, uncertain dam water releases, and confusing safari ticketing rules.
          </p>
          <p>
            <strong>Dandeli Plans</strong> was established to unify every aspect of your Western Ghats journey under one dependable, premium standard. We focus strictly on what matters: pristine resort cottages, authentic regional dining, pre-coordinated water sports, and honest local travel coordination.
          </p>
          <p className="text-[#95a89e] text-xs sm:text-sm italic border-l-2 border-[#c5a059] pl-4 my-4">
            "We believe in hospitality grounded in reality. No inflated claims, no false guarantees of tiger sightings, and no misleading pricing. Just exceptional stays, thrilling river rapids, and peaceful jungle memories."
          </p>
        </div>
      </section>

      {/* 3. Five Pillars of Service */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block mb-1">
            Our Commitments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
            How We Shape Your Holiday
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#213328] space-y-3">
            <h3 className="font-serif text-xl text-[#d9b870]">Our Resorts</h3>
            <p className="text-xs text-[#9eb0a6] leading-relaxed">
              Carefully vetted stays from bamboo eco-cottages to hilltop view suites with hygienic kitchens and attached modern baths.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#213328] space-y-3">
            <h3 className="font-serif text-xl text-[#d9b870]">Adventure</h3>
            <p className="text-xs text-[#9eb0a6] leading-relaxed">
              Kali River white-water rafting, kayaking, ziplines, and zorbing with certified helmsmen and international-standard life jackets.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#213328] space-y-3">
            <h3 className="font-serif text-xl text-[#d9b870]">Wildlife</h3>
            <p className="text-xs text-[#9eb0a6] leading-relaxed">
              Clear, transparent guidance on Forest Department safari timings at Kulgi and Phansoli so you can secure on-the-spot tokens punctually.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#213328] space-y-3">
            <h3 className="font-serif text-xl text-[#d9b870]">Sightseeing</h3>
            <p className="text-xs text-[#9eb0a6] leading-relaxed">
              Curated regional trails to Syntheri Rock, Moulangi, and Sykes Point arranged with dependable local drivers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f1713] border border-[#213328] space-y-3">
            <h3 className="font-serif text-xl text-[#d9b870]">Local Assistance</h3>
            <p className="text-xs text-[#9eb0a6] leading-relaxed">
              From arrival logistics and route planning from Bangalore, Pune, or Goa, our local team is just a WhatsApp message away.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Contact & Booking CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#121c17] to-[#0a100d] border border-[#24372c] space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#faf8f5]">
            Ready to plan your Dandeli escape?
          </h2>
          <p className="text-xs sm:text-sm text-[#9ea095] max-w-lg mx-auto">
            Speak directly with our Dandeli travel coordinators to tailor your stay dates, group size, and activity choices.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase transition-all shadow-lg"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={getTelUrl()}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[#293d31] bg-[#101814] text-[#ede8de] hover:border-[#c5a059] text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Phone className="w-4 h-4 text-[#c5a059]" />
              <span className="font-mono">{CONTACT_PHONE}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
