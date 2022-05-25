module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'somatic-coaching.ccfdcfzxhidq.ap-southeast-2.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'somatic-coaching'),
      user: env('DATABASE_USERNAME', 'admin'),
      password: env('DATABASE_PASSWORD', 'rCQilnxNbdra6ZEPSogX'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
