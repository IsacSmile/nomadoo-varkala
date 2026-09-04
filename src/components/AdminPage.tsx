import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, Phone, User, Search, Filter, Plus, Trash2, ArrowLeft, 
  CheckCircle2, Clock, AlertCircle, XCircle, Sparkles, MessageCircle, Compass, Users, ChevronDown 
} from 'lucide-react';
import { WhatsappIcon } from './WhatsappIcon';

export interface BookingRecord {
  id: string;
  name: string;
  phone: string;
  activity: string;
  date: string;
  timeSlot: string;
  guests: string;
  guestNames?: string[];
  message?: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  createdAt: string;
}

const DEFAULT_BOOKINGS: BookingRecord[] = [
  {
    id: 'NOM-8924',
    name: 'Sneha Kapur',
    guestNames: ['Sneha Kapur', 'Rohan Kapur'],
    phone: '+91 99887 66554',
    activity: 'Stand Up Paddleboarding (SUP)',
    date: '2026-09-05',
    timeSlot: 'Midday Daytime Batch (9:00 AM - 3:00 PM)',
    guests: '2',
    status: 'Completed',
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString() // 30 mins ago
  },
  {
    id: 'NOM-8923',
    name: 'Vikram & Priya',
    guestNames: ['Vikram Singh', 'Priya Singh', 'Aarav Singh', 'Riya Singh'],
    phone: '+91 91234 56789',
    activity: 'Mangrove Country Boating (Traditional)',
    date: '2026-09-06',
    timeSlot: 'Morning Sunrise Batch (Starts 6:00 AM)',
    guests: '4',
    status: 'Confirmed',
    message: 'Family with 2 children.',
    createdAt: new Date(Date.now() - 1000 * 60 * 120).toISOString() // 2 hours ago
  },
  {
    id: 'NOM-8922',
    name: 'Ananya Nair',
    guestNames: ['Ananya Nair'],
    phone: '+91 94455 12345',
    activity: 'Mangrove Kayaking (1-Seater Solo)',
    date: '2026-09-05',
    timeSlot: 'Evening Sunset Batch (Starts 4:00 PM)',
    guests: '1',
    status: 'Pending',
    createdAt: new Date(Date.now() - 1000 * 60 * 300).toISOString() // 5 hours ago
  },
  {
    id: 'NOM-8921',
    name: 'Rahul Sharma',
    guestNames: ['Rahul Sharma', 'Neha Sharma'],
    phone: '+91 98765 43210',
    activity: 'Mangrove Kayaking (2-Seater Tandem)',
    date: '2026-09-05',
    timeSlot: 'Morning Sunrise Batch (Starts 6:00 AM)',
    guests: '2',
    status: 'Confirmed',
    message: 'Requesting early sunrise photo assistance.',
    createdAt: new Date(Date.now() - 1000 * 60 * 600).toISOString() // 10 hours ago
  }
];

interface CustomStatusDropdownProps {
  value: BookingRecord['status'];
  onChange: (newStatus: BookingRecord['status']) => void;
}

const STATUS_OPTIONS: { 
  value: BookingRecord['status']; 
  label: string; 
  icon: React.ReactNode; 
  badgeClass: string; 
  activeClass: string;
}[] = [
  { 
    value: 'Confirmed', 
    label: 'Confirmed', 
    icon: <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />,
    badgeClass: 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100',
    activeClass: 'bg-emerald-50 text-emerald-900 font-extrabold'
  },
  { 
    value: 'Pending', 
    label: 'Pending', 
    icon: <Clock className="w-3.5 h-3.5 text-amber-600" />,
    badgeClass: 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100',
    activeClass: 'bg-amber-50 text-amber-900 font-extrabold'
  },
  { 
    value: 'Completed', 
    label: 'Completed', 
    icon: <Sparkles className="w-3.5 h-3.5 text-sky-600" />,
    badgeClass: 'bg-sky-50 text-sky-800 border-sky-300 hover:bg-sky-100',
    activeClass: 'bg-sky-50 text-sky-900 font-extrabold'
  },
  { 
    value: 'Cancelled', 
    label: 'Cancelled', 
    icon: <XCircle className="w-3.5 h-3.5 text-rose-600" />,
    badgeClass: 'bg-rose-50 text-rose-800 border-rose-300 hover:bg-rose-100',
    activeClass: 'bg-rose-50 text-rose-900 font-extrabold'
  }
];

