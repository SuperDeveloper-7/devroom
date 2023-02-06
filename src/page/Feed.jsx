import React, { useState } from "react";
import firebase from "firebase/compat/app";
import Button from "../components/elements/Button";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const Feed = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const querySnapshot = await firebase
        .firestore()
        .collection("devroom")
        .get();
      let list = [];
      querySnapshot.forEach((documentSnapshot) => {
        list.push(documentSnapshot.data());
        setData(list);
      });
    } catch (error) {
      console.log("onGetHandler Error: ", error);
    }
  };
  getData();

  return (
    <div className="h-full pb-10">
      <div className="text-white pt-10 pb-20">Feed - Show Data</div>
      <div className="mt-10 h-full">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-3">
            <div className="mr-6">
              <span className="text-[#079FB4] text-sm">Name:</span> {item.name}
            </div>
            <div className="mr-6">
              <span className="text-[#079FB4] text-sm">Role:</span> {item.role}
            </div>
            <div className="mr-6">
              <span className="text-[#079FB4] text-sm">Country:</span>:{" "}
              {item.country}
            </div>
            <div className="mr-6">
              <span className="text-[#079FB4] text-sm">Company:</span>{" "}
              {item.company}
            </div>
            <Button
              onClick={() => {
                setTimeout(() => {
                  navigate(`/feed/:${index}`, { state: data[index] });
                }, 1000);
              }}
            >
              Open{" "}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
