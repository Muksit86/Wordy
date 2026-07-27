import { doc, setDoc } from "firebase/firestore";
import { db } from "../Firebase/config";


export async function createUserProfile(user) {
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    username: user.displayName ?? "",
    email: user.email,

    xp: 0,
    streak: 0,

    nativeLanguage: null,
    currentLevel: null,

    createdAt: new Date().toISOString(),
  });
}
