export default {
    development: {
        client: process.env.DEV_DATABASE_USER,
        connection: process.env.DEV_DATABASE_URL,
      },
      production: {
        client: process.env.PROD_DATABASE_USER,
        connection: process.env.PROD_DATABASE_URL,
      },
      migrations: {
        extension: 'ts',
      },
  };
  