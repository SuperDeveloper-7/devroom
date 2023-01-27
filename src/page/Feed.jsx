// import { async } from "@firebase/util";
import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { mainService } from "../service";
const Notes = () => {
  const [data, setData] = useState([]);

  const onGetHandler = async () => {
    try {
      const querySnapshot = await firebase.firestore().collection("test").get();
      let list = [];
      querySnapshot.forEach((documentSnapshot) => {
        list.push(documentSnapshot.data());
        setData(list);
      });
    } catch (error) {
      console.log("onGetHandler Error: ", error);
    }
  };
  const onCreateHandler = () => {
    mainService.createData();
    onGetHandler();
  };

  return (
    <div className="h-full pb-10">
      <div className="text-white pt-10 pb-20">DevRoom - Create/Add Data</div>
      <div className="flex justify-center ">
        <button
          className="px-20 py-3 bg-[#079FB4] rounded mr-24"
          onClick={onCreateHandler}
        >
          Create
        </button>
        <button
          className="px-20 py-3 bg-[#079FB4] rounded"
          onClick={onGetHandler}
        >
          Get
        </button>
      </div>
      <div className="mt-10 h-full">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-3">
            <div className="mr-6">
              <span className="text-[#079FB4] text-sm">Name:</span> {item.name}
            </div>
            <div>
              <span className="text-[#079FB4] text-sm">Country:</span>:{" "}
              {item.country}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
