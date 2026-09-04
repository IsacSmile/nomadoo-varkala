import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, Calendar, Clock, Users, User, CheckCircle2, ShieldAlert, Sparkles, Send } from 'lucide-react';
import { CONTACT_PHONE_1, CONTACT_PHONE_2, WHATSAPP_NUMBER } from '../data/nomadooData';

interface BookingSectionProps {
  selectedActivityId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ selectedActivityId }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Sunrise / Morning (6:00 AM - 9:00 AM)');
  const [activity, setActivity] = useState('Mangrove Kayaking (2-Seater Tandem)');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');

  // Update activity based on selection prop from parent
  useEffect(() => {
    if (selectedActivityId === 'kayak-1seater') {
      setActivity('Mangrove Kayaking (1-Seater Single)');
      setGuests('1');
    } else if (selectedActivityId === 'kayak-2seater') {
      setActivity('Mangrove Kayaking (2-Seater Tandem)');
      setGuests('2');
    } else if (selectedActivityId === 'country-boating') {
      setActivity('Mangrove Country Boating (Traditional)');
    } else if (selectedActivityId === 'speed-boating') {
      setActivity('Mangrove Semi Speed Boating');
    } else if (selectedActivityId === 'standup-paddleboarding') {
      setActivity('Stand Up Paddleboarding (SUP)');
    }
  }, [selectedActivityId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Hello Nomadoo Varkala! 🚣‍♂️

I would like to book a tour with the following details:
• *Name:* ${name || 'Not provided'}
• *Phone:* ${phone || 'Not provided'}
• *Activity:* ${activity}
• *Preferred Date:* ${date || 'Flexible / Next Available'}
• *Preferred Time Slot:* ${timeSlot}
• *Number of Guests:* ${guests} Person(s)
${message ? `• *Special Notes:* ${message}` : ''}

Please confirm availability and share payment token details for best price. Thank you!`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-gradient-to-b from-white via-sand-50 to-sand-100 relative">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-mangrove-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Phone numbers & Booking info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-mangrove-800 bg-mangrove-100 px-3.5 py-1 rounded-full">
                Effortless 30-Second Booking
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Reserve Your Mangrove Slot
              </h2>
              <p className="text-base text-slate-600">
                Direct booking partner for Varkala mangrove kayaking & boating trips. Confirm instantly via WhatsApp.
              </p>
            </div>

            {/* Direct Phone Numbers Highlight Box */}
            <div className="bg-mangrove-900 text-white rounded-3xl p-6 shadow-xl border border-mangrove-800 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-sunset-400 flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>Call or WhatsApp Direct</span>
              </h3>

              <div className="space-y-3">
                <a
                  href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-sand-200">Primary Contact</p>
                      <p className="text-base font-bold text-white">{CONTACT_PHONE_1}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-emerald-600 text-white px-2.5 py-1 rounded-lg">Call</span>
                </a>

                <a
                  href={`tel:${CONTACT_PHONE_2.replace(/\s+/g, '')}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-colors border border-white/10"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sunset-500/20 text-sunset-400 flex items-center justify-center font-bold">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-sand-200">Secondary Contact</p>
                      <p className="text-base font-bold text-white">{CONTACT_PHONE_2}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold bg-sunset-600 text-white px-2.5 py-1 rounded-lg">Call</span>
                </a>
              </div>

              {/* Note */}
              <div className="pt-2 border-t border-mangrove-800 flex items-start gap-2.5 text-xs text-sand-200">
                <ShieldAlert className="w-4 h-4 text-sunset-400 flex-shrink-0 mt-0.5" />
                <p>
                  <strong className="text-white">Token amount confirms your booking.</strong> Message us for best price & instant slot reservation.
                </p>
              </div>
            </div>

            {/* Quick Guarantees */}
            <div className="space-y-2.5 bg-white p-5 rounded-2xl border border-sand-200 shadow-sm">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Instant booking response within 5 minutes</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% full refund on weather cancellations</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Free date rescheduling facility</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-mangrove-200 shadow-2xl space-y-6">
            <div className="border-b border-sand-200 pb-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-mangrove-700" />
                <span>Fast Booking Form</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your preferences below to generate your pre-filled WhatsApp reservation request.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-sand-50 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-sand-50 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Activity Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Activity *
                </label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full bg-sand-50 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-900 outline-none transition-all cursor-pointer"
                >
                  <option value="Mangrove Kayaking (1-Seater Single)">Mangrove Kayaking - 1-Seater (Single)</option>
                  <option value="Mangrove Kayaking (2-Seater Tandem)">Mangrove Kayaking - 2-Seater (Double Tandem)</option>
                  <option value="Mangrove Country Boating (Traditional)">Mangrove Country Boating (Traditional Wooden Boat)</option>
                  <option value="Mangrove Semi Speed Boating">Mangrove Semi Speed Boating (35 mins)</option>
                  <option value="Stand Up Paddleboarding (SUP)">Stand Up Paddleboarding (SUP)</option>
                </select>
              </div>

              {/* Date, Time Slot & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-sand-50 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl px-3 py-2.5 text-xs font-medium text-slate-900 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-sand-50 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl px-3 py-2.5 text-xs font-medium text-slate-900 outline-none transition-all cursor-pointer"
                  >
                    <option value="Sunrise / Early Morning (6:00 AM - 9:00 AM)">Sunrise (6:00 AM - 9:00 AM)</option>
                    <option value="Daytime / Midday (9:00 AM - 3:00 PM)">Daytime (9:00 AM - 3:00 PM)</option>
                    <option value="Sunset Hour (4:00 PM - 6:30 PM)">Sunset (4:00 PM - 6:30 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    No. of Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-sand-50 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl px-3 py-2.5 text-xs font-medium text-slate-900 outline-none transition-all cursor-pointer"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, "12+"].map((num) => (
                      <option key={num} value={String(num)}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Special Notes / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g., Requesting photography assistance or custom group setup..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-sand-50 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl p-3 text-xs text-slate-900 outline-none transition-all"
                />
              </div>

              {/* Big Confirm WhatsApp Button */}
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-base py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
                <span>Confirm Booking via WhatsApp</span>
                <Send className="w-4 h-4 ml-1" />
              </button>

              <p className="text-center text-[11px] text-slate-500 font-medium">
                🔒 Direct WhatsApp connection. No hidden booking fees.
              </p>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
