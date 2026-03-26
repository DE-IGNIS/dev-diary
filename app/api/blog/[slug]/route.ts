import { getBlogBySlug } from "@/lib/blog";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (!slug) {
    return new Response(JSON.stringify({ error: "Invalid slug" }), {
      status: 400,
    });
  }
  const blog = getBlogBySlug(slug);

  return new Response(JSON.stringify(blog), {
    headers: { "Content-Type": "application/json" },
  });
}
