export function mongodbConfig() {
  const dbName = 'buddhismDict';
  let MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    MONGO_URI = 'mongodb://localhost:27017';
  }

  const config = {
    dbName,
    MONGO_URI,
  };

  return config;
}
