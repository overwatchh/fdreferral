import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  address: string;
}

export const addContact = async (contact: ContactForm) => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), contact);
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error;
  }
};
