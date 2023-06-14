import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { singupSchema } from "../services/validations";

export const useSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(singupSchema),
  });
  const router = useRouter();

  const onSignup = async (userData) => {
    try {
      const { data } = await axios.post("/api/user/signup", userData);
      toast.success("User Created Successfully!!!");
      router.push("/login");
    } catch (err) {
      toast.error("User Already Registered");
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
      toast.success("Login Successfully !!!");
    } catch (err) {
      console.log(err);
      toast.error("Unable To Singup!!!");
    }
  };

  return { register, handleSubmit, onSignup, loginUsingGoogle, errors };
};
