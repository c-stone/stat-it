/* eslint-disable */
import { auth, currentUser } from "@clerk/nextjs";

export const getCurrentUser = async () => {
    const { userId } = auth();
    if (userId) {
      return await currentUser();
    } else {
      return null;
    }
  };