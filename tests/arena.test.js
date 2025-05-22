const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Arena = require('../src/models/arena');
const Assignment = require('../src/models/assignment');
const Vendor = require('../src/models/vendor');

const testAdminToken = jwt.sign({ id: 'admin123', role: 'admin' }, process.env.JWT_SECRET || 'supersecrettoken');

describe('Arena API Tests', () => {
  beforeAll(async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/arena-api-test';
    await mongoose.connect(mongoUri);
  });

  afterAll(async () => {
    await Assignment.deleteMany({});
    await Vendor.deleteMany({});
    await Arena.deleteMany({});
    await mongoose.disconnect();
  });

  it('should return paginated vendors assigned to an arena', async () => {
    const arena = await Arena.create({
      name: 'Test Arena',
      date: new Date(),
      pickupSlots: [{ name: 'Gate A', capacity: 10 }]
    });

    const vendor = await Vendor.create({ name: 'Vendor X', email: 'vendorx@test.com' });
    const gateASlot = arena.pickupSlots.find(slot => slot.name === 'Gate A');
    await Assignment.create({ arenaId: arena._id, vendorId: vendor._id, pickupSlotId: gateASlot._id });

    const res = await request(app)
      .get(`/api/arena/${arena._id}/vendors?page=1&limit=1`)
      .set('Authorization', `Bearer ${testAdminToken}`);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeLessThanOrEqual(1);
  });
});
