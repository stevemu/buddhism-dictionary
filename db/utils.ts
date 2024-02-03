import { MongoClient, Db } from 'mongodb';
import { mongodbConfig } from '@/db/config';

let db: Db = null;

const connectToDb = (): Promise<Db> => {
  return new Promise((resolve, reject) => {
    const { MONGO_URI, dbName } = mongodbConfig();
    const client: MongoClient = new MongoClient(MONGO_URI);

    client.connect((err) => {
      if (err) {
        reject('error connecting to db');
      }
      db = client.db(dbName);
      resolve(db);
      console.log('successfully connected to db');
    });
  });
};

export const getDb = async () => {
  if (!db) {
    db = await connectToDb();
  }
  return db;
};
