import firebase from "firebase/compat/app";

const createData = async () => {
  try {
    await firebase.firestore().collection("test").doc().set({
      name: "Test",
      country: "United State",
    });
  } catch (error) {
    console.log("mainService createData Error: ", error);
  }
};

export const mainService = { createData };
