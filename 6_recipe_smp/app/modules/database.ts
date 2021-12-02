import pgPromise from 'pg-promise';

//database(postgressへの接続情報)
const pgp = pgPromise({});
const config = {
  db: {
    // 設定項目: https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_USER,
    max: 10, // size of the connection pool
    query_timeout: 60000, // 60sec
  },
};

console.log(config, 'config')
//接続情報を渡す
export const sqlExecuter = pgp(config.db);
