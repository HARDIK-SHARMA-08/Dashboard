import mongoose from 'mongoose';


const tokenSchema = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
  },
  expToken: {
    type: Date,
    default: null,
  }
});

const Token = mongoose.models.tokens || mongoose.model('tokens', tokenSchema);

export default Token;
