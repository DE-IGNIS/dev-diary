import Link from "next/link";

async function getBlogs() {
  const res = await fetch("http://localhost:3000/api/blog", {
    cache: "no-store",
  });

  return res.json();
}

export default async function BlogListPage() {
  const { blogs } = await getBlogs();

  return (
    <div>
      <h1>All Blogs</h1>

      {blogs.map((blog: any, index: number) => 
      (
        <div key={index}>
          
          <Link href={`/blog/${blog.slug}`}>
            <h2>{blog.title}</h2>
          </Link>
          <p>{blog.date}</p>
        </div>
      ))}
    </div>
  );
}