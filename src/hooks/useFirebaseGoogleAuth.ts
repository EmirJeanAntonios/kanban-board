import { useState } from "react";
import { signInWithGooglePopup } from "../utils/firebaseGoogleAuth";

interface User {
  displayName: string | null;
  email: string | null;
  photoUrl:string | null,
  uid:string
}

const useFirebaseGoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleSignInWithGooglePopup = async () => {
    const response = await signInWithGooglePopup();

    if (response) {
      setUser({
        displayName:response.user.displayName,
        email:response.user.email,
        photoUrl:response.user.photoURL,
        uid:response.user.uid
      });
    }
  };
  return {
    handleSignInWithGooglePopup,
    user,
  };
};

export default useFirebaseGoogleAuth;
