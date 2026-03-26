import { getBlogBySlug } from "@/lib/blog";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  return new Response(JSON.stringify(blog), {
    headers: { "Content-Type": "application/json" },
  });
}
