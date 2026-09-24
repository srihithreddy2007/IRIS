const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../src/models/User');
const Report = require('../src/models/Report');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await User.deleteMany({});
    await Report.deleteMany({});
    console.log('Cleared existing data');

    // Create users
    const users = await User.create([
      {
        name: 'Admin User',
        email: 'admin@campus.edu',
        password: 'admin123',
        role: 'ADMIN',
      },
      {
        name: 'John Doe',
        email: 'john@campus.edu',
        password: 'user123',
        role: 'USER',
      },
      {
        name: 'Jane Smith',
        email: 'jane@campus.edu',
        password: 'user123',
        role: 'USER',
      },
      {
        name: 'Bob Wilson',
        email: 'bob@campus.edu',
        password: 'user123',
        role: 'USER',
      },
    ]);

    console.log(`Created ${users.length} users`);

    const [admin, john, jane, bob] = users;

    // Create reports
    const reports = await Report.create([
      {
        title: 'Blue Backpack',
        description:
          'Lost a blue Jansport backpack with laptop and notebooks inside. Has a small tear on the front pocket.',
        type: 'LOST',
        category: 'Bags',
        location: 'Library - 2nd Floor',
        date: new Date('2024-10-15'),
        status: 'ACTIVE',
        reportedBy: john._id,
      },
      {
        title: 'iPhone 15 Pro',
        description:
          'Found an iPhone 15 Pro in a clear case near the cafeteria entrance. Screen is locked.',
        type: 'FOUND',
        category: 'Electronics',
        location: 'Main Cafeteria',
        date: new Date('2024-10-16'),
        status: 'ACTIVE',
        reportedBy: jane._id,
      },
      {
        title: 'Student ID Card',
        description:
          'Lost my student ID card somewhere between the parking lot and the engineering building.',
        type: 'LOST',
        category: 'Documents',
        location: 'Engineering Building - Parking Lot',
        date: new Date('2024-10-14'),
        status: 'ACTIVE',
        reportedBy: bob._id,
      },
      {
        title: 'Car Keys with Toyota Keychain',
        description:
          'Found a set of car keys with a Toyota keychain and two other small keys on the bench.',
        type: 'FOUND',
        category: 'Keys',
        location: 'Central Park Bench - Near Fountain',
        date: new Date('2024-10-13'),
        status: 'ACTIVE',
        reportedBy: john._id,
      },
      {
        title: 'Silver Watch',
        description:
          'Lost a silver Casio digital watch during the morning jog on the campus track.',
        type: 'LOST',
        category: 'Accessories',
        location: 'Campus Running Track',
        date: new Date('2024-10-12'),
        status: 'RESOLVED',
        resolvedAt: new Date('2024-10-17'),
        reportedBy: jane._id,
      },
      {
        title: 'Calculus Textbook',
        description:
          'Found a calculus textbook (Stewart, 9th Edition) left on a desk in Room 301.',
        type: 'FOUND',
        category: 'Books',
        location: 'Science Building - Room 301',
        date: new Date('2024-10-16'),
        status: 'ACTIVE',
        reportedBy: bob._id,
      },
      {
        title: 'Black Umbrella',
        description:
          'Lost a black folding umbrella with wooden handle in the auditorium during the morning lecture.',
        type: 'LOST',
        category: 'Other',
        location: 'Main Auditorium',
        date: new Date('2024-10-15'),
        status: 'ACTIVE',
        reportedBy: john._id,
      },
      {
        title: 'Wireless Earbuds Case',
        description:
          'Found a white AirPods Pro case (no earbuds inside) near the vending machines on the ground floor.',
        type: 'FOUND',
        category: 'Electronics',
        location: 'Student Union - Ground Floor',
        date: new Date('2024-10-17'),
        status: 'ACTIVE',
        reportedBy: jane._id,
      },
      {
        title: 'Winter Jacket',
        description:
          'Lost a red North Face winter jacket in the gym locker room. Size M.',
        type: 'LOST',
        category: 'Clothing',
        location: 'Gymnasium - Locker Room',
        date: new Date('2024-10-10'),
        status: 'REMOVED',
        adminNotes: 'Duplicate report - removed by admin',
        reportedBy: bob._id,
      },
      {
        title: 'USB Flash Drive',
        description:
          'Found a 64GB SanDisk USB flash drive plugged into a computer in the computer lab.',
        type: 'FOUND',
        category: 'Electronics',
        location: 'Computer Lab - Building A',
        date: new Date('2024-10-17'),
        status: 'ACTIVE',
        reportedBy: john._id,
      },
    ]);

    console.log(`Created ${reports.length} reports`);

    console.log('\n========================================');
    console.log('  SEED DATA CREATED SUCCESSFULLY');
    console.log('========================================');
    console.log('\nTest Credentials:');
    console.log('----------------------------------------');
    console.log('ADMIN:  admin@campus.edu / admin123');
    console.log('USER 1: john@campus.edu  / user123');
    console.log('USER 2: jane@campus.edu  / user123');
    console.log('USER 3: bob@campus.edu   / user123');
    console.log('----------------------------------------\n');

    await mongoose.connection.close();
    console.log('Database connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedData();
