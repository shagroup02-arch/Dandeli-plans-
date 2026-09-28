import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle2, Calendar, Users, Home } from 'lucide-react';
import { CONTACT_PHONE, buildWhatsAppUrl, getTelUrl, openSafeLink } from '../utils/whatsapp';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2 Adults',
    preferredResort: 'Dandeli Jungle Resort',
    roomType: 'Any Available Cottage',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const customMessage = `Hello Dandeli Plans, I would like to make a booking enquiry.\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Check-in: ${formData.checkIn || 'To be decided'}\n` +
      `Check-out: ${formData.checkOut || 'To be decided'}\n` +
      `Guests: ${formData.guests}\n` +
      `Preferred Resort: ${formData.preferredResort}\n` +
      `Room Type: ${formData.roomType}\n` +
      (formData.message ? `Special Requests: ${formData.message}\n\n` : `\n`) +
      `Please share availability and current package pricing.`;

    const url = buildWhatsAppUrl({ customMessage });
    openSafeLink(url);
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          Direct Booking & Enquiries
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#faf8f5] tracking-tight leading-tight">
          Plan Your Dandeli Escape
        </h1>
        <p className="mt-3 text-base sm:text-lg text-[#9faea5] max-w-xl mx-auto leading-relaxed">
          Reach our Dandeli travel desk directly for instant room availability, group pricing, and water adventure packages.
        </p>
      </section>

      {/* 2. Main Two Column Layout */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info & Quick Buttons */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#0f1713] border border-[#22352b] space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block mb-1">
                  Connect Directly
                </span>
                <h2 className="font-serif text-2xl text-[#faf8f5]">Dandeli Plans</h2>
                <p className="text-xs text-[#95a89e] mt-1 leading-relaxed">
                  We reply promptly on WhatsApp with live cottage photos, current Kali River water conditions, and package quotes.
                </p>
              </div>

              {/* Direct Buttons */}
              <div className="space-y-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Now: {CONTACT_PHONE}</span>
                </a>

                <a
                  href={getTelUrl()}
                  className="w-full py-3.5 px-4 rounded-xl border border-[#2d4236] bg-[#121c17] hover:border-[#c5a059] text-[#f2efe9] font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-[#c5a059]" />
                  <span>Call Now: {CONTACT_PHONE}</span>
                </a>
              </div>

              {/* Physical Office & Hours */}
              <div className="pt-6 border-t border-[#1a2820] space-y-4 text-xs text-[#ccd6d0]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#f5f2eb] block">Local Office & Counter</strong>
                    <span>Dandeli, Uttara Kannada District, Karnataka 581325</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#f5f2eb] block">Helpline Hours</strong>
                    <span>Daily: 7:00 AM – 10:00 PM IST</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Traveler Guarantee Box */}
            <div className="p-6 rounded-2xl bg-[#090e0c] border border-[#1d2d24] text-xs text-[#8ca094] space-y-2">
              <span className="text-[#d9b870] font-semibold block uppercase tracking-wider text-[11px]">
                Transparent Pricing Guarantee
              </span>
              <p className="leading-relaxed">
                All quotes include 3 full buffet meals, selected water activities, resort campfire, and tax. No hidden surprise surcharges on arrival.
              </p>
            </div>
          </div>

          {/* Right Column: Detailed Booking Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0e1612] border border-[#23352b] shadow-xl">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-widest text-[#c5a059] font-medium block mb-1">
                  Send Your Requirements
                </span>
                <h3 className="font-serif text-2xl text-[#faf8f5]">Resort Booking Enquiry</h3>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#12241b] border border-[#2d523e] text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#4ade80] mx-auto" />
                  <h4 className="font-serif text-2xl text-[#faf8f5]">Enquiry Sent!</h4>
                  <p className="text-xs text-[#b8d4c5] max-w-md mx-auto leading-relaxed">
                    Thank you! We have opened WhatsApp with your details. Our reservation coordinator will confirm availability and send your personalized booking quote shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#c5a059] underline hover:text-[#e4ca7d]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#080d0b] border border-[#223328] rounded-xl px-4 py-2.5 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full bg-[#080d0b] border border-[#223328] rounded-xl px-4 py-2.5 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full bg-[#080d0b] border border-[#223328] rounded-xl px-4 py-2.5 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full bg-[#080d0b] border border-[#223328] rounded-xl px-4 py-2.5 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a059]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#080d0b] border border-[#223328] rounded-xl px-4 py-2.5 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a059]"
                      >
                        <option value="2 Adults (Couple)">2 Adults (Couple)</option>
                        <option value="Family (2 Adults + Kids)">Family (2 Adults + Kids)</option>
                        <option value="3 to 5 Adults">3 to 5 Adults</option>
                        <option value="6 to 10 Adults (Squad)">6 to 10 Adults (Squad)</option>
                        <option value="10+ Sharing Dormitory Group">10+ Sharing Dormitory Group</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">
                        Preferred Resort
                      </label>
                      <select
                        value={formData.preferredResort}
                        onChange={(e) => setFormData({ ...formData, preferredResort: e.target.value })}
                        className="w-full bg-[#080d0b] border border-[#223328] rounded-xl px-4 py-2.5 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a059]"
                      >
                        <option value="Dandeli Jungle Resort">Dandeli Jungle Resort</option>
                        <option value="Dandeli Cottages">Dandeli Cottages</option>
                        <option value="Dandeli Hills Resort">Dandeli Hills Resort</option>
                        <option value="Help Me Choose the Best Stay">Help Me Choose the Best Stay</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">
                      Preferred Room / Cottage Type
                    </label>
                    <input
                      type="text"
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      placeholder="e.g. Bamboo Cottage A/C, A-Type Wooden, Hill View, or Dormitory"
                      className="w-full bg-[#080d0b] border border-[#223328] rounded-xl px-4 py-2.5 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#c5a059] mb-1">
                      Special Requests / Add-on Activities
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any rafting preferences (Short/Mid/Long), safari cab needs, or dietary requests..."
                      className="w-full bg-[#080d0b] border border-[#223328] rounded-xl px-4 py-2.5 text-sm text-[#faf8f5] focus:outline-none focus:border-[#c5a059]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#c5a059] hover:bg-[#d9b366] text-[#090d0c] font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Booking Enquiry via WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
