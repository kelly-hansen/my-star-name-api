module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  db: {
    myStarName: {
      client: 'pg',
      connection: {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
      },
    }
  },
  port: process.env.PORT,
  emailFrom: process.env.EMAIL_FROM,
  aws: {
    key: process.env.AWS_ACCESS_KEY,
    secret: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  }
}