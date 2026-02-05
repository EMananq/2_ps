import admin from 'firebase-admin';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize Firebase Admin SDK
let db = null;

const initializeFirebase = () => {
  if (db) return db;

  try {
    // Look for service account file
    const serviceAccountPath = join(__dirname, '../../serviceAccountKey.json');
    
    if (existsSync(serviceAccountPath)) {
      const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
      
      if (!admin.apps.length) {
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount)
        });
      }
      
      db = admin.firestore();
      console.log('✅ Firebase initialized with service account');
    } else {
      console.log('⚠️ No serviceAccountKey.json found. Using mock data mode.');
      db = null;
    }
  } catch (error) {
    console.error('Firebase initialization error:', error.message);
    db = null;
  }

  return db;
};

export const getFirestore = () => {
  if (!db) {
    initializeFirebase();
  }
  return db;
};

export default initializeFirebase;
