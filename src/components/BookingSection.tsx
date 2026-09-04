import React, { useState, useRef, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data/nomadooData';
import { Calendar, Phone, User, Send, CheckCircle2, Shield, Compass, Star, ChevronDown, Clock, Users, Waves } from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

export const BookingSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [activity, setActivity] = useState('Mangrove Kayaking (2-Seater Tandem)');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('Sunrise Hour (6:00 AM - 9:00 AM)');
  const [guests, setGuests] = useState('2');
  const [message, setMessage] = useState('');

  // Custom Dropdown Open States
  const [activityOpen, setActivityOpen] = useState(false);
  const [slotOpen, setSlotOpen] = useState(false);
  const [guestsOpen, setGuestsOpen] = useState(false);

  const activityRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activityRef.current && !activityRef.current.contains(event.target as Node)) {
        setActivityOpen(false);
      }
      if (slotRef.current && !slotRef.current.contains(event.target as Node)) {
        setSlotOpen(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setGuestsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activitiesList = [
    { label: 'Mangrove Kayaking - 1-Seater (Single)', val: 'Mangrove Kayaking (1-Seater Single)' },
    { label: 'Mangrove Kayaking - 2-Seater (Double Tandem)', val: 'Mangrove Kayaking (2-Seater Tandem)' },
    { label: 'Mangrove Country Boating (Traditional Wooden)', val: 'Mangrove Country Boating (Traditional)' },
    { label: 'Mangrove Semi Speed Boating (35 mins)', val: 'Mangrove Semi Speed Boating' },
    { label: 'Stand Up Paddleboarding (SUP)', val: 'Stand Up Paddleboarding (SUP)' }
  ];

  const timeSlotsList = [
    { label: 'Sunrise Hour (6:00 AM - 9:00 AM)', val: 'Sunrise Hour (6:00 AM - 9:00 AM)' },
    { label: 'Daytime / Midday (9:00 AM - 3:00 PM)', val: 'Daytime / Midday (9:00 AM - 3:00 PM)' },
    { label: 'Sunset Hour (4:00 PM - 6:30 PM)', val: 'Sunset Hour (4:00 PM - 6:30 PM)' }
  ];

  const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '10', '12+'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct dynamic pre-filled message
    const formattedText = `*New Booking Request - Nomadoo Varkala*%0A%0A` +
      `👤 *Name:* ${name}%0A` +
      `📞 *Phone:* ${phone}%0A` +
      `🚣 *Activity:* ${activity}%0A` +
      `📅 *Preferred Date:* ${date || 'Flexible / Next Available'}%0A` +
      `⏰ *Time Slot:* ${timeSlot}%0A` +
      `👥 *Number of Guests:* ${guests}%0A` +
      (message ? `📝 *Notes:* ${message}%0A` : '') +
      `%0APlease confirm availability and slot details!`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${formattedText}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="booking" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-sand-50 to-sand-100/60 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-mangrove-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-sunset-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-mangrove-100 border border-mangrove-200 text-mangrove-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Calendar className="w-3.5 h-3.5 text-mangrove-700" />
            Fast & Direct Reservation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Book Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-mangrove-800 to-emerald-600">Varkala Kayaking</span> Tour
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Fill in your preferred date and slot below. Click submit to send a instant pre-filled reservation inquiry directly to our WhatsApp booking desk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Trust Summary & Instructions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-sand-100/90 rounded-3xl p-6 sm:p-8 border border-sand-200 shadow-sm space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                Why Book With Nomadoo?
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-mangrove-200/60 text-mangrove-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Certified Local Instructors</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Experienced local guides accompany every tour for 100% safety and navigation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sunset-100 text-sunset-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Beginner & Non-Swimmer Friendly</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Calm shallow mangrove backwaters. ISO safety lifejackets provided for all ages.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Top Rated Experience</h4>
                    <p className="text-xs text-slate-600 mt-0.5">4.9 / 5.0 rated backwater activity in Varkala with over 500+ happy paddlers.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Guarantees Badge */}
            <div className="bg-white rounded-2xl p-5 border border-sand-200 shadow-sm space-y-3">
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

          {/* Right Column: Clean Customized Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 lg:p-10 border-2 border-mangrove-200 shadow-2xl space-y-6">
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

              {/* Custom Activity Dropdown */}
              <div ref={activityRef} className="relative">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Activity *
                </label>
                
                <button
                  type="button"
                  onClick={() => setActivityOpen(!activityOpen)}
                  className="w-full bg-sand-50 hover:bg-sand-100/80 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-900 outline-none transition-all flex items-center justify-between shadow-sm"
                >
                  <div className="flex items-center gap-2 truncate">
                    <Waves className="w-4 h-4 text-mangrove-700 shrink-0" />
                    <span className="truncate">{activity}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 ${activityOpen ? 'rotate-180' : ''}`} />
                </button>

                {activityOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-sand-300 rounded-2xl shadow-2xl p-1.5 space-y-1 z-30 animate-fadeIn">
                    {activitiesList.map((item) => (
                      <button
                        key={item.val}
                        type="button"
                        onClick={() => {
                          setActivity(item.val);
                          setActivityOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-between ${
                          activity === item.val
                            ? 'bg-mangrove-100 text-mangrove-950 font-extrabold'
                            : 'hover:bg-sand-100 text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        <span>{item.label}</span>
                        {activity === item.val && <CheckCircle2 className="w-4 h-4 text-mangrove-700 shrink-0" />}
                      </button>
                    ))}
                  </div>
                )}
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

                {/* Custom Time Slot Dropdown */}
                <div ref={slotRef} className="relative">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <button
                    type="button"
                    onClick={() => setSlotOpen(!slotOpen)}
                    className="w-full bg-sand-50 hover:bg-sand-100/80 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl px-3 py-2.5 text-xs font-bold text-slate-900 outline-none transition-all flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <Clock className="w-3.5 h-3.5 text-sunset-500 shrink-0" />
                      <span className="truncate">{timeSlot}</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 shrink-0 ${slotOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {slotOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-sand-300 rounded-2xl shadow-2xl p-1.5 space-y-1 z-30 animate-fadeIn min-w-[200px]">
                      {timeSlotsList.map((slot) => (
                        <button
                          key={slot.val}
                          type="button"
                          onClick={() => {
                            setTimeSlot(slot.val);
                            setSlotOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                            timeSlot === slot.val
                              ? 'bg-mangrove-100 text-mangrove-950 font-extrabold'
                              : 'hover:bg-sand-100 text-slate-700'
                          }`}
                        >
                          <span>{slot.label}</span>
                          {timeSlot === slot.val && <CheckCircle2 className="w-3.5 h-3.5 text-mangrove-700 shrink-0" />}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Custom Guests Dropdown */}
                <div ref={guestsRef} className="relative">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    No. of Guests
                  </label>
                  <button
                    type="button"
                    onClick={() => setGuestsOpen(!guestsOpen)}
                    className="w-full bg-sand-50 hover:bg-sand-100/80 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl px-3 py-2.5 text-xs font-bold text-slate-900 outline-none transition-all flex items-center justify-between shadow-sm"
                  >
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-mangrove-700 shrink-0" />
                      <span>{guests} {guests === '1' ? 'Guest' : 'Guests'}</span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 shrink-0 ${guestsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {guestsOpen && (
                    <div className="absolute top-full left-0 right-0 mt-1.5 bg-white border border-sand-300 rounded-2xl shadow-2xl p-1.5 grid grid-cols-2 gap-1 z-30 animate-fadeIn max-h-48 overflow-y-auto">
                      {guestOptions.map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => {
                            setGuests(num);
                            setGuestsOpen(false);
                          }}
                          className={`w-full text-center py-1.5 px-2 rounded-xl text-xs font-bold transition-colors ${
                            guests === num
                              ? 'bg-mangrove-800 text-white'
                              : 'hover:bg-sand-100 text-slate-700'
                          }`}
                        >
                          {num} {num === '1' ? 'Guest' : 'Guests'}
                        </button>
                      ))}
                    </div>
                  )}
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

              {/* Big Confirm WhatsApp Button (Single-line on Mobile) */}
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-base py-3.5 sm:py-4 px-4 sm:px-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <WhatsappIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" />
                <span className="whitespace-nowrap">Confirm Booking via WhatsApp</span>
                <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5 shrink-0" />
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
