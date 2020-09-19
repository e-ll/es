const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StandSchema = new Schema({
  type: {
    type: Number,
  },
  name: {
    type: String,
  },
  left: { type: String },
  top: { type: String },
  height: { type: String },
  userId: { type: Schema.Types.ObjectId, ref: "users" },
  eventId: { type: Schema.Types.ObjectId, ref: "events" },
  eventName: { type: String },
  logoUrl: { type: String },
});

module.exports = Stand = mongoose.model("stands", StandSchema);
