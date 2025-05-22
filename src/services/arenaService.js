const mongoose = require('mongoose');

const Arena = require('../models/arena');
const Assignment = require('../models/assignment');

const createArena = async (data) => {
  return await Arena.create(data);
};

const getVendorsByArena = async (arenaId, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;

  const pipeline = [
    { $match: { arenaId: new mongoose.Types.ObjectId(arenaId) } },

    // Lookup vendor
    {
      $lookup: {
        from: 'vendors',
        localField: 'vendorId',
        foreignField: '_id',
        as: 'vendor'
      }
    },
    { $unwind: '$vendor' },

    // Lookup arena to extract pickupSlot
    {
      $lookup: {
        from: 'arenas',
        localField: 'arenaId',
        foreignField: '_id',
        as: 'arena'
      }
    },
    { $unwind: '$arena' },

    // Match slot
    {
      $addFields: {
        pickupSlot: {
          $first: {
            $filter: {
              input: '$arena.pickupSlots',
              as: 'slot',
              cond: { $eq: ['$$slot._id', '$pickupSlotId'] }
            }
          }
        }
      }
    },

    // Group by vendor
    {
      $group: {
        _id: '$vendor._id',
        vendor: { $first: '$vendor' },
        pickupSlots: { $push: '$pickupSlot' }
      }
    },

    { $skip: skip },
    { $limit: limit }
  ];

  return await Assignment.aggregate(pipeline);
};

module.exports = {
  createArena,
  getVendorsByArena
};
