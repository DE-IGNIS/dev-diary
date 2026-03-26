/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from "fs";
import path from "path";

export default function getAllBlogs() {
  const blogsDirectory = path.join(process.cwd(), "content", "blogs");

  const filenames = fs.readdirSync(blogsDirectory);

  const contents = filenames.map((file) => {
    const filePath = path.join(blogsDirectory, file);

    const content = fs.readFileSync(filePath, "utf-8");

    const parts = content.split("---");

    const frontmatter = parts[1];
    const lines = frontmatter.split("\n");

    const metadata: any = {};

    lines.forEach((line) => {
      const [key, value] = line.split(":");
      if (key && value) {
        metadata[key.trim()] = value.trim();
      }
    });

    return {
      ...metadata,
      slug: file.replace(".md", ""), // ✅ THIS WAS MISSING
    };
  });

  return contents;
}

export function getBlogBySlug(slug: string) {
  const blogsDirectory = path.join(process.cwd(), "content", "blogs");
  const filePath = path.join(blogsDirectory, `${slug}.md`);

  const content = fs.readFileSync(filePath, "utf-8");

  const parts = content.split("---");
  const frontmatter = parts[1] || "";
  const markdownContent = parts[2] || "";

  const lines = frontmatter.split("\n");

  const metadata: any = {};

  lines.forEach((line) => {
    if (!line.trim()) return;

    const [key, value] = line.split(":");
    if (key && value) {
      metadata[key.trim()] = value.trim();
    }
  });

  return {
    ...metadata,
    content: markdownContent.trim(),
  };
}
