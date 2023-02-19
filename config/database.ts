export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '195.78.66.233'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'rubinow3_portfolioStrapi'),
      user: env('DATABASE_USERNAME', 'rubinow3_strapi'),
      password: env('DATABASE_PASSWORD', 'C-I4SEn]-GiLQes9'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
