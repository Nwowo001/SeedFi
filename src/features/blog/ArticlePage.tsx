"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";
import { blog } from "@/constants/blog";
import BlogMinCard from "@/components/ui/BlogMinCard";

interface ArticlePageProps {
  article: Blog;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const relatedArticles = blog
    .filter((a) => a.id !== article.id)
    .slice(0, 4);

  const renderContent = (content: string) => {
    const lines = content.split("\n");
    const elements: JSX.Element[] = [];
    let key = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      if (line.startsWith("# ")) {
        elements.push(
          <h1
            key={key++}
            className="text-3xl font-bold text-gray-900 mb-6 mt-8"
          >
            {line.substring(2)}
          </h1>
        );
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2
            key={key++}
            className="text-2xl font-semibold text-gray-900 mb-4 mt-8"
          >
            {line.substring(3)}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <p
            key={key++}
            className="text-[16px] font-semibold  mb-1 mt-10"
          >
            {line.substring(4)}
          </p>
        );
      } else if (line.startsWith("**") && line.endsWith("**")) {
        elements.push(
          <p key={key++} className="text-lg font-semibold text-gray-900 mb-3">
            {line.substring(2, line.length - 2)}
          </p>
        );
      } else if (line.startsWith("- ")) {
        // Handle bullet points
        const bulletItems: string[] = [];
        let j = i;
        while (j < lines.length && lines[j].trim().startsWith("- ")) {
          bulletItems.push(lines[j].trim().substring(2));
          j++;
        }
        i = j - 1; // Adjust i to skip processed lines

        elements.push(
          <ul key={key++} className="list-disc list-inside mb-4 space-y-2">
            {bulletItems.map((item, idx) => (
              <li key={idx} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        );
      } else if (line === "") {
        elements.push(<div key={key++} className="mb-4"></div>);
      } else if (line.length > 0) {
        elements.push(
          <p key={key++} className="text-gray-700 mb-4 leading-relaxed">
            {line}
          </p>
        );
      }
    }

    return elements;
  };

  return (
    <div className=" bg-white lg:pb-96 pb-30 pt-30 lg:pt-45 px-4 lg:px-15 grid grid-cols-1 lg:grid-cols-3 ">
      <div className="col-span-2 max-w-3xl">
        <div className=" mx-auto px-4 lg:px-8 ">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary hover:text-green-800 transition-colors mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>
        </div>

        <article className=" mx-auto px-4 lg:px-8 ">
          <div className="mb-8">
            <p className="lg:text-[40px] text-xl font-semibold  mb-4 leading-tight">
              {article.title}
            </p>

            <div className="flex items-center gap-4 text-sm mb-6">
              <span className="flex items-center gap-1">
                <Image
                  src="/assets/icons/person.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                By {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Image
                  src="/assets/icons/calendar.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                {article.date}
              </span>
            </div>
          </div>
          <div className="mb-8">
            <div className="w-full aspect-video relative">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover rounded-3xl"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
          </div>

          <p className=" text-black text-[16px] font-semibold font-body max-w-none">
            {article.content && renderContent(article.content)}
          </p>
        </article>
        
      </div>
      {/* Related Articles Section */}
      <aside className="lg:pr-16 py-6 lg:py-17 lg:px-0 px-4">
        <div className=" mx-auto ">
          <p className="text-2xl font-semibold  mb-4">
            You may also like
          </p>
          <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 ">
            {relatedArticles.map((item:Blog) => (
              <BlogMinCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default ArticlePage;

