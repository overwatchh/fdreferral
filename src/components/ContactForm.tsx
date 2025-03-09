import { useState } from "react";
import { addContact } from "../services/contactService";
import classNames from "classnames";

export const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      setIsSubmitting(true);
      await addContact(form);
      setIsSubmitted(true);
      setIsSubmitting(false);
    } catch (err) {
      setError("Failed to save contact. Please try again.");
      setIsSubmitting(false);
      console.error(err);
    }
  };

  return (
    <form
      className="mt-8 flex flex-col items-center space-y-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        className="border border-gray-300 px-4 py-2 w-80"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        className="border border-gray-300 px-4 py-2 w-80"
        required
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-300 px-4 py-2 w-80"
        required
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        className="border border-gray-300 px-4 py-2 w-80"
        required
        onChange={handleChange}
      />
      {isSubmitted && (
        <p className="mt-4 text-green-600 text-center font-medium">
          ✔️ Successfully saved!
        </p>
      )}
      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
      <button
        className={classNames(
          "bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-80",
          { hidden: isSubmitted }
        )}
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
