import { createConnection } from 'typeorm';

export const databaseProvider = {
  provide: 'DATABASE_CONNECTION',
  useFactory: async () =>
    await createConnection({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'uduvuresy7556',
      database: 'testdb',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
};
