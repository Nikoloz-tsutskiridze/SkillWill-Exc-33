export default async function ServicesPage() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const posts = await data.json();

  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
