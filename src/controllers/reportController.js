const Report = require('../models/Report');
const ApiError = require('../utils/ApiError');

// @desc    Create a new lost/found report
// @route   POST /api/reports
// @access  Private (USER, ADMIN)
const createReport = async (req, res, next) => {
  try {
    req.body.reportedBy = req.user.id;

    const report = await Report.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Report created successfully',
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all reports (with search, filter, pagination)
// @route   GET /api/reports
// @access  Private (USER, ADMIN)
const getReports = async (req, res, next) => {
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

    // Build query - only show ACTIVE and RESOLVED reports to users
    const filter = { status: { $ne: 'REJECTED' } };

    if (type) filter.type = type.toUpperCase();
    if (status && status !== 'REJECTED') filter.status = status.toUpperCase();
    if (category) filter.category = category;

    // Text search
    if (search) {
      filter.$text = { $search: search };
    }

    // Sort
    const sortOptions = {};
    if (sortBy) {
      sortOptions[sortBy] = order === 'asc' ? 1 : -1;
    } else {
      sortOptions.createdAt = -1;
    }

    // Pagination
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

// @desc    Get single report by ID
// @route   GET /api/reports/:id
// @access  Private (USER, ADMIN)
const getReport = async (req, res, next) => {
  try {
    const report = await Report.findById(req.params.id).populate(
      'reportedBy',
      'name email'
    );

    if (!report) {
      return next(new ApiError(404, 'Report not found'));
    }

    // Don't show rejected reports to regular users
    if (report.status === 'REJECTED' && req.user.role !== 'ADMIN') {
      return next(new ApiError(404, 'Report not found'));
    }

    res.status(200).json({
      success: true,
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update own report
// @route   PUT /api/reports/:id
// @access  Private (Owner only)
const updateReport = async (req, res, next) => {
  try {
    let report = await Report.findById(req.params.id);

    if (!report) {
      return next(new ApiError(404, 'Report not found'));
    }

    // Check ownership
    if (report.reportedBy.toString() !== req.user.id) {
      return next(
        new ApiError(403, 'You are not authorized to update this report')
      );
    }

    // Only allow updates on ACTIVE reports
    if (report.status !== 'ACTIVE') {
      return next(
        new ApiError(400, 'Cannot update a report that is not active')
      );
    }

    // Prevent status and adminNotes modification by users
    delete req.body.status;
    delete req.body.reportedBy;
    delete req.body.adminNotes;
    delete req.body.resolvedAt;

    report = await Report.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate('reportedBy', 'name email');

    res.status(200).json({
      success: true,
      message: 'Report updated successfully',
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete own report
// @route   DELETE /api/reports/:id
// @access  Private (Owner only)
const deleteReport = async (req, res, next) => {
  try {
    const report = await Report.findById(req.params.id);

    if (!report) {
      return next(new ApiError(404, 'Report not found'));
    }

    // Check ownership
    if (report.reportedBy.toString() !== req.user.id) {
      return next(
        new ApiError(403, 'You are not authorized to delete this report')
      );
    }

    // Only allow deletion of ACTIVE reports
    if (report.status !== 'ACTIVE') {
      return next(
        new ApiError(400, 'Cannot delete a report that is not active')
      );
    }

    await Report.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: 'Report deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Mark own report as resolved
// @route   PATCH /api/reports/:id/resolve
// @access  Private (Owner only)
const resolveReport = async (req, res, next) => {
  try {
    let report = await Report.findById(req.params.id);

    if (!report) {
      return next(new ApiError(404, 'Report not found'));
    }

    // Check ownership
    if (report.reportedBy.toString() !== req.user.id) {
      return next(
        new ApiError(403, 'You are not authorized to resolve this report')
      );
    }

    // Only allow resolving ACTIVE reports
    if (report.status !== 'ACTIVE') {
      return next(
        new ApiError(400, 'Only active reports can be marked as resolved')
      );
    }

    report = await Report.findByIdAndUpdate(
      req.params.id,
      {
        status: 'RESOLVED',
        resolvedAt: new Date(),
      },
      { new: true, runValidators: true }
    ).populate('reportedBy', 'name email');

    res.status(200).json({
      success: true,
      message: 'Report marked as resolved',
      data: report,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get current user's reports
// @route   GET /api/reports/my-reports
// @access  Private (USER, ADMIN)
const getMyReports = async (req, res, next) => {
  try {
    const { status, type, page = 1, limit = 10 } = req.query;

    const filter = { reportedBy: req.user.id };
    if (status) filter.status = status.toUpperCase();
    if (type) filter.type = type.toUpperCase();

    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const skip = (pageNum - 1) * limitNum;

    const total = await Report.countDocuments(filter);
    const reports = await Report.find(filter)
      .sort({ createdAt: -1 })
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

module.exports = {
  createReport,
  getReports,
  getReport,
  updateReport,
  deleteReport,
  resolveReport,
  getMyReports,
};
