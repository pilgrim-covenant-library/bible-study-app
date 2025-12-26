// Firebase Admin SDK configuration

import { initializeApp, cert, getApps, App } from 'firebase-admin/app';
import { getDatabase, Database } from 'firebase-admin/database';
import { readFileSync, existsSync } from 'fs';

let app: App;
let database: Database;

export function initializeFirebase(): void {
  if (getApps().length > 0) {
    app = getApps()[0];
    database = getDatabase(app);
    return;
  }

  const databaseURL = process.env.FIREBASE_DATABASE_URL;
  if (!databaseURL) {
    throw new Error('FIREBASE_DATABASE_URL environment variable is required');
  }

  // Option 1: Service account JSON file path
  const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_PATH;
  if (serviceAccountPath && existsSync(serviceAccountPath)) {
    const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
    app = initializeApp({
      credential: cert(serviceAccount),
      databaseURL,
    });
    database = getDatabase(app);
    console.log('Firebase initialized with service account file');
    return;
  }

  // Option 2: Direct credentials from environment variables
  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (projectId && clientEmail && privateKey) {
    app = initializeApp({
      credential: cert({
        projectId,
        clientEmail,
        privateKey,
      }),
      databaseURL,
    });
    database = getDatabase(app);
    console.log('Firebase initialized with environment credentials');
    return;
  }

  throw new Error(
    'Firebase credentials not found. Provide either:\n' +
    '1. FIREBASE_SERVICE_ACCOUNT_PATH pointing to a service account JSON file, or\n' +
    '2. FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY environment variables'
  );
}

export function getDb(): Database {
  if (!database) {
    throw new Error('Firebase not initialized. Call initializeFirebase() first.');
  }
  return database;
}

export { database };
