import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body.substring(0, 100)}...</p>
      <Link href={`/blog/${post.id}`}>Read more</Link>
    </div>
  );
}
