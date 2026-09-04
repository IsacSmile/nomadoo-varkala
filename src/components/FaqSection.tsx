import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/nomadooData';
import { ChevronDown, HelpCircle, Search, Sparkles, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Booking & Safety', 'Gear & Prep', 'Group Tours'];

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  // Filter FAQs based on category & search query
  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesSearch =
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (activeCategory === 'All') return true;
      if (activeCategory === 'Booking & Safety') return [1, 2, 4, 5].includes(faq.id);
      if (activeCategory === 'Gear & Prep') return [3, 6].includes(faq.id);
      if (activeCategory === 'Group Tours') return [7].includes(faq.id);

      return true;
    });
  }, [searchQuery, activeCategory]);

  return (
    <section id="faqs" className="py-16 sm:py-24 bg-gradient-to-b from-sand-50 via-white to-sand-100/60 relative overflow-hidden">
      
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-mangrove-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sunset-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10"
        >
          <div className="inline-flex items-center gap-1.5 bg-mangrove-100 border border-mangrove-200 text-mangrove-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-mangrove-700" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-mangrove-800 to-emerald-600">Questions</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our mangrove kayaking, country boating, safety gear, and instant WhatsApp booking terms.
          </p>
        </motion.div>

        {/* Search & Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Box */}
          <div className="relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search your question (e.g. safety, cancellation, clothing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-sand-300 focus:border-mangrove-600 rounded-2xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-900 outline-none transition-all shadow-sm focus:shadow-md"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-mangrove-800 text-white shadow-md scale-105'
                    : 'bg-white border border-sand-200 text-slate-600 hover:bg-sand-100 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Accordion FAQ Cards */}
        <div className="space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-white rounded-3xl border border-sand-200 p-6 space-y-2">
              <Sparkles className="w-8 h-8 text-sunset-500 mx-auto" />
              <p className="text-sm font-bold text-slate-800">No matching questions found</p>
              <p className="text-xs text-slate-500">Try searching for keywords like "cancellation", "kayak", or "lifejacket".</p>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-mangrove-500/80 shadow-lg ring-2 ring-mangrove-500/10'
                      : 'bg-white/90 border-sand-200 hover:border-sand-300 shadow-sm hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none group"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className={`w-8 h-8 rounded-xl text-xs font-extrabold flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-mangrove-800 text-white shadow-sm'
                          : 'bg-sand-100 text-mangrove-800 group-hover:bg-mangrove-100'
                      }`}>
                        0{faq.id}
                      </span>
                      <span className={`text-xs sm:text-sm font-extrabold transition-colors leading-snug ${
                        isOpen ? 'text-mangrove-950' : 'text-slate-900 group-hover:text-mangrove-800'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen ? 'bg-mangrove-100 text-mangrove-800 rotate-180' : 'bg-sand-100 text-slate-500 group-hover:bg-sand-200'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-sand-100">
                          <div className="bg-sand-50/80 p-4 rounded-xl border border-sand-200/70 text-xs sm:text-sm text-slate-700 leading-relaxed flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <p>{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          )}
        </div>

        {/* Bottom Quick Help WhatsApp Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-gradient-to-r from-slate-950 via-mangrove-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 text-center space-y-4 shadow-2xl border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-[11px] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>24/7 Live WhatsApp Assistance</span>
          </div>

          <h3 className="text-base sm:text-xl font-extrabold text-white">
            Have a custom question not listed here?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            Our team is online right now to answer custom group pricing, camera bag safety, or personalized timing requests!
          </p>

          <div>
            <a
              href="https://wa.me/919446110362?text=Hi%20Nomadoo!%20I%20have%20a%20question%20about%20your%20Varkala%20Kayaking%20tours."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-extrabold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <WhatsappIcon className="w-4 h-4 fill-white" />
              <span>Ask Us Live on WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
