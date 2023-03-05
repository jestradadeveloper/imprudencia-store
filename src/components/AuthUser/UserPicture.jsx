import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../store/auth";

const UserPicture = () => {
  const { displayName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      {displayName && (
        <div className="flex">
          <div className="p-4 text-pink-600 font-bold">{displayName}</div>
          <button
            className="text-pink-600 font-bold text-xl"
            onClick={onLogout}
          >
            <i class="ri-logout-circle-line"></i>
          </button>
        </div>
      )}
    </>
  );
};

export { UserPicture };
