module.exports = {
  type: 'postgres',
  host: process.env.RDS_HOST,
  port: process.env.RDS_PORT,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  database: process.env.RDS_SCHEMA,
  entities: ['dist/**/*.entity.{js,ts}'],
  synchronize: true,
};
