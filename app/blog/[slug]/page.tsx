import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getBlog(slug: string) {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`, {
    cache: "no-store",
  });

  return res.json();
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <article className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-md">
        <h1 className="text-4xl font-bold mb-4 leading-tight">{blog.title}</h1>

        <p className="text-gray-500 mb-8">{blog.date}</p>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {blog.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
