const mongoose = require("mongoose");
const geocoder = require("../config/geocoder");

const Schema = mongoose.Schema;

const EventSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  partisipantName: {
    type: String,
    required: true,
  },
  standType: {
    type: String,
    required: false,
  },
  logoUrl: {
    type: String,
  },
  youTubeCode: {
    type: String,
  },
  shopId: {
    type: String,
  },
  galeryUrl: {
    type: Array,
  },
  standNum:{
    type: Number,
  },
  left: {
    type:String
  }, 
  top: {
    type:String
  },
  height: {
    type:String
  },
  numberofplayer: {
    type: Number,
    required: false,
  },

  listofplayer: [
    {
      id: {
        type: String,
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
    },
  ],
  location: {
    type: String,
  },
  address: {
    type: {
      type: String,
      enum: ["Point"],
    },
    coordinates: {
      type: [Number],
      index: "2dsphere",
    },
  },
  description: {
    type: String,
  },
  imageURL: {
    type: String,
  },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      text: {
        type: String,
        required: false,
      },
      name: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
  start: {
    type: Date,
  },
});

EventSchema.pre("save", async function (next) {
  if (this.location) {
    const data = await geocoder.geocode(this.location);
    this.address = {
      type: "Point",
      coordinates: [data[0].longitude, data[0].latitude],
    };
  }

  next();
});

module.exports = Event = mongoose.model("event", EventSchema);
