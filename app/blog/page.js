import BlogCard from "../components/BlogCard";

export default async function BlogPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const posts = await data.json();

  return (
    <div>
      <h1>Blog</h1>
      {posts.slice(0, 5).map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}
