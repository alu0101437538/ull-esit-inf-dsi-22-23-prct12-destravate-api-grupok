import { Document, Schema, model } from 'mongoose';
import { Activity } from '../enums/activityEnum.js';
import { TrackDocumentInterface } from './track.js';
import { UserDocumentInterface } from './user.js';

export interface ChallengeInterface extends Document {
  ID: number;
  name: string;
  tracks: TrackDocumentInterface[];
  activity: Activity;
  length: number;
  users: UserDocumentInterface[];
}

const challengeSchema = new Schema<ChallengeInterface>({
  ID: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  length: {
    type: Number,
    required: true,
  },
  users: {
    type: [Schema.Types.ObjectId],
    required: false,
  },
  tracks: {
    type: [Schema.Types.ObjectId],
    required: false,
  },
  activity: {
    type : String, 
    enum : Object.values(Activity),
    required: true,
  },

});

export const Challenge = model<ChallengeInterface>('Challenge', challengeSchema);