export default async function BlogPostPage({ params }) {
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 10 } }
  );
  const post = await data.json();

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
