import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
// import {getAuth, User} from 'firebase/auth';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import {doc, getDoc, getFirestore, setDoc} from 'firebase/firestore';
import {firebaseConfig} from './firebase-config';
import {
    getStorage,
    ref,
    listAll,
    uploadBytes,
    getDownloadURL,
} from 'firebase/storage';
// import {UserProfile} from '../data/userProfileTypes';
// import {initialUserProfile} from '../data/initialUserProfile';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const app = initializeApp(firebaseConfig);

export const analitycs = getAnalytics(app);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const storage = getStorage(app);

export const uploadImageInStorage = async (
    path: string,
    image: Blob | Uint8Array | ArrayBuffer
) => {
    try {
        const imageRef = ref(storage, path);
        const imageUrl = await uploadBytes(imageRef, image).then(() =>
            getDownloadURL(imageRef)
        );
        return imageUrl;
    } catch (error) {
        return 'error';
    }
};

export const getFirebaseStorageImageUrl = async (storageBucketPath: string) => {
    try {
        const pathReference = ref(storage, storageBucketPath);
        const url = await getDownloadURL(pathReference);
        const newUrl = new URL(url, import.meta.url).href;
        return newUrl;
    } catch (error) {
        return 'https://firebasestorage.googleapis.com/v0/b/red-digit-ai.appspot.com/o/blogs%2FblogPost-empty%2Fred-digit-ai-default.webp?alt=media&token=290a56ea-1f0a-4eaa-8b80-bada0add9fa1'; // Return null if there's an error
    }
};

export const getFirebaseStoragePdfFullPath = async (
    storageBucketPath: string
) => {
    try {
        console.log('In');
        const pathReference = ref(storage, storageBucketPath);
        const url = await getDownloadURL(pathReference);
        const newUrl = new URL(url, import.meta.url).href;
        return newUrl;
    } catch (error) {
        return error;
    }
};

export const getFilesUrlListFromStorageBucker = async (
    storageBucketPath: string
) => {
    try {
        const folderReference = ref(storage, storageBucketPath);
        const {items} = await listAll(folderReference);
        return await Promise.all(
            items
                .map(
                    async (item) =>
                        await getFirebaseStoragePdfFullPath(item.fullPath)
                )
                .sort()
        );
    } catch (error) {
        console.error('Error counting files in folder:', error);
        return 0;
    }
};

// export const getUserProfileInfo = async (uid: string) => {
//     const userDocRef = doc(db, 'users', uid);
//     try {
//         const userSnapshot = (await getDoc(userDocRef)).data() as
//             | UserProfile
//             | undefined;
//         return userSnapshot;
//     } catch (error) {
//         throw new Error(error);
//     }
// };

// export const updateUserProfileFirebase = async (
//     updatedProfile: UserProfile
// ) => {
//     const userDocRef = doc(db, 'users', updatedProfile.uid);
//     try {
//         await setDoc(userDocRef, updatedProfile);
//     } catch (error) {
//         throw new Error(error);
//     }
// };

// export const createUserDocumentFromAuth = async (loggedUser: User) => {
//     const userDocRef = doc(db, 'users', loggedUser.uid);
//     const userSnapshot = await getDoc(userDocRef);

//     if (!userSnapshot.exists()) {
//         const {displayName, email} = loggedUser;
//         const createdAt = new Date();
//         const planValidTill = new Date(
//             createdAt.getTime() + 30 * 24 * 60 * 60 * 1000
//         );
//         const pricePlan = 'free';
//         const aiCredits = 10;

//         const names = displayName.split(' ');
//         const [firstName, lastName] = names;

//         const initProfile: UserProfile = {
//             ...initialUserProfile,
//             uid: loggedUser.uid,
//             admin: {
//                 createdAt,
//                 email,
//                 pricePlan,
//                 planValidTill,
//                 aiCredits,
//             },
//             general: {
//                 firstName,
//                 lastName,
//                 profileImage: {url: null, visible: true},
//             },
//         };

//         try {
//             await setDoc(userDocRef, initProfile);
//             return initProfile;
//         } catch (error) {
//             throw new Error(error);
//         }
//     } else {
//         const profile = userSnapshot.data() as UserProfile | undefined;
//         return profile;
//     }
// };

export default app;
