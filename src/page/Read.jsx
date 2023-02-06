import React from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
const Read = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  console.log("<<<", state);
  const gotoFeedHandler = () => {
    navigate("/feed");
  };
  return (
    <section className="mt-10">
      <p className="text-white mb-6">Read - Person Info</p>

      <div className="mr-6">
        <span className="text-[#079FB4] text-sm">Name:</span> {state.name}
      </div>
      <div className="mr-6">
        <span className="text-[#079FB4] text-sm">Role:</span> {state.role}
      </div>
      <div className="mr-6">
        <span className="text-[#079FB4] text-sm">Country:</span>:{" "}
        {state.country}
      </div>
      <div className="mr-6 mb-6">
        <span className="text-[#079FB4] text-sm">Company:</span> {state.company}
      </div>
      <div className="flex justify-center">
        <Button onClick={gotoFeedHandler}>Go to Feed</Button>
      </div>
    </section>
  );
};

export default Read;
