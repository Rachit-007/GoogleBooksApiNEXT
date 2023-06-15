import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { loginSchema } from "../services/validations";

export const useLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const router = useRouter();

  const onLogin = async ({ email, password }) => {
    try {
      let result = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (result.ok) {
        toast.success("Login Successfully !!!");
      } else {
        toast.error("Wrong Credentials!!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const loginUsingGoogle = () => {
    try {
      signIn("google", {
        callbackUrl: "http://localhost:3000",
        redirect: false,
      });
      router.push("/");
    } catch (err) {
      toast.error("Unable To Login!!!");
    }
  };

  return { register, handleSubmit, onLogin, loginUsingGoogle, errors };
};
