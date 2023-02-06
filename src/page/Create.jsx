import React, { useState } from "react";
import firebase from "firebase/compat/app";

const Create = () => {
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [country, setCountry] = useState();
  const [company, setCompany] = useState();
  const createHandler = async () => {
    try {
      console.log("Test>>>", company);
      await firebase.firestore().collection("devroom").add({
        name: name,
        role: role,
        country: country,
        company: company,
      });
    } catch (error) {
      console.log("mainService createData Error: ", error);
    }
  };
  return (
    <section className="mt-10">
      <p className="text-white">DevRoom - 2</p>

      <div className="flex justify-center  align-center p-4">
        <span className="p-3">Name: </span>
        <input
          id="email-address"
          name="text"
          type="text"
          required
          className="w-full relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex justify-center  align-center p-4">
        <span className="p-3">Role: </span>
        <input
          id="email-address"
          name="text"
          type="text"
          required
          className="w-full relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Role"
          onChange={(e) => setRole(e.target.value)}
        />
      </div>
      <div className="flex justify-center  align-center p-4">
        <span className="p-3">Country: </span>
        <input
          id="email-address"
          name="text"
          type="text"
          required
          className="w-full relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder=" Country"
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="flex justify-center  align-center p-4">
        <span className="p-3">Company: </span>
        <input
          id="email-address"
          name="text"
          type="text"
          required
          className="w-full relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <button
        onClick={createHandler}
        className=" w-full my-6 group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Create
      </button>
    </section>
  );
};

export default Create;
