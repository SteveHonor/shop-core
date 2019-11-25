import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  _id: {
    type : String,
    index : {
      unique : true
    }
  },
  sku: { 
    type: String, 
    required: true, 
    unique: true 
  },
  title: String,
  categories: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
  images: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Images',
  }],
  description: String,
  price:  {
    type: Number,
    default: 0,
  },
  stock: {
    type: Number,
    default: 0,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});