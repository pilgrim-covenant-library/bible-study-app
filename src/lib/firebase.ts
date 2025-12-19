import { initializeApp, getApps, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  updateProfile,
  type User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
  serverTimestamp,
  type Firestore,
  type Unsubscribe,
} from 'firebase/firestore';
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  remove,
  onValue,
  onDisconnect,
  serverTimestamp as rtdbServerTimestamp,
  type Database,
} from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL || '',
};

// Check if Firebase is properly configured
const isFirebaseConfigured = Boolean(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.authDomain
);

// Initialize Firebase
let app: FirebaseApp | null = null;
let db: Firestore | null = null;
let rtdb: Database | null = null;

if (typeof window !== 'undefined' && isFirebaseConfigured) {
  try {
    if (!getApps().length) {
      app = initializeApp(firebaseConfig);
    } else {
      app = getApps()[0];
    }
    db = getFirestore(app);
    if (firebaseConfig.databaseURL) {
      rtdb = getDatabase(app);
    }
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
    app = null;
    db = null;
    rtdb = null;
  }
}

export const auth = typeof window !== 'undefined' && app ? getAuth(app) : null;
export const firestore = db;
export const realtimeDb = rtdb;

// Check if Firebase is available
export function isFirebaseAvailable(): boolean {
  return isFirebaseConfigured && auth !== null;
}

// Check if Realtime Database is available (for multiplayer)
export function isRealtimeDbAvailable(): boolean {
  return isFirebaseConfigured && rtdb !== null;
}

// User interface
export interface AppUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  preferredTranslation: 'ESV' | 'NIV' | 'KJV';
  createdAt: Date;
}

// Google Provider
const googleProvider = auth ? new GoogleAuthProvider() : null;

// Auth functions
export async function signUpWithEmail(
  email: string,
  password: string,
  displayName: string
): Promise<AppUser> {
  if (!auth || !firestore) throw new Error('Firebase not initialized');

  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  await updateProfile(user, { displayName });

  const userData: AppUser = {
    uid: user.uid,
    email: user.email,
    displayName,
    photoURL: user.photoURL,
    preferredTranslation: 'ESV',
    createdAt: new Date(),
  };

  await setDoc(doc(firestore, 'users', user.uid), {
    ...userData,
    createdAt: serverTimestamp(),
  });

  return userData;
}

export async function signInWithEmail(
  email: string,
  password: string
): Promise<AppUser | null> {
  if (!auth || !firestore) throw new Error('Firebase not initialized');

  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  return getUserData(userCredential.user.uid);
}

export async function signInWithGoogle(): Promise<AppUser | null> {
  if (!auth || !firestore || !googleProvider) throw new Error('Firebase not initialized');

  const userCredential = await signInWithPopup(auth, googleProvider);
  const user = userCredential.user;

  let userData = await getUserData(user.uid);

  if (!userData) {
    userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      preferredTranslation: 'ESV',
      createdAt: new Date(),
    };

    await setDoc(doc(firestore, 'users', user.uid), {
      ...userData,
      createdAt: serverTimestamp(),
    });
  }

  return userData;
}

export async function signOut(): Promise<void> {
  if (!auth) throw new Error('Firebase not initialized');
  await firebaseSignOut(auth);
}

export async function getUserData(uid: string): Promise<AppUser | null> {
  if (!firestore) throw new Error('Firebase not initialized');

  const docRef = doc(firestore, 'users', uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      uid: data.uid,
      email: data.email,
      displayName: data.displayName,
      photoURL: data.photoURL,
      preferredTranslation: data.preferredTranslation || 'ESV',
      createdAt: data.createdAt?.toDate() || new Date(),
    };
  }

  return null;
}

export async function updateUserPreferences(
  uid: string,
  preferences: Partial<Pick<AppUser, 'preferredTranslation' | 'displayName'>>
): Promise<void> {
  if (!firestore) throw new Error('Firebase not initialized');
  await updateDoc(doc(firestore, 'users', uid), preferences);
}

// Auth state observer
export function onAuthChange(callback: (user: User | null) => void): () => void {
  if (!auth) return () => {};
  return onAuthStateChanged(auth, callback);
}

// Realtime Database helpers for multiplayer
export const rtdbHelpers = {
  ref: (path: string) => rtdb ? ref(rtdb, path) : null,
  set: async (path: string, data: unknown) => {
    if (!rtdb) throw new Error('Realtime Database not initialized');
    return set(ref(rtdb, path), data);
  },
  get: async (path: string) => {
    if (!rtdb) throw new Error('Realtime Database not initialized');
    return get(ref(rtdb, path));
  },
  update: async (path: string, data: Record<string, unknown>) => {
    if (!rtdb) throw new Error('Realtime Database not initialized');
    return update(ref(rtdb, path), data);
  },
  remove: async (path: string) => {
    if (!rtdb) throw new Error('Realtime Database not initialized');
    return remove(ref(rtdb, path));
  },
  onValue: (path: string, callback: (snapshot: unknown) => void): (() => void) => {
    if (!rtdb) return () => {};
    const dbRef = ref(rtdb, path);
    return onValue(dbRef, callback);
  },
  onDisconnect: (path: string) => {
    if (!rtdb) return null;
    return onDisconnect(ref(rtdb, path));
  },
  serverTimestamp: rtdbServerTimestamp,
};

// Firestore helpers
export const firestoreHelpers = {
  doc,
  collection,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  serverTimestamp,
};

export type { User, Unsubscribe };
