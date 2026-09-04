import React, { useState } from 'react';
import { FAQS } from '../data/nomadooData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-sand-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-mangrove-100 text-mangrove-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-mangrove-700" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our mangrove kayaking, country boating, safety gear, and booking terms.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-sand-200 shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-mangrove-700 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-sand-100 text-mangrove-800 text-xs flex items-center justify-center font-bold flex-shrink-0">
                      0{faq.id}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-mangrove-100 text-mangrove-800' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-sand-100 animate-fadeIn">
                    <p className="bg-sand-50 p-4 rounded-xl border border-sand-200/80">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Quick Help CTA */}
        <div className="mt-10 bg-gradient-to-r from-mangrove-900 to-mangrove-800 text-white rounded-3xl p-6 text-center space-y-4 shadow-xl">
          <h3 className="text-lg font-bold text-white">Have a specific question not listed here?</h3>
          <p className="text-xs sm:text-sm text-sand-200 max-w-xl mx-auto">
            Our team is online on WhatsApp to help you pick the best slot, arrange private group boats, or answer custom queries!
          </p>
          <a
            href="https://wa.me/919446110362?text=Hi%20Nomadoo!%20I%20have%20a%20question%20about%20your%20Varkala%20Kayaking%20tours."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-xl shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Live on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
