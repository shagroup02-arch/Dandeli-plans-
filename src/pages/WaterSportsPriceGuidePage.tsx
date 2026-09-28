import React from 'react';
import { RAFTING_TIERS, OTHER_ACTIVITIES, ADVENTURE_PASS, RAFTING_DISCLAIMER } from '../data/adventures';
import { WaterAdventurePassCard } from '../components/WaterAdventurePassCard';
import { ShieldCheck, Waves, AlertTriangle, Calendar, Check, MessageCircle, Clock } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const WaterSportsPriceGuidePage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 space-y-16">
      {/* 1. Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-[#c5a059] text-xs font-semibold uppercase tracking-[0.25em] block mb-2">
          Transparent Adventure Pricing & Season Guide
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl text-[#faf8f5] tracking-tight leading-tight max-w-4xl mx-auto">
          Dandeli Water Sports Price List, Safety & Best Season
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#9faea5] max-w-2xl mx-auto leading-relaxed">
          Comprehensive price list for white-water rafting, kayaking, zipline, zorbing, and river boating on the Kali River. Understand seasonal water flows and dam release schedules.
        </p>
      </section>

      {/* 2. Dam Water Release & Safety Note */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-[#141b17] border border-[#3d361f] text-xs text-[#cfc7b2] flex items-start gap-3.5 shadow-lg">
          <AlertTriangle className="w-5 h-5 text-[#d4af37] shrink-0 mt-0.5" />
          <div className="space-y-1.5">
            <strong className="text-[#f5eedb] text-sm block">How Water Release Controls Kali River Rafting</strong>
            <p className="leading-relaxed text-[#b8af97]">
              {RAFTING_DISCLAIMER}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Master Price Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0e1612] border border-[#23352b] overflow-hidden shadow-xl">
          <div className="p-6 border-b border-[#1c2c23]">
            <h2 className="font-serif text-2xl text-[#faf8f5]">Complete Activity Price Schedule</h2>
            <span className="text-xs text-[#8ca094]">All prices listed per person in Indian Rupees (INR)</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#090f0c] text-[#c5a059] uppercase tracking-wider font-semibold border-b border-[#1c2c23]">
                <tr>
                  <th className="py-3.5 px-5">Activity</th>
                  <th className="py-3.5 px-4">Distance / Duration</th>
                  <th className="py-3.5 px-4">Thrill Level</th>
                  <th className="py-3.5 px-4">Individual Rate</th>
                  <th className="py-3.5 px-5 text-right">Inquiry</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#18261e] text-[#cfd9d2]">
                {/* Rafting Tiers */}
                {RAFTING_TIERS.map((tier) => (
                  <tr key={tier.id} className="hover:bg-[#121c17] transition-colors">
                    <td className="py-4 px-5">
                      <strong className="text-[#faf8f5] block">{tier.name}</strong>
                      <span className="text-[11px] text-[#86998f]">{tier.rapids}</span>
                    </td>
                    <td className="py-4 px-4 font-mono">{tier.duration}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#1f2b23] text-[#c5a059] text-[10px] font-medium uppercase">
                        High
                      </span>
                    </td>
                    <td className="py-4 px-4 font-serif text-base font-bold text-[#d9b870] font-mono">
                      ₹{tier.price.toLocaleString()}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <a
                        href={buildWhatsAppUrl({ activity: tier.name })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#c5a059] hover:underline"
                      >
                        <span>Check Slots</span>
                      </a>
                    </td>
                  </tr>
                ))}

                {/* Other Activities */}
                {OTHER_ACTIVITIES.map((act) => (
                  <tr key={act.id} className="hover:bg-[#121c17] transition-colors">
                    <td className="py-4 px-5">
                      <strong className="text-[#faf8f5] block">{act.name}</strong>
                      {act.tag && <span className="text-[10px] text-[#c5a059] block">{act.tag}</span>}
                    </td>
                    <td className="py-4 px-4 font-mono">{act.duration || '~20 mins'}</td>
                    <td className="py-4 px-4">
                      <span className="px-2 py-0.5 rounded bg-[#16211b] text-[#9db0a5] text-[10px] uppercase font-medium">
                        {act.thrillLevel}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-serif text-base font-bold text-[#d9b870] font-mono">
                      ₹{act.price}
                    </td>
                    <td className="py-4 px-5 text-right">
                      <a
                        href={buildWhatsAppUrl({ activity: act.name })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#c5a059] hover:underline"
                      >
                        <span>Book Slot</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Adventure Pass Promo */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <WaterAdventurePassCard />
      </section>

      {/* 5. Best Season Guide */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#0f1713] border border-[#223329] space-y-6">
          <h2 className="font-serif text-3xl text-[#faf8f5]">
            Best Time to Visit Dandeli for River Rafting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#a2b2aa] leading-relaxed">
            <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1b2b21] space-y-2">
              <strong className="text-[#d9b870] block text-sm">October – February (Peak Season)</strong>
              <p>Post-monsoon river flows are clean and energetic. Weather is pleasant, mornings are misty, and both rafting and jungle safari operate at full capacity.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1b2b21] space-y-2">
              <strong className="text-[#d9b870] block text-sm">March – May (Summer Thrills)</strong>
              <p>Warmer temperatures make river dips and rafting immensely enjoyable. Dam water releases typically occur daily, making river currents dependable.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#090f0c] border border-[#1b2b21] space-y-2">
              <strong className="text-[#d9b870] block text-sm">June – September (Monsoon)</strong>
              <p>Heavy rainfall transforms the Western Ghats into vibrant green. Extreme water levels can occasionally cause temporary safety suspensions of long rafting.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
