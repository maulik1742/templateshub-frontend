import { post } from "@/redux/actions/action";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const LoginRegister = () => {
  const [state, setState] = useState({});
  const dispatch = useDispatch();

  const router = useRouter();

  const onLoginFinish = async (e) => {
    e.preventDefault();
    const res = await post("/user/login", state, "USER_REGISTER", dispatch);
    console.log("res :>> ", res);
    if (res?.success) {
      toast.success(res?.message);
      localStorage?.setItem("authToken", res?.token);
      router?.push("/");
    } else {
      toast.error(res?.message);
    }
  };

  console.log("state :>> ", state);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-400 py-10 flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg px-20 py-6 mb-10">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Log in to your account
        </h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            onSubmit={onLoginFinish}
            action="#"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={handleChange}
                  autoComplete="email"
                  className="block w-full px-2  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-indigo-500 sm:text-sm/6"
                />
              </div>
              <div className="text-sm pt-2">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500 pl-40"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?{" "}
            <a
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Start a 14 day free trial
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
