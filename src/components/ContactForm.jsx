import React, { useState } from 'react';
import { Send, CheckCircle2, Wrench, Calendar, Bike } from 'lucide-react';
import { SERVICES } from '../data/services';
import { WORKSHOP_INFO } from '../data/workshopInfo';

export default function ContactForm({ preselectedService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: 'jagtial', // Default or Burnaby
    service: preselectedService || 'general-service',
    bikeDetails: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#121212] border border-[#262626] p-6 sm:p-8 rounded-sm relative shadow-2xl">
      <div className="flex items-center justify-between border-b border-[#222222] pb-4 mb-6">
        <div>
          <h3 className="font-display font-bold text-lg sm:text-xl text-white uppercase tracking-wider">
            BOOK A SERVICE / GET IN TOUCH
          </h3>
          <p className="text-xs text-gray-400 mt-0.5">
            Receive a response within 2 business hours.
          </p>
        </div>
        <div className="w-8 h-8 rounded-sm bg-[#1a1a1a] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
          <Wrench className="w-4 h-4" />
        </div>
      </div>

      {submitted ? (
        <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37] flex items-center justify-center mx-auto text-[#D4AF37]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="font-display font-bold text-xl text-white uppercase tracking-wide">
            SERVICE REQUEST RECEIVED!
          </h4>
          <p className="text-xs sm:text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
            Thank you <span className="text-[#D4AF37] font-semibold">{formData.name}</span>. Our team at{' '}
            <span className="text-white font-medium">AD Mechanic Workshop</span>{' '}
            will review your request and contact you at <span className="text-white">{formData.phone || formData.email}</span> shortly.
          </p>
          <div className="pt-4">
            <button
              onClick={() => setSubmitted(false)}
              className="bg-[#1a1a1a] hover:bg-[#252525] text-[#D4AF37] border border-[#333] font-display font-bold text-xs uppercase px-6 py-3 rounded-sm transition-colors"
            >
              SUBMIT ANOTHER REQUEST
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5">
              <label className="block font-display font-semibold text-gray-300 uppercase tracking-wider text-[11px]">
                YOUR NAME *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full bg-[#080808] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none p-3 rounded-sm text-white placeholder-gray-600 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="block font-display font-semibold text-gray-300 uppercase tracking-wider text-[11px]">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full bg-[#080808] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none p-3 rounded-sm text-white placeholder-gray-600 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div className="space-y-1.5">
              <label className="block font-display font-semibold text-gray-300 uppercase tracking-wider text-[11px]">
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className="w-full bg-[#080808] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none p-3 rounded-sm text-white placeholder-gray-600 transition-colors"
              />
            </div>

            {/* Service Select */}
            <div className="space-y-1.5">
              <label className="block font-display font-semibold text-gray-300 uppercase tracking-wider text-[11px]">
                SERVICE TYPE
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#080808] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none p-3 rounded-sm text-white transition-colors"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-[#121212] text-white">
                    {s.title} (${s.startingPrice}+)
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Motorcycle Make & Model */}
            <div className="space-y-1.5">
              <label className="block font-display font-semibold text-gray-300 uppercase tracking-wider text-[11px] flex items-center gap-1">
                <Bike className="w-3.5 h-3.5 text-[#D4AF37]" />
                MOTORCYCLE MODEL & YEAR
              </label>
              <input
                type="text"
                name="bikeDetails"
                value={formData.bikeDetails}
                onChange={handleChange}
                placeholder="e.g. 2023 Yamaha R1 / Ducati V4"
                className="w-full bg-[#080808] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none p-3 rounded-sm text-white placeholder-gray-600 transition-colors"
              />
            </div>

            {/* Preferred Date */}
            <div className="space-y-1.5">
              <label className="block font-display font-semibold text-gray-300 uppercase tracking-wider text-[11px] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
                PREFERRED DATE
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-[#080808] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none p-3 rounded-sm text-white transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-1.5">
            <label className="block font-display font-semibold text-gray-300 uppercase tracking-wider text-[11px]">
              YOUR MESSAGE / SPECIFIC SYMPTOMS
            </label>
            <textarea
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe what your bike needs (e.g. oil change, valve clearance tick, noise when braking...)"
              className="w-full bg-[#080808] border border-[#2a2a2a] focus:border-[#D4AF37] focus:outline-none p-3 rounded-sm text-white placeholder-gray-600 transition-colors"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#D4AF37] hover:bg-[#E5C45A] text-black font-display font-bold text-sm tracking-[0.2em] uppercase py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#D4AF37]/20 cursor-pointer"
          >
            {loading ? (
              <span>PROCESSING REQUEST...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
