import React from 'react';
import { X, ShieldCheck, FileText, Phone, Mail } from 'lucide-react';
import { CONTACT_PHONE_1, CONTACT_PHONE_2 } from '../data/nomadooData';

interface PolicyModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-sand-200 max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-sand-100 hover:bg-sand-200 text-slate-700 flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' ? (
          /* Terms & Cancellation Policy */
          <div className="space-y-6 text-slate-800">
            <div className="flex items-center gap-3 pb-4 border-b border-sand-200">
              <div className="w-10 h-10 rounded-2xl bg-mangrove-100 text-mangrove-800 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Terms & Cancellation Policy</h3>
                <p className="text-xs text-slate-500 font-medium">Nomadoo Varkala Booking Guidelines</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
              <div className="space-y-2">
                <h4 className="font-extrabold text-mangrove-800 text-sm uppercase tracking-wider">
                  Booking Terms:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                  <li>All bookings are subject to availability.</li>
                  <li>Half payment must be made to confirm the booking.</li>
                  <li>Prices are inclusive of activity charges and basic safety gear.</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-sand-100">
                <h4 className="font-extrabold text-mangrove-800 text-sm uppercase tracking-wider">
                  Cancellation & Refund Policy:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                  <li>No refunds will be provided for advance payments made to reserve slots.</li>
                  <li>If we cancel due to weather or safety issues, a full refund or reschedule will be offered.</li>
                </ul>
              </div>

              <div className="space-y-2 pt-2 border-t border-sand-100">
                <h4 className="font-extrabold text-mangrove-800 text-sm uppercase tracking-wider">
                  Customer Responsibility:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-slate-700 font-medium">
                  <li>Arrive on time for your activity.</li>
                  <li>Follow all safety instructions provided by guides.</li>
                  <li>Any damage caused to equipment or property may be chargeable.</li>
                </ul>
              </div>

              {/* Contact Information */}
              <div className="p-4 bg-sand-50 rounded-2xl border border-sand-200/80 space-y-2 mt-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact Us:</h5>
                <div className="flex flex-wrap items-center gap-4 text-xs font-extrabold text-slate-900">
                  <a href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-mangrove-800">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{CONTACT_PHONE_1}</span>
                  </a>
                  <a href={`tel:${CONTACT_PHONE_2.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-mangrove-800">
                    <Phone className="w-3.5 h-3.5 text-sunset-500" />
                    <span>{CONTACT_PHONE_2}</span>
                  </a>
                  <a href="mailto:nomadoo.bookings@gmail.com" className="flex items-center gap-1.5 hover:text-mangrove-800">
                    <Mail className="w-3.5 h-3.5 text-mangrove-700" />
                    <span>nomadoo.bookings@gmail.com</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        ) : (
          /* Privacy Policy */
          <div className="space-y-6 text-slate-800">
            <div className="flex items-center gap-3 pb-4 border-b border-sand-200">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Privacy Policy</h3>
                <p className="text-xs text-slate-500 font-medium">Your data privacy & protection</p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
              <p>
                At Nomadoo, we respect your privacy and are committed to protecting your personal information. We only collect necessary details like your name, phone number, and email to process bookings and provide our services.
              </p>
              <p>
                We do not share your information with third parties, except when required for service delivery or by law.
              </p>
              <p>
                Your data is stored securely and only used to communicate with you regarding your bookings or offers.
              </p>

              {/* Contact Information */}
              <div className="p-4 bg-sand-50 rounded-2xl border border-sand-200/80 space-y-2 mt-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-500">Contact Us:</h5>
                <div className="flex flex-wrap items-center gap-4 text-xs font-extrabold text-slate-900">
                  <a href={`tel:${CONTACT_PHONE_1.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-mangrove-800">
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{CONTACT_PHONE_1}</span>
                  </a>
                  <a href={`tel:${CONTACT_PHONE_2.replace(/\s+/g, '')}`} className="flex items-center gap-1.5 hover:text-mangrove-800">
                    <Phone className="w-3.5 h-3.5 text-sunset-500" />
                    <span>{CONTACT_PHONE_2}</span>
                  </a>
                  <a href="mailto:nomadoo.bookings@gmail.com" className="flex items-center gap-1.5 hover:text-mangrove-800">
                    <Mail className="w-3.5 h-3.5 text-mangrove-700" />
                    <span>nomadoo.bookings@gmail.com</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
