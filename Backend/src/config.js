import 'dotenv/config';

const config = {
  port: process.env.PORT || 3001,
  secretKey: process.env.JWT_SECRET || 'secret',
  mongoURI: process.env.MONGO_URI,
}

export default config;