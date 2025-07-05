import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export async function login(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential);
    return userCredential;
  } catch (error) {
    console.error("로그인 실패:", error);
    throw error;
  }
}

export async function signup({
  email,
  password,
  role,
}: {
  email: string;
  password: string;
  role: string;
}) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: role,
      createdAt: serverTimestamp(),
    });
    return userCredential;
  } catch (error) {
    console.error("로그인 실패:", error);
    throw error;
  }
}
