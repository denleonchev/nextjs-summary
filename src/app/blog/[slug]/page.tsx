export default async function BlogPostPage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  return (
    <main>
      <h1>Blog Post</h1>
      <h2>slug is {slug}</h2>
    </main>
  );
}
