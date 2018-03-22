const mongoose = require('mongoose');
const { Schema } = require('mongoose');

mongoose.Promise = global.Promise;

const ApiKeySchema = new Schema({
  key: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
  usage: { type: Number, default: 0 },
  // isAvailable
  // keep track of pastUsage
});

ApiKeySchema.methods.serialize = function () {
  return {
    _id: this._id,
    key: this.key,
    user: this.user,
    usage: this.usage,
  };
};

const ApiKeyModel = mongoose.model('ApiKeys', ApiKeySchema);

module.exports = ApiKeyModel;
