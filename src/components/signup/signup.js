import { ErrorMessage } from "@hookform/error-message";
import Link from "next/link";
import React from "react";
import { useSignup } from "../../talons/useSignup";

export const Signup = () => {
  const { register, handleSubmit, onSignup, loginUsingGoogle, errors } =
    useSignup();

  return (
    <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-5 flex items-center rounded-2xl shadow-lg max-w-3xl">
        <div className="w-1/2 md:block hidden">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
            className="w-full"
            alt="Sample image"
          />
        </div>
        <div className="md:w-1/2 px-7">
          <h2 className="text-2xl font-bold text-[#002D74] text-center">
            SINGUP
          </h2>
          <form className="mt-6" onSubmit={handleSubmit(onSignup)}>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              <ErrorMessage
                name="name"
                errors={errors}
                render={({ message }) => (
                  <p className="text-sm pt-1 text-red-600">{message}</p>
                )}
              ></ErrorMessage>
            </div>
            <div className="mt-5">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              />
              <ErrorMessage
                name="email"
                errors={errors}
                render={({ message }) => (
                  <p className="text-sm pt-1 text-red-600">{message}</p>
                )}
              ></ErrorMessage>
            </div>
            <div className="mt-4">
              <label className="block text-gray-700">Password</label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
              />
              <ErrorMessage
                name="password"
                errors={errors}
                render={({ message }) => (
                  <p className="text-sm pt-1 text-red-600">{message}</p>
                )}
              ></ErrorMessage>
            </div>
            <button
              type="submit"
              className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
            >
              Log In
            </button>
          </form>

          <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center text-sm">OR</p>
            <hr className="border-gray-500" />
          </div>

          <button
            onClick={() => {
              loginUsingGoogle();
            }}
            className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="30px"
              height="30px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span className="ml-4">Login with Google</span>
          </button>
          <div className="text-sm flex justify-between items-center mt-3">
            <p>Already have an account...</p>
            <Link href="/login">
              <button className="py-2 px-5 ml-3 bg-white border rounded-xl hover:bg-blue-400 hover:text-white duration-300 border-blue-400  ">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
