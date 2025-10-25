// Later you can fetch posts from Markdown, Notion, or a CMS (Sanity, Contentful).
// For now, let’s make it static with dummy posts.

const posts = [
  {
    title: "Getting Started with Next.js 13",
    date: "March 2025",
    excerpt: "A beginner-friendly guide to setting up your first project with Next.js App Router.",
  },
  {
    title: "Building Responsive UI with Tailwind",
    date: "February 2025",
    excerpt: "Tips and tricks for creating sleek, mobile-first designs with Tailwind CSS.",
  },
  {
    title: "Why Web3 Excites Me",
    date: "January 2025",
    excerpt: "Exploring the potential of decentralized apps and blockchain technology.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">Blog</h1>
      <div className="max-w-3xl mx-auto space-y-8">
        {posts.map((post, i) => (
          <article key={i} className="p-6 bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">{post.title}</h2>
            <p className="text-gray-400 text-sm">{post.date}</p>
            <p className="mt-2">{post.excerpt}</p>
            <a
              href="#"
              className="text-teal-400 hover:underline mt-3 inline-block"
            >
              Read More →
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}
