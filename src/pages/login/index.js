import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Loader } from "../../components/loader/loader";
import { Login } from "../../components/login/login";

const login = () => {
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
        <Login />
      </>
    );
  }
};

export default login;

login.getLayout = function PageLayout(page) {
  return page;
};
