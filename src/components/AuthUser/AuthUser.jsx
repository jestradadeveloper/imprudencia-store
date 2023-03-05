import React from "react";
import { useSelector } from "react-redux";
import Menu from "./Menu";

const AuthUser = () => {
  const { status } = useSelector((state) => state.auth);

  return <>{status === "authenticated" && <Menu />}</>;
};

export { AuthUser };
