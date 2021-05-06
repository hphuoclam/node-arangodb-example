// TS: import { Database, aql } from "arangojs";
const { Database, aql } = require("arangojs");

const db_name = process.env.DATABASE_NAME || 'test_db';

const db = new Database({
  url: process.env.PORT || "http://localhost:8529",
  databaseName: db_name,
});

// create users collection
users = db.collection('users');
users.create().then(
  () => console.log('Collection created'),
  err => console.error('Failed to create collection:', err)
);
 
console.log('==db', db)

module.exports = db;