const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide an item name/title'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    description: {
      type: String,
      required: [true, 'Please provide a description'],
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters'],
    },
    type: {
      type: String,
      enum: {
        values: ['LOST', 'FOUND'],
        message: 'Type must be either LOST or FOUND',
      },
      required: [true, 'Please specify if the item is lost or found'],
    },
    category: {
      type: String,
      enum: [
        'Electronics',
        'Documents',
        'Accessories',
        'Clothing',
        'Books',
        'Keys',
        'Bags',
        'Other',
      ],
      default: 'Other',
    },
    location: {
      type: String,
      required: [true, 'Please provide the location'],
      trim: true,
      maxlength: [200, 'Location cannot exceed 200 characters'],
    },
    date: {
      type: Date,
      required: [true, 'Please provide the date when the item was lost/found'],
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'RESOLVED', 'REMOVED'],
      default: 'ACTIVE',
    },
    imageUrl: {
      type: String,
      default: null,
    },
    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    resolvedAt: {
      type: Date,
      default: null,
    },
    adminNotes: {
      type: String,
      default: null,
      maxlength: [500, 'Admin notes cannot exceed 500 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Index for search functionality
reportSchema.index({ title: 'text', description: 'text', location: 'text' });
reportSchema.index({ type: 1, status: 1 });
reportSchema.index({ reportedBy: 1 });
reportSchema.index({ date: -1 });

module.exports = mongoose.model('Report', reportSchema);
