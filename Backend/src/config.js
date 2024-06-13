import 'dotenv/config';

const config = {
  port: process.env.PORT || 3001,
  secretKey: process.env.JWT_SECRET || 'secret',
  mongoURI: 'mongodb://localhost:27017/',
}

export default config;