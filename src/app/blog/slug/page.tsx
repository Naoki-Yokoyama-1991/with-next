// app/blog/[slug]/page.tsx
type BlogDetailPageProps = {
  params: {
    slug: string;
  };
};

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  return <main>Blog Detail Page: {params.slug}</main>;
}
