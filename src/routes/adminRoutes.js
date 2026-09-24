const express = require('express');
const router = express.Router();
const {
  getAllReports,
  updateReportStatus,
  removeReport,
  getDashboardStats,
} = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/auth');
const {
  validateAdminStatusUpdate,
  validateObjectId,
} = require('../middleware/validate');

// All admin routes require authentication + ADMIN role
router.use(protect);
router.use(authorize('ADMIN'));

router.get('/stats', getDashboardStats);
router.get('/reports', getAllReports);
router.put('/reports/:id/status', validateObjectId, validateAdminStatusUpdate, updateReportStatus);
router.delete('/reports/:id', validateObjectId, removeReport);

module.exports = router;
