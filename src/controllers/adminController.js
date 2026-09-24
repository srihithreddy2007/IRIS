const Report = require('../models/Report');
const User = require('../models/User');
const ApiError = require('../utils/ApiError');

// @desc    Get all reports (including removed) - Admin view
// @route   GET /api/admin/reports
// @access  Private (ADMIN)
const getAllReports = async (req, res, next) => {
  try {
    const {
      type,
      status,
      category,
      search,
      sortBy,
      order,
      page = 1,
      limit = 10,
    } = req.query;

    const filter = {};

    if (type) filter.type = type.toUpperCase();
    if (status) filter.status = status.toUpperCase();
    if (category) filter.category = category;
    if (search) {
      filter.$text = { $search: search };
    }

    const sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = order === 'asc' ? 1 : -1;
    } else {
      sortOptions.createdAt = -1;
    }

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const total = await Report.countDocuments(filter);
    const reports = await Report.find(filter)
      .populate('reportedBy', 'name email')
      .sort(sortOptions)
      .skip(skip)
      .limit(limitNum);

    res.status(200).json({
      success: true,
      count: reports.length,
      total,
      totalPages: Math.ceil(total / limitNum),
      currentPage: pageNum,
      data: reports,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update report status (admin moderation)
// @route   PUT /api/admin/reports/:id/status
// @access  Private (ADMIN)
const updateReportStatus = async (req, res, next) => {
  try {
    const { status, adminNotes } = req.body;

    let report = await Report.findById(req.params.id);
    if (!report) {
      return next(new ApiError(404, 'Report not found'));
    }

    const updateData = { status };
    if (adminNotes) updateData.adminNotes = adminNotes;
    if (status === 'RESOLVED') updateData.resolvedAt = new Date();
    if (status === 'ACTIVE') updateData.resolvedAt = null;

    report = await Report.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).populate('reportedBy', 'name email');

    res.status(200).json({
      success: true,
      message: `Report status updated to ${status}`,
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Remove/reject inappropriate report (admin)
// @route   DELETE /api/admin/reports/:id
// @access  Private (ADMIN)
const removeReport = async (req, res, next) => {
  try {
    let report = await Report.findById(req.params.id);
    if (!report) {
      return next(new ApiError(404, 'Report not found'));
    }

    // Mark as REJECTED
    report = await Report.findByIdAndUpdate(
      req.params.id,
      {
        status: 'REJECTED',
        adminNotes:
          req.body.adminNotes || 'Rejected by admin',
      },
      { new: true, runValidators: true }
    ).populate('reportedBy', 'name email');

    res.status(200).json({
      success: true,
      message: 'Report rejected by admin',
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Private (ADMIN)
const getDashboardStats = async (req, res, next) => {
  try {
    const [totalReports, activeReports, resolvedReports, rejectedReports, lostItems, foundItems, totalUsers] =
      await Promise.all([
        Report.countDocuments(),
        Report.countDocuments({ status: 'ACTIVE' }),
        Report.countDocuments({ status: 'RESOLVED' }),
        Report.countDocuments({ status: 'REJECTED' }),
        Report.countDocuments({ type: 'LOST', status: 'ACTIVE' }),
        Report.countDocuments({ type: 'FOUND', status: 'ACTIVE' }),
        User.countDocuments(),
      ]);

    // Recent reports (last 7 days)
    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
    const recentReports = await Report.countDocuments({
      createdAt: { $gte: sevenDaysAgo },
    });

    // Category breakdown
    const categoryBreakdown = await Report.aggregate([
      { $match: { status: 'ACTIVE' } },
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalReports,
        activeReports,
        resolvedReports,
        rejectedReports,
        lostItems,
        foundItems,
        totalUsers,
        recentReports,
        categoryBreakdown,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllReports,
  updateReportStatus,
  removeReport,
  getDashboardStats,
};
