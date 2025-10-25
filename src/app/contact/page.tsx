export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="max-w-xl w-full px-6 py-16">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
        <p className="mb-6">
          Whether you’re interested in working together, have a question, or
          just want to say hi — I’d love to hear from you.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8 text-gray-400">
          Or reach me directly at:{" "}
          <a href="mailto:blaizedami@gmail.com" className="text-teal-400 hover:underline">
            blaizedami@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
