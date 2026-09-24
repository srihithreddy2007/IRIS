const { body, param, query, validationResult } = require('express-validator');
const ApiError = require('../utils/ApiError');

// Middleware to check validation results
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const messages = errors.array().map((err) => err.msg);
    return next(new ApiError(400, messages.join('. ')));
  }
  next();
};

// Validation rules for user registration
const validateRegister = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ max: 50 })
    .withMessage('Name cannot exceed 50 characters'),
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters'),
  handleValidationErrors,
];

// Validation rules for user login
const validateLogin = [
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required'),
  handleValidationErrors,
];

// Validation rules for creating a report
const validateCreateReport = [
  body('title')
    .trim()
    .notEmpty()
    .withMessage('Item name/title is required')
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  body('type')
    .notEmpty()
    .withMessage('Type is required')
    .isIn(['LOST', 'FOUND'])
    .withMessage('Type must be either LOST or FOUND'),
  body('category')
    .optional()
    .isIn([
      'Electronics',
      'Documents',
      'Accessories',
      'Clothing',
      'Books',
      'Keys',
      'Bags',
      'Other',
    ])
    .withMessage('Invalid category'),
  body('location')
    .trim()
    .notEmpty()
    .withMessage('Location is required')
    .isLength({ max: 200 })
    .withMessage('Location cannot exceed 200 characters'),
  body('date')
    .notEmpty()
    .withMessage('Date is required')
    .isISO8601()
    .withMessage('Please provide a valid date in ISO 8601 format'),
  body('imageUrl').optional().isURL().withMessage('Please provide a valid URL'),
  handleValidationErrors,
];

// Validation rules for updating a report
const validateUpdateReport = [
  body('title')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Title cannot exceed 100 characters'),
  body('description')
    .optional()
    .trim()
    .isLength({ max: 1000 })
    .withMessage('Description cannot exceed 1000 characters'),
  body('type')
    .optional()
    .isIn(['LOST', 'FOUND'])
    .withMessage('Type must be either LOST or FOUND'),
  body('category')
    .optional()
    .isIn([
      'Electronics',
      'Documents',
      'Accessories',
      'Clothing',
      'Books',
      'Keys',
      'Bags',
      'Other',
    ])
    .withMessage('Invalid category'),
  body('location')
    .optional()
    .trim()
    .isLength({ max: 200 })
    .withMessage('Location cannot exceed 200 characters'),
  body('date')
    .optional()
    .isISO8601()
    .withMessage('Please provide a valid date in ISO 8601 format'),
  body('imageUrl').optional().isURL().withMessage('Please provide a valid URL'),
  handleValidationErrors,
];

// Validation for admin status update
const validateAdminStatusUpdate = [
  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['ACTIVE', 'RESOLVED', 'REMOVED'])
    .withMessage('Status must be ACTIVE, RESOLVED, or REMOVED'),
  body('adminNotes')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Admin notes cannot exceed 500 characters'),
  handleValidationErrors,
];

// Validate MongoDB ObjectId parameter
const validateObjectId = [
  param('id').isMongoId().withMessage('Invalid resource ID format'),
  handleValidationErrors,
];

module.exports = {
  validateRegister,
  validateLogin,
  validateCreateReport,
  validateUpdateReport,
  validateAdminStatusUpdate,
  validateObjectId,
};
