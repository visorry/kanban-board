import { Schema, model, Document } from 'mongoose';

interface User extends Document {
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default model<User>('User', userSchema);
