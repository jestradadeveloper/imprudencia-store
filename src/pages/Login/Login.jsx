import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const { email, password, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticating = useMemo(() => status === "checking", [status]);
  const onSubmit = (evt) => {
    evt.preventDefault();
    dispatch(checkingAuthentication());
  };
  const onGoogleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(startGoogleSignIn());
    navigate("/thanks", { replace: true });
  };
  return (
    <div className="mx-auto w-full md:w-6/12 p-4 mt-12">
      <h2>Login</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />

        <button
          type="submit"
          onClick={onGoogleSubmit}
          disabled={isAuthenticating}
        >
          Sign In With Google
        </button>
        <div
          className={`bg-red-200 text-red-500 font-bold p-3 ${
            !!errorMessage ? "flex" : "hidden"
          }`}
        >
          {errorMessage}
        </div>
      </form>
    </div>
  );
};

export { LoginPage };
