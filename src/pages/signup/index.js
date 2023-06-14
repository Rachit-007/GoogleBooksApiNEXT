import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { Loader } from "../../components/loader/loader";
import { Signup } from "../../components/signup/signup";

const signup = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status !== "loading" && status === "authenticated") {
    router.push("/");
  }

  if (status === "loading") {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    return (
      <>
        <Signup />
      </>
    );
  }
};

export default signup;

signup.getLayout = function PageLayout(page) {
  return page;
};
