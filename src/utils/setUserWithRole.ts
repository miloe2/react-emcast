import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useStore } from "../stores/index";

export async function setUserWithRole(user: {
  uid: string;
  email?: string | null;
}) {
  const userDoc = await getDoc(doc(db, "users", user.uid));

  if (!userDoc.exists()) {
    throw new Error("No user profile found in Firestore.");
  }

  const userData = userDoc.data();
  const role = userData?.role || "guest";

  useStore.getState().setUser({
    uid: user.uid,
    email: user.email ?? "",
    role,
  });

  console.log(useStore.getState());
}
