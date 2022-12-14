import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as any)
        });
    } catch (error) {
        console.log('Firebase admin initialization error', (error as any).stack);
    }
}
export const firestore = admin.firestore();