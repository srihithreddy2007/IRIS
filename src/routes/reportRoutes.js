const express = require('express');
const router = express.Router();
const {
  createReport,
  getReports,
  getReport,
  updateReport,
  deleteReport,
  resolveReport,
  getMyReports,
} = require('../controllers/reportController');
const { protect } = require('../middleware/auth');
const {
  validateCreateReport,
  validateUpdateReport,
  validateObjectId,
} = require('../middleware/validate');

// All routes require authentication
router.use(protect);

// User's own reports (must be before /:id to avoid conflict)
router.get('/my-reports', getMyReports);

// CRUD operations
router.route('/')
  .get(getReports)
  .post(validateCreateReport, createReport);

router.route('/:id')
  .get(validateObjectId, getReport)
  .put(validateObjectId, validateUpdateReport, updateReport)
  .delete(validateObjectId, deleteReport);

// Resolve a report
router.patch('/:id/resolve', validateObjectId, resolveReport);

module.exports = router;
