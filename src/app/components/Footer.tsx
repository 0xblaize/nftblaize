export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-20">
      <p>
        © {new Date().getFullYear()} NFTBlaize. Built with ❤️ using Next.js &
        Tailwind.
      </p>
      <div className="mt-2 space-x-4">
        <a href="https://x.com/0xblaize" target="_blank" className="hover:text-teal-400">
          Twitter/X
        </a>
        <a href="https://github.com" target="_blank" className="hover:text-teal-400">
          GitHub
        </a>
        <a href="mailto:blaizedami@gmail.com" className="hover:text-teal-400">
          Email
        </a>
      </div>
    </footer>
  );
}
