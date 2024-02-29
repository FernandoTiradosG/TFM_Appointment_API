import { User } from '../models/index.js';

export async function getUser(username) {
  const user = await User.find({ username });

  return user;
}