import React, { useState, useRef, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../data/nomadooData';
import { Calendar, Phone, User, Send, CheckCircle2, Shield, Compass, Star, ChevronDown, ChevronLeft, ChevronRight, Clock, Users, Waves } from 'lucide-react';
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
  const [calendarOpen, setCalendarOpen] = useState(false);

  const today = new Date();
  const [viewDate, setViewDate] = useState(new Date());

  const activityRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Close dropdowns & calendar on click outside
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
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setCalendarOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Custom Calendar Helpers
  const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const formatDateString = (year: number, month: number, day: number) => {
    const m = String(month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
  };

  const formatDisplayDate = (dateStr: string) => {
    if (!dateStr) return 'Select Date';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
    return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  const setQuickDate = (daysToAdd: number) => {
    const d = new Date();
    d.setDate(d.getDate() + daysToAdd);
    const dateStr = formatDateString(d.getFullYear(), d.getMonth(), d.getDate());
    setDate(dateStr);
    setCalendarOpen(false);
  };

  const activitiesList = [
    { label: 'Mangrove Kayaking - 1-Seater (Single)', val: 'Mangrove Kayaking (1-Seater Single)' },
    { label: 'Mangrove Kayaking - 2-Seater (Double Tandem)', val: 'Mangrove Kayaking (2-Seater Tandem)' },
    { label: 'Mangrove Country Boating (Traditional Wooden)', val: 'Mangrove Country Boating (Traditional)' },
    { label: 'Mangrove Semi Speed Boating (35 mins)', val: 'Mangrove Semi Speed Boating' },
    { label: 'Stand Up Paddleboarding (SUP)', val: 'Stand Up Paddleboarding (SUP)' }
  ];

  const timeSlotsList = [
    { label: '🌅 Morning Golden Sunrise (Starts 6:00 AM - 9:00 AM)', val: 'Morning Sunrise Batch (Starts 6:00 AM)' },
    { label: '🌇 Evening Golden Sunset (Starts 4:00 PM - 6:30 PM)', val: 'Evening Sunset Batch (Starts 4:00 PM)' },
    { label: '☀️ Midday Daytime (9:00 AM - 3:00 PM)', val: 'Midday Daytime Batch (9:00 AM - 3:00 PM)' }
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
          
          {/* Left Column: Tour Timings & Trust Summary */}
          <div className="lg:col-span-5 space-y-6">

            {/* Daily Tour Timings Precise Schedule Card */}
            <div className="bg-gradient-to-br from-slate-950 via-mangrove-950 to-slate-900 text-white rounded-3xl p-6 sm:p-7 border-2 border-mangrove-700/60 shadow-2xl space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-36 h-36 bg-sunset-500/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-sunset-500/20 text-sunset-400 flex items-center justify-center font-bold">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider">
                    Daily Tour Schedule & Timings
                  </h3>
                </div>
                <span className="bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full">
                  Live Slots
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                
                {/* Morning Slot Box */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 hover:border-sunset-400/50 transition-all space-y-1">
                  <div className="flex items-center justify-between text-sunset-300">
                    <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1">
                      🌅 Morning Batch
                    </span>
                    <span className="text-[10px] font-extrabold bg-sunset-500/30 px-2 py-0.5 rounded-md text-sunset-200">
                      Starts 6:00 AM
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-white">
                    6:00 AM – 9:00 AM
                  </p>
                  <p className="text-[11px] text-slate-300 font-medium leading-snug">
                    Calm glassy waters, cool morning breeze & birdwatching.
                  </p>
                </div>

                {/* Evening Slot Box */}
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 hover:border-sunset-400/50 transition-all space-y-1">
                  <div className="flex items-center justify-between text-sunset-300">
                    <span className="text-xs font-black uppercase tracking-wider flex items-center gap-1">
                      🌇 Evening Batch
                    </span>
                    <span className="text-[10px] font-extrabold bg-sunset-500/30 px-2 py-0.5 rounded-md text-sunset-200">
                      Starts 4:00 PM
                    </span>
                  </div>
                  <p className="text-base sm:text-lg font-black text-white">
                    4:00 PM – 6:30 PM
                  </p>
                  <p className="text-[11px] text-slate-300 font-medium leading-snug">
                    Golden hour glow & magical mangrove sunset reflections.
                  </p>
                </div>

              </div>

              <p className="text-[11px] text-slate-400 font-medium text-center pt-1 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Midday slots (9:00 AM – 3:00 PM) available on custom request.</span>
              </p>
            </div>
            
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
                {/* Custom Luxury Calendar Picker */}
                <div ref={calendarRef} className="relative">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                    <span>Preferred Date</span>
                    {date && (
                      <button
                        type="button"
                        onClick={() => setDate('')}
                        className="text-[10px] text-mangrove-700 hover:underline font-semibold"
                      >
                        Clear
                      </button>
                    )}
                  </label>

                  <button
                    type="button"
                    onClick={() => setCalendarOpen(!calendarOpen)}
                    className="w-full bg-sand-50 hover:bg-sand-100/80 border border-sand-300 focus:border-mangrove-600 focus:bg-white rounded-xl px-3 py-2.5 text-xs font-bold text-slate-900 outline-none transition-all flex items-center justify-between shadow-sm cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <Calendar className="w-3.5 h-3.5 text-mangrove-700 shrink-0" />
                      <span className={date ? 'text-slate-900 font-extrabold' : 'text-slate-500 font-medium'}>
                        {formatDisplayDate(date)}
                      </span>
                    </div>
                    <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 shrink-0 ${calendarOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {calendarOpen && (
                    <div className="absolute top-full left-0 mt-1.5 bg-white border border-sand-300 rounded-2xl shadow-2xl p-3.5 z-40 animate-fadeIn w-72 sm:w-80">
                      
                      {/* Quick Chips */}
                      <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-sand-200 overflow-x-auto">
                        <button
                          type="button"
                          onClick={() => setQuickDate(0)}
                          className="px-2.5 py-1 bg-mangrove-100 hover:bg-mangrove-200 text-mangrove-900 text-[10px] font-extrabold rounded-lg shrink-0 transition-colors"
                        >
                          Today
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuickDate(1)}
                          className="px-2.5 py-1 bg-sand-100 hover:bg-sand-200 text-slate-800 text-[10px] font-bold rounded-lg shrink-0 transition-colors"
                        >
                          Tomorrow
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuickDate(2)}
                          className="px-2.5 py-1 bg-sand-100 hover:bg-sand-200 text-slate-800 text-[10px] font-bold rounded-lg shrink-0 transition-colors"
                        >
                          In 2 Days
                        </button>
                      </div>

                      {/* Month & Year Navigation Header */}
                      <div className="flex items-center justify-between mb-2 px-1">
                        <button
                          type="button"
                          onClick={handlePrevMonth}
                          className="p-1 rounded-lg hover:bg-sand-100 text-slate-600 transition-colors"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <span className="text-xs font-black text-slate-900">
                          {monthsList[viewDate.getMonth()]} {viewDate.getFullYear()}
                        </span>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="p-1 rounded-lg hover:bg-sand-100 text-slate-600 transition-colors"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Days of Week Header */}
                      <div className="grid grid-cols-7 gap-1 text-center mb-1">
                        {daysOfWeek.map((day) => (
                          <span key={day} className="text-[10px] font-bold text-slate-400 uppercase">
                            {day}
                          </span>
                        ))}
                      </div>

                      {/* Calendar Days Grid */}
                      <div className="grid grid-cols-7 gap-1 text-center">
                        {/* Empty padding cells */}
                        {[...Array(getFirstDayOfMonth(viewDate.getFullYear(), viewDate.getMonth()))].map((_, i) => (
                          <div key={`empty-${i}`} className="h-8" />
                        ))}

                        {/* Day cells */}
                        {[...Array(getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth()))].map((_, i) => {
                          const dayNum = i + 1;
                          const cellDateStr = formatDateString(viewDate.getFullYear(), viewDate.getMonth(), dayNum);
                          const isSelected = date === cellDateStr;
                          
                          // Check if past date
                          const cellDateObj = new Date(viewDate.getFullYear(), viewDate.getMonth(), dayNum, 23, 59, 59);
                          const isPast = cellDateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());

                          return (
                            <button
                              key={dayNum}
                              type="button"
                              disabled={isPast}
                              onClick={() => {
                                setDate(cellDateStr);
                                setCalendarOpen(false);
                              }}
                              className={`h-8 w-8 mx-auto rounded-xl text-xs font-bold transition-all flex items-center justify-between justify-center ${
                                isPast
                                  ? 'text-slate-300 cursor-not-allowed line-through opacity-50'
                                  : isSelected
                                  ? 'bg-mangrove-900 text-white font-extrabold shadow-md scale-105'
                                  : 'hover:bg-mangrove-100 text-slate-800 hover:text-mangrove-950'
                              }`}
                            >
                              {dayNum}
                            </button>
                          );
                        })}
                      </div>

                    </div>
                  )}
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
