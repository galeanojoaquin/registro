// import dotenv from 'dotenv';
// dotenv.config();

const config = {
  app: {
    auth: {
      uri: import.meta.env.VITE_AUTH_URI,
      user: import.meta.env.VITE_AUTH_USER,
      pass: import.meta.env.VITE_AUTH_PASS
    },
    api: {
      uri: 'http://10.10.32.12:4002/zoonosis/api/v2',
      user: 1,
      pass: '8UNN3Rar'
    } 
  }
}

export default config;