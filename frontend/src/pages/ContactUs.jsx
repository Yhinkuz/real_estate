function ContactUs() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions? Get in touch with us today!
      </p>
      <form className="space-y-4 max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <textarea
          placeholder="Your Message"
          className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 h-32"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUs;