export const CustomStatusDropdown: React.FC<CustomStatusDropdownProps> = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentOpt = STATUS_OPTIONS.find(o => o.value === value) || STATUS_OPTIONS[0];

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`text-xs font-extrabold px-3 py-1.5 rounded-xl outline-none border transition-all flex items-center gap-1.5 shadow-xs cursor-pointer ${currentOpt.badgeClass}`}
      >
        {currentOpt.icon}
        <span>{currentOpt.label}</span>
        <ChevronDown className={`w-3 h-3 text-slate-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-40 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl p-1.5 z-30 animate-fadeIn space-y-1">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-xl transition-all ${
                value === opt.value ? opt.activeClass : 'hover:bg-slate-50 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                {opt.icon}
                <span className="font-bold">{opt.label}</span>
              </div>
              {value === opt.value && <CheckCircle2 className="w-3.5 h-3.5 text-mangrove-800" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export const AdminPage: React.FC = () => {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // New Booking Form State
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newActivity, setNewActivity] = useState('Mangrove Kayaking (2-Seater Tandem)');
  const [newDate, setNewDate] = useState('');
  const [newSlot, setNewSlot] = useState('Morning Sunrise Batch (Starts 6:00 AM)');
  const [newGuests, setNewGuests] = useState('2');
  const [newGuestNamesInput, setNewGuestNamesInput] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('nomadoo_bookings');
    if (saved) {
      try {
        setBookings(JSON.parse(saved));
      } catch (e) {
        setBookings(DEFAULT_BOOKINGS);
      }
    } else {
      setBookings(DEFAULT_BOOKINGS);
      localStorage.setItem('nomadoo_bookings', JSON.stringify(DEFAULT_BOOKINGS));
    }
  }, []);

  const updateBookingsState = (updated: BookingRecord[]) => {
    setBookings(updated);
    localStorage.setItem('nomadoo_bookings', JSON.stringify(updated));
  };

  const handleStatusChange = (id: string, newStatus: BookingRecord['status']) => {
    const updated = bookings.map(b => b.id === id ? { ...b, status: newStatus } : b);
    updateBookingsState(updated);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this booking record?')) {
      const updated = bookings.filter(b => b.id !== id);
      updateBookingsState(updated);
    }
  };

  const handleAddManualBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newPhone) return;

    const parsedGuestNames = newGuestNamesInput 
      ? newGuestNamesInput.split(',').map(s => s.trim()).filter(Boolean)
      : [newName];

    const newBooking: BookingRecord = {
      id: `NOM-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newName,
      phone: newPhone,
      activity: newActivity,
      date: newDate || new Date().toISOString().split('T')[0],
      timeSlot: newSlot,
      guests: parsedGuestNames.length > 0 ? String(parsedGuestNames.length) : newGuests,
      guestNames: parsedGuestNames,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    // Prepend new booking so it appears at the top immediately
    const updated = [newBooking, ...bookings];
    updateBookingsState(updated);
    setShowAddModal(false);
    setNewName('');
    setNewPhone('');
    setNewGuestNamesInput('');
  };

  const formatCreatedTime = (createdStr: string) => {
    if (!createdStr) return 'Just now';
    try {
      const d = new Date(createdStr);
      if (isNaN(d.getTime())) return createdStr;
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + 
        ' • ' + d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    } catch (e) {
      return createdStr;
    }
  };

  // Filter & sort newest bookings first at the top
  const filteredBookings = bookings
    .filter(b => {
      const matchesSearch = 
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        b.phone.includes(search) ||
        b.activity.toLowerCase().includes(search.toLowerCase()) ||
        b.id.toLowerCase().includes(search.toLowerCase()) ||
        (b.guestNames && b.guestNames.some(g => g.toLowerCase().includes(search.toLowerCase())));
      
      const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const timeA = new Date(a.createdAt).getTime() || 0;
      const timeB = new Date(b.createdAt).getTime() || 0;
      return timeB - timeA; // Newest first at top!
    });

  return (
    <div className="min-h-screen bg-slate-100/80 text-slate-800 font-sans selection:bg-mangrove-100 selection:text-mangrove-900 pb-16">
      
      {/* Top Admin Header - Clean Light White 80% */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <a 
              href="/"
              className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Main Site</span>
            </a>

            <div className="flex items-center gap-2">
              <div className="bg-sand-100 p-1 rounded-lg border border-sand-300">
                <img src="/logo.jpg" alt="Nomadoo Logo" className="h-6 w-auto object-contain rounded" />
              </div>
              <span className="text-base font-extrabold tracking-tight text-slate-900">
                NOMADOO <span className="text-mangrove-800 font-extrabold">ADMIN</span>
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="bg-mangrove-800 hover:bg-mangrove-900 text-white text-xs font-extrabold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-md transition-all active:scale-95"
          >
            <Plus className="w-4 h-4" />
            <span>Add Booking</span>
          </button>

        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-slate-200/80 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Bookings</span>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">{bookings.length}</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-emerald-200/80 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider">Confirmed</span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">
              {bookings.filter(b => b.status === 'Confirmed').length}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-amber-200/80 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Pending</span>
            <div className="text-2xl sm:text-3xl font-black text-amber-600">
              {bookings.filter(b => b.status === 'Pending').length}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-sky-200/80 shadow-sm space-y-1">
            <span className="text-[11px] font-bold text-sky-700 uppercase tracking-wider">Completed</span>
            <div className="text-2xl sm:text-3xl font-black text-sky-600">
              {bookings.filter(b => b.status === 'Completed').length}
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl border border-slate-200/80 shadow-sm">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search name, guest name, phone..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-mangrove-600 focus:bg-white rounded-xl pl-9 pr-4 py-2 text-xs text-slate-900 placeholder-slate-400 outline-none transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto no-scrollbar py-0.5">
            {['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  statusFilter === status
                    ? 'bg-mangrove-800 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW: Cards Layout */}
        <div className="block md:hidden space-y-3">
          {filteredBookings.length === 0 ? (
            <div className="bg-white/80 p-8 rounded-2xl text-center space-y-2 border border-slate-200">
              <AlertCircle className="w-6 h-6 text-slate-400 mx-auto" />
              <p className="text-xs text-slate-500 font-bold">No bookings found.</p>
            </div>
          ) : (
            filteredBookings.map((b) => (
              <div 
                key={b.id} 
                className="bg-white/90 backdrop-blur-sm rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3"
              >
                {/* Header Row: Customer Name & Customized Dropdown */}
                <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] font-mono font-bold text-slate-400">{b.id}</span>
                      <span className="text-[10px] font-extrabold text-mangrove-800 bg-mangrove-50 px-2 py-0.5 rounded-md border border-mangrove-200">
                        {formatCreatedTime(b.createdAt)}
                      </span>
                    </div>
                    <h4 className="text-sm font-black text-slate-900 mt-1">{b.name}</h4>
                  </div>

                  {/* Customized Status Dropdown Component */}
                  <CustomStatusDropdown 
                    value={b.status} 
                    onChange={(newStatus) => handleStatusChange(b.id, newStatus)} 
                  />
                </div>

                {/* Details */}
                <div className="space-y-2 text-xs">
                  <div className="font-extrabold text-mangrove-900 leading-snug flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-mangrove-700 shrink-0" />
                    <span>{b.activity}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-slate-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-mangrove-700" />
                      <span>{b.date || 'Flexible'}</span>
                    </span>
                    <span className="text-sunset-600 font-semibold">{b.timeSlot}</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-500" />
                      <span>{b.guests} Guests</span>
                    </span>
                  </div>

                  {/* Multiple Guest Names Pill Container */}
                  {b.guestNames && b.guestNames.length > 0 && (
                    <div className="bg-sand-50/80 p-2.5 rounded-xl border border-sand-200/80 space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                        <Users className="w-3 h-3 text-mangrove-700" />
                        Guest List ({b.guestNames.length}):
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {b.guestNames.map((gName, idx) => (
                          <span 
                            key={idx} 
                            className="bg-white border border-sand-300 text-slate-800 text-[11px] font-extrabold px-2 py-0.5 rounded-lg shadow-xs"
                          >
                            {gName}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {b.message && (
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200 text-[11px] text-slate-600 italic">
                      "{b.message}"
                    </div>
                  )}
                </div>

                {/* Mobile Quick Action Buttons */}
                <div className="pt-2 flex items-center justify-between gap-2 border-t border-slate-100">
                  <span className="text-[11px] font-mono text-slate-400">{b.phone}</span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(b.name)},%20regarding%20your%20Nomadoo%20Varkala%20booking%20(${b.id})...`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-[#25D366] text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs"
                    >
                      <WhatsappIcon className="w-3.5 h-3.5 fill-white" showBackground={false} />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${b.phone.replace(/[^0-9]/g, '')}`}
                      className="p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                      title="Call"
                    >
                      <Phone className="w-4 h-4" />
                    </a>

                    <button
                      onClick={() => handleDelete(b.id)}
                      className="p-1.5 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            ))
          )}
        </div>

        {/* DESKTOP VIEW: Clean Table Layout */}
        <div className="hidden md:block bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
          {filteredBookings.length === 0 ? (
            <div className="p-12 text-center space-y-2">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-xs text-slate-500 font-bold">No booking records found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-extrabold uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-4">Booking ID & Time</th>
                    <th className="py-3.5 px-4">Customer & Guest List</th>
                    <th className="py-3.5 px-4">Activity</th>
                    <th className="py-3.5 px-4">Date & Slot</th>
                    <th className="py-3.5 px-4">Guests</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-50/80 transition-colors">
                      
                      <td className="py-4 px-4 font-mono font-bold text-slate-500">
                        <div>{b.id}</div>
                        <div className="text-[10px] font-semibold text-mangrove-800 bg-mangrove-50/80 px-2 py-0.5 rounded-md border border-mangrove-200 inline-block mt-1 font-sans">
                          {formatCreatedTime(b.createdAt)}
                        </div>
                      </td>

                      {/* Customer & Guest Names */}
                      <td className="py-4 px-4 max-w-xs">
                        <div className="font-extrabold text-slate-900 text-sm">{b.name}</div>
                        <div className="text-slate-500 text-[11px] font-mono mt-0.5">{b.phone}</div>
                        
                        {b.guestNames && b.guestNames.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {b.guestNames.map((gName, idx) => (
                              <span 
                                key={idx}
                                className="bg-sand-100 border border-sand-300 text-slate-800 text-[10px] font-extrabold px-1.5 py-0.5 rounded-md"
                              >
                                {gName}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="py-4 px-4 max-w-xs">
                        <div className="font-bold text-mangrove-900 truncate">{b.activity}</div>
                        {b.message && (
                          <div className="text-[10px] text-slate-500 truncate italic mt-0.5">
                            "{b.message}"
                          </div>
                        )}
                      </td>

                      <td className="py-4 px-4">
                        <div className="font-bold text-slate-800 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-mangrove-600 shrink-0" />
                          <span>{b.date || 'Flexible'}</span>
                        </div>
                        <div className="text-[10px] text-sunset-600 font-semibold mt-0.5 truncate max-w-[180px]">
                          {b.timeSlot}
                        </div>
                      </td>

                      <td className="py-4 px-4 font-bold text-slate-700">
                        {b.guests} {parseInt(b.guests) === 1 ? 'Guest' : 'Guests'}
                      </td>

                      {/* Status Dropdown */}
                      <td className="py-4 px-4">
                        <CustomStatusDropdown 
                          value={b.status} 
                          onChange={(newStatus) => handleStatusChange(b.id, newStatus)} 
                        />
                      </td>

                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <a
                            href={`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(b.name)},%20regarding%20your%20Nomadoo%20Varkala%20booking%20(${b.id})...`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                            title="WhatsApp"
                          >
                            <WhatsappIcon className="w-4 h-4 fill-current" showBackground={false} />
                          </a>

                          <a
                            href={`tel:${b.phone.replace(/[^0-9]/g, '')}`}
                            className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-mangrove-800 hover:text-white transition-colors"
                            title="Call"
                          >
                            <Phone className="w-4 h-4" />
                          </a>

                          <button
                            onClick={() => handleDelete(b.id)}
                            className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:bg-rose-100 hover:text-rose-600 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </main>

      {/* Add Manual Booking Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-slate-200 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-base font-extrabold text-slate-900">Add Manual Booking</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-slate-700 text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddManualBooking} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Primary Customer Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 outline-none focus:border-mangrove-600"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Phone Number *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 9876543210"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 outline-none focus:border-mangrove-600"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">
                  Guest Names (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma, Neha Sharma, Ananya Sharma"
                  value={newGuestNamesInput}
                  onChange={(e) => setNewGuestNamesInput(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 outline-none focus:border-mangrove-600"
                />
                <p className="text-[10px] text-slate-400 mt-1">Separate multiple guest names using commas.</p>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Activity</label>
                <select
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-slate-900 outline-none focus:border-mangrove-600"
                >
                  <option value="Mangrove Kayaking (1-Seater Solo)">1-Seater Solo Kayak (₹600)</option>
                  <option value="Mangrove Kayaking (2-Seater Tandem)">2-Seater Tandem Kayak (₹1,200)</option>
                  <option value="Mangrove Country Boating">Mangrove Country Boating</option>
                  <option value="Mangrove Semi Speed Boating">Mangrove Semi Speed Boating</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Date</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-slate-900 outline-none focus:border-mangrove-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Total Guests</label>
                  <input
                    type="number"
                    min="1"
                    value={newGuests}
                    onChange={(e) => setNewGuests(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2 text-slate-900 outline-none focus:border-mangrove-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-mangrove-800 hover:bg-mangrove-900 text-white font-extrabold py-3 rounded-xl transition-colors mt-2"
              >
                Save Booking
              </button>
            </form>

          </div>
        </div>
      )}

    </div>
  );
};
