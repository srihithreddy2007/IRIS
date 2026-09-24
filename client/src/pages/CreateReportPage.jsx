import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { PlusCircle, HelpCircle, CheckCircle2, MapPin, Image as ImageIcon, Loader2 } from 'lucide-react';

const CATEGORIES = ['Electronics', 'Documents', 'Accessories', 'Clothing', 'Books', 'Keys', 'Bags', 'Other'];

export const CreateReportPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { showToast } = useAuth();

  const [type, setType] = useState(searchParams.get('type') || 'LOST');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Other');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!title || !location || !date || !description) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        title: title.trim(),
        type,
        category,
        location: location.trim(),
        date: new Date(date).toISOString(),
        description: description.trim(),
      };

      if (imageUrl.trim()) {
        payload.imageUrl = imageUrl.trim();
      }

      const res = await axios.post('/api/reports', payload);
      if (res.data.success) {
        showToast('Report created successfully!', 'success');
        navigate(`/reports/${res.data.data._id}`);
      }
    } catch (err) {
      setErrorMessage(err.response?.data?.error || 'Failed to create report.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
      
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold text-slate-900">Post a Campus Report</h1>
        <p className="text-xs text-slate-500">Provide detailed information to help identify and return the item.</p>
      </div>

      {/* Form Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6 shadow-xl">
        
        {errorMessage && (
          <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 text-xs font-medium text-center">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Type Selector (LOST vs FOUND) */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-slate-600">Report Type</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setType('LOST')}
                className={`py-3.5 px-4 rounded-2xl border font-bold text-xs flex items-center justify-center gap-2 transition ${
                  type === 'LOST'
                    ? 'bg-indigo-50 border-indigo-400 text-indigo-700 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <HelpCircle className="w-4 h-4" />
                I LOST something
              </button>

              <button
                type="button"
                onClick={() => setType('FOUND')}
                className={`py-3.5 px-4 rounded-2xl border font-bold text-xs flex items-center justify-center gap-2 transition ${
                  type === 'FOUND'
                    ? 'bg-rose-50 border-rose-400 text-rose-700 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                I FOUND something
              </button>
            </div>
          </div>

          {/* Title / Item Name */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600">Item Name / Title *</label>
            <input
              type="text"
              required
              maxLength={100}
              placeholder="e.g. Blue Jansport Backpack, Airpods Pro, Student ID"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-sm"
            />
          </div>

          {/* Category & Date Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-3 rounded-xl glass-input text-sm cursor-pointer"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat} className="bg-white text-slate-900">
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-slate-600">Date {type === 'LOST' ? 'Lost' : 'Found'} *</label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-4 py-3 rounded-xl glass-input text-sm"
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600">Specific Location *</label>
            <div className="relative flex items-center">
              <MapPin className="absolute left-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                required
                maxLength={200}
                placeholder="e.g. Library 2nd Floor, Main Cafeteria Bench"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600">Detailed Description *</label>
            <textarea
              required
              rows={4}
              maxLength={1000}
              placeholder="Describe color, brand, distinct features, tears, or specific markings..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-3 rounded-xl glass-input text-sm resize-none"
            />
          </div>

          {/* Optional Image URL */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-slate-600">Image URL (Optional)</label>
            <div className="relative flex items-center">
              <ImageIcon className="absolute left-3.5 w-4 h-4 text-slate-400" />
              <input
                type="url"
                placeholder="https://images.unsplash.com/photo-..."
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl glass-input text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-2xl font-bold bg-indigo-600 text-white shadow-soft hover:bg-indigo-700 hover:scale-[1.01] active:scale-[0.99] transition flex items-center justify-center gap-2 text-sm disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Report...
              </>
            ) : (
              <>
                <PlusCircle className="w-5 h-5" />
                Submit {type} Report
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
};
