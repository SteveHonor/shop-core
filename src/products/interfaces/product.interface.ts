import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string,
  readonly description: string,
  readonly initialDate: Date,
  readonly endDate: Date,
  readonly owner: Number,
  readonly background: string,
  readonly status: string,
  readonly private: Boolean,
  readonly awards: {
    competition: {
      fist: string,
      second: string,
      third: string
    },
    platform: {
      fist: Number,
      second: Number,
      third: Number
    }
  },
  readonly rules: {
    edit: Boolean,
    explicit: Boolean,
    filter: Boolean,
    text: Boolean
  },
  readonly created_at: Date
}