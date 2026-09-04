import React, { useState, useEffect } from 'react';
import { 
  Calendar, Phone, User, Search, Filter, Plus, Trash2, ArrowLeft, 
  CheckCircle2, Clock, AlertCircle, XCircle, Sparkles, RefreshCw 
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
  message?: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
  createdAt: string;
}

const DEFAULT_BOOKINGS: BookingRecord[] = [
  {
    id: 'NOM-8921',
    name: 'Rahul Sharma',
    phone: '+91 98765 43210',
    activity: 'Mangrove Kayaking (2-Seater Tandem)',
    date: '2026-09-05',
    timeSlot: 'Morning Sunrise Batch (Starts 6:00 AM)',
    guests: '2',
    status: 'Confirmed',
    message: 'Requesting early sunrise photo assistance.',
    createdAt: '2026-09-04 18:30'
  },
  {
    id: 'NOM-8922',
    name: 'Ananya Nair',
    phone: '+91 94455 12345',
    activity: 'Mangrove Kayaking (1-Seater Solo)',
    date: '2026-09-05',
    timeSlot: 'Evening Sunset Batch (Starts 4:00 PM)',
    guests: '1',
    status: 'Pending',
    createdAt: '2026-09-04 20:15'
  },
  {
    id: 'NOM-8923',
    name: 'Vikram & Priya',
    phone: '+91 91234 56789',
    activity: 'Mangrove Country Boating (Traditional)',
    date: '2026-09-06',
    timeSlot: 'Morning Sunrise Batch (Starts 6:00 AM)',
    guests: '4',
    status: 'Confirmed',
    message: 'Family with 2 children.',
    createdAt: '2026-09-04 21:00'
  },
  {
    id: 'NOM-8924',
    name: 'Sneha Kapur',
    phone: '+91 99887 66554',
    activity: 'Stand Up Paddleboarding (SUP)',
    date: '2026-09-04',
    timeSlot: 'Midday Daytime Batch (9:00 AM - 3:00 PM)',
    guests: '2',
    status: 'Completed',
    createdAt: '2026-09-04 10:00'
  }
];

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

    const newBooking: BookingRecord = {
      id: `NOM-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newName,
      phone: newPhone,
      activity: newActivity,
      date: newDate || new Date().toISOString().split('T')[0],
      timeSlot: newSlot,
      guests: newGuests,
      status: 'Confirmed',
      createdAt: new Date().toLocaleString()
    };

    const updated = [newBooking, ...bookings];
    updateBookingsState(updated);
    setShowAddModal(false);
    setNewName('');
    setNewPhone('');
  };

  const filteredBookings = bookings.filter(b => {
    const matchesSearch = 
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search) ||
      b.activity.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase());
    
    const matchesStatus = statusFilter === 'All' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: BookingRecord['status']) => {
    switch (status) {
      case 'Confirmed':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-500/10 text-emerald-700 font-extrabold text-xs px-2.5 py-1 rounded-full border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Confirmed</span>
          </span>
        );
      case 'Pending':
        return (
          <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-700 font-extrabold text-xs px-2.5 py-1 rounded-full border border-amber-500/30">
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            <span>Pending</span>
          </span>
        );
      case 'Completed':
        return (
          <span className="inline-flex items-center gap-1 bg-sky-500/10 text-sky-700 font-extrabold text-xs px-2.5 py-1 rounded-full border border-sky-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Completed</span>
          </span>
        );
      case 'Cancelled':
        return (
          <span className="inline-flex items-center gap-1 bg-rose-500/10 text-rose-700 font-extrabold text-xs px-2.5 py-1 rounded-full border border-rose-500/30">
            <XCircle className="w-3.5 h-3.5" />
            <span>Cancelled</span>
          </span>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-mangrove-900 selection:text-white">
      
      {/* Top Admin Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <a 
              href="/"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Main Site</span>
            </a>

            <div className="flex items-center gap-2">
              <div className="bg-white p-1 rounded-lg">
                <img src="/logo.jpg" alt="Nomadoo Logo" className="h-6 w-auto object-contain rounded" />
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">
                NOMADOO <span className="text-sunset-500">ADMIN</span>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowAddModal(true)}
              className="bg-mangrove-800 hover:bg-mangrove-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl flex items-center gap-1.5 shadow-md transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>Add Booking</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Admin Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Metrics Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Bookings</span>
            <div className="text-2xl sm:text-3xl font-black text-white">{bookings.length}</div>
          </div>
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Confirmed</span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400">
              {bookings.filter(b => b.status === 'Confirmed').length}
            </div>
          </div>
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Pending</span>
            <div className="text-2xl sm:text-3xl font-black text-amber-400">
              {bookings.filter(b => b.status === 'Pending').length}
            </div>
          </div>
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 space-y-1">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Completed</span>
            <div className="text-2xl sm:text-3xl font-black text-sky-400">
              {bookings.filter(b => b.status === 'Completed').length}
            </div>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800">
          
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, phone, activity..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-mangrove-600 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 outline-none transition-all"
            />
          </div>

          {/* Status Filters */}
          <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            {['All', 'Confirmed', 'Pending', 'Completed', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                  statusFilter === status
                    ? 'bg-mangrove-800 text-white shadow-md'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {status}
              </button>
            ))}
          </div>

        </div>

        {/* Bookings Table / List */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          
          {filteredBookings.length === 0 ? (
            <div className="p-12 text-center space-y-3">
              <AlertCircle className="w-8 h-8 text-slate-500 mx-auto" />
              <p className="text-sm text-slate-400 font-semibold">No booking records found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-950/60 border-b border-slate-800 text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
                    <th className="py-3.5 px-4">Booking ID</th>
                    <th className="py-3.5 px-4">Customer</th>
                    <th className="py-3.5 px-4">Activity</th>
                    <th className="py-3.5 px-4">Date & Slot</th>
                    <th className="py-3.5 px-4">Guests</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-xs">
                  {filteredBookings.map((b) => (
                    <tr key={b.id} className="hover:bg-slate-800/40 transition-colors">
                      
                      {/* ID */}
                      <td className="py-4 px-4 font-mono font-bold text-slate-300">
                        {b.id}
                      </td>

                      {/* Customer */}
                      <td className="py-4 px-4">
                        <div className="font-extrabold text-white">{b.name}</div>
                        <div className="text-slate-400 text-[11px] font-mono mt-0.5">{b.phone}</div>
                      </td>

                      {/* Activity */}
                      <td className="py-4 px-4 max-w-xs">
                        <div className="font-bold text-slate-200 truncate">{b.activity}</div>
                        {b.message && (
                          <div className="text-[10px] text-slate-400 truncate italic mt-0.5">
                            "{b.message}"
                          </div>
                        )}
                      </td>

                      {/* Date & Slot */}
                      <td className="py-4 px-4">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-mangrove-400 shrink-0" />
                          <span>{b.date || 'Flexible'}</span>
                        </div>
                        <div className="text-[10px] text-sunset-400 font-semibold mt-0.5 truncate max-w-[180px]">
                          {b.timeSlot}
                        </div>
                      </td>

                      {/* Guests */}
                      <td className="py-4 px-4 font-bold text-slate-200">
                        {b.guests} {parseInt(b.guests) === 1 ? 'Guest' : 'Guests'}
                      </td>

                      {/* Status Selector Badge */}
                      <td className="py-4 px-4">
                        <div className="relative inline-block">
                          <select
                            value={b.status}
                            onChange={(e) => handleStatusChange(b.id, e.target.value as BookingRecord['status'])}
                            className="bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1 text-xs font-bold text-white outline-none cursor-pointer hover:border-slate-700 transition-colors"
                          >
                            <option value="Confirmed">✅ Confirmed</option>
                            <option value="Pending">⏳ Pending</option>
                            <option value="Completed">✨ Completed</option>
                            <option value="Cancelled">❌ Cancelled</option>
                          </select>
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          
                          {/* WhatsApp Chat Button */}
                          <a
                            href={`https://wa.me/${b.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(b.name)},%20regarding%20your%20Nomadoo%20Varkala%20booking%20(${b.id})...`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
                            title="Chat on WhatsApp"
                          >
                            <WhatsappIcon className="w-4 h-4 fill-current" showBackground={false} />
                          </a>

                          {/* Direct Call */}
                          <a
                            href={`tel:${b.phone.replace(/[^0-9]/g, '')}`}
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:bg-mangrove-800 hover:text-white transition-colors"
                            title="Call Customer"
                          >
                            <Phone className="w-4 h-4" />
                          </a>

                          {/* Delete */}
                          <button
                            onClick={() => handleDelete(b.id)}
                            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:bg-rose-900/50 hover:text-rose-400 transition-colors"
                            title="Delete Record"
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
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 rounded-3xl max-w-md w-full p-6 border border-slate-800 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <h3 className="text-base font-extrabold text-white">Add Manual Booking</h3>
              <button 
                onClick={() => setShowAddModal(false)}
                className="text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddManualBooking} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-400 font-bold mb-1">Customer Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white outline-none focus:border-mangrove-600"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-bold mb-1">Phone Number</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. +91 9876543210"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white outline-none focus:border-mangrove-600"
                />
              </div>

              <div>
                <label className="block text-slate-400 font-bold mb-1">Activity</label>
                <select
                  value={newActivity}
                  onChange={(e) => setNewActivity(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white outline-none focus:border-mangrove-600"
                >
                  <option value="Mangrove Kayaking (1-Seater Solo)">1-Seater Solo Kayak (₹600)</option>
                  <option value="Mangrove Kayaking (2-Seater Tandem)">2-Seater Tandem Kayak (₹1,200)</option>
                  <option value="Mangrove Country Boating">Mangrove Country Boating</option>
                  <option value="Mangrove Semi Speed Boating">Mangrove Semi Speed Boating</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Date</label>
                  <input
                    type="date"
                    value={newDate}
                    onChange={(e) => setNewDate(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-white outline-none focus:border-mangrove-600"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 font-bold mb-1">Guests</label>
                  <input
                    type="number"
                    min="1"
                    value={newGuests}
                    onChange={(e) => setNewGuests(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2 text-white outline-none focus:border-mangrove-600"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-mangrove-800 hover:bg-mangrove-700 text-white font-extrabold py-3 rounded-xl transition-colors mt-2"
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
