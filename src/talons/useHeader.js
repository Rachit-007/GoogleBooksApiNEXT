import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

const useHeader = () => {
  const router = useRouter();

  const logout = async () => {
    await signOut({ redirect: false });
    router.push("/login");
  };

  return { logout, router };
};

export default useHeader;
