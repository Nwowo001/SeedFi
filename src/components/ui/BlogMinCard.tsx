import { Blog } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogMinCard = ({ data }: { data: Blog }) => {
  return (
    <Link
      href={`/blog/1`}
      className="bg-white overflow-hidden flex items-center"
    >
      <Image
        src={data?.image}
        alt={data?.title}
        width={112}
        height={80}
        className="w-28 h-20 object-cover rounded-2xl flex-shrink-0"
      />
      <div className="p-4">
        <p className="text-sm font-semibold text-gray-900 mb-2">
          {data?.title}
        </p>
        <p className="text-sm text-gray-600 flex items-center gap-1">
          <Image
            src="/assets/icons/person.svg"
            alt=""
            width={20}
            height={20}
            className="w-4 h-4"
          />
          By {data?.author}
          <Image
            src="/assets/icons/calendar.svg"
            alt=""
            width={20}
            height={20}
            className="w-4 h-4 ml-2"
          />
          {data?.date}
        </p>
      </div>
    </Link>
  );
};

export default BlogMinCard;
