export const ContactForm = () => {
  return (
    <form className="mt-8 flex flex-col items-center space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        className="border border-gray-300 px-4 py-2 w-80"
      />
      <input
        type="text"
        placeholder="Phone"
        name="phone"
        className="border border-gray-300 px-4 py-2 w-80"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="border border-gray-300 px-4 py-2 w-80"
      />
      <textarea
        name="address"
        placeholder="Location"
        className="border border-gray-300 px-4 py-2 w-80"
      ></textarea>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 w-80">
        Submit
      </button>
    </form>
  );
};
