import { notFound } from "next/navigation";
import ArticlePage from "@/features/blog/ArticlePage";
import { blog } from "@/constants/main-blog";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blog.map((article) => ({
    slug: article.id,
  }));
}

export async function generateMetadata({ params }: BlogPageProps) {
  const article = blog.find((article) => article.id === params.slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: article.title,
    openGraph: {
      title: article.title,
      images: [article.image],
    },
  };
}

export default function BlogArticlePage({ params }: BlogPageProps) {
  const article = blog.find((article) => article.id === params.slug);

  if (!article) {
    notFound();
  }

  return <ArticlePage article={article} />;
}
// export default async function BlogArticlePage({ params }: BlogPageProps) {
//   const res = await fetch(`${process.env.API_URL}/api/blog/${params.slug}`, {
//   });

//   if (!res.ok) {
//     notFound();
//   }

//   const article = await res.json();

//   return <ArticlePage article={article} />;
// }

