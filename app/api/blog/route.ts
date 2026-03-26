import getAllBlogs from "@/lib/blog";

export async function GET() {
  const blogs = getAllBlogs();

  return new Response(JSON.stringify({ blogs }), {
    headers: { "Content-Type": "application/json" },
  });
}
